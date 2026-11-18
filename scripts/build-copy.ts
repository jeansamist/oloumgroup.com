/**
 * Generates the website copy documents from the dictionaries (single source of truth):
 *   docs/03-COPY-DU-SITE.md      (French)
 *   docs/03-WEBSITE-COPY-EN.md   (English)
 * Run with `pnpm copy` after editing src/i18n/dictionaries.
 */
import { writeFileSync } from "node:fs"
import en from "../src/i18n/dictionaries/en"
import fr from "../src/i18n/dictionaries/fr"
import type { Dictionary } from "../src/i18n/dictionaries/fr"
import type { Block, PageData } from "../src/i18n/types"
import { routes, type PageKey } from "../src/lib/routes"

const L: string[] = []
const p = (s = "") => L.push(s)
const list = (items: string[]) => items.forEach((i) => p(`- ${i}`))

function block(b: Block, d: Dictionary) {
  const head = (x: { eyebrow?: string; title?: string; lead?: string }, kind: string) => {
    p(`#### ${kind}${x.eyebrow ? ` · ${x.eyebrow}` : ""}`)
    if (x.title) p(`**${x.title}**`)
    if (x.lead) p(x.lead)
    p()
  }
  switch (b.type) {
    case "intro":
      head(b, "Introduction (mot par mot)")
      p(b.text)
      if (b.sub) p(`\n> ${b.sub}`)
      break
    case "cards":
      head(b, "Cartes")
      b.items.forEach((c, i) => p(`${i + 1}. **${c.title}**${c.tag ? ` _(${c.tag})_` : ""} — ${c.text}${c.meta ? ` · ${c.meta}` : ""}`))
      break
    case "split":
      head(b, "Texte + image")
      b.text.forEach((t) => p(t + "\n"))
      if (b.bullets) list(b.bullets)
      if (b.cta) p(`\n[${b.cta.label}]`)
      break
    case "steps":
      head(b, "Étapes")
      b.steps.forEach((s, i) => p(`${i + 1}. **${s.title}** — ${s.text}`))
      break
    case "toggle":
      head(b, "Bascule")
      b.options.forEach((o) => {
        p(`**${o.label} — ${o.title}** : ${o.text}`)
        list(o.points)
        if (o.cta) p(`[${o.cta.label}]`)
        p()
      })
      break
    case "buyOrRent":
      block({ type: "toggle", ...d.buyOrRent }, d)
      return
    case "index":
      head(b, "Liste indexée")
      b.items.forEach((it, i) => p(`${String(i + 1).padStart(2, "0")}. **${it.title}** — ${it.text}${it.tags ? ` _(${it.tags.join(", ")})_` : ""}`))
      if (b.note) p(`\n_${b.note}_`)
      break
    case "stats":
      p("#### Chiffres clés")
      b.items.forEach((s) => p(`- **${s.value}** — ${s.label}`))
      break
    case "faq":
      head(b, "FAQ")
      b.items.forEach(([q, a]) => p(`- **${q}** ${a}`))
      break
    case "quotes":
      head(b, "Témoignages")
      b.items.forEach((q) => p(`> « ${q.quote} » — ${q.author}, ${q.role}\n`))
      break
    case "timeline":
      head(b, "Frise")
      b.items.forEach((t) => p(`- **${t.year} — ${t.title}** : ${t.text}`))
      break
    case "table":
      head(b, "Tableau")
      p(`| ${b.head.join(" | ")} |`)
      p(`|${b.head.map(() => " --- ").join("|")}|`)
      b.rows.forEach((r) => p(`| ${r.join(" | ")} |`))
      if (b.note) p(`\n_${b.note}_`)
      break
    case "gallery":
      head(b, "Galerie")
      list(b.items.map((i) => i.caption))
      break
    case "sister":
      p(`#### Renvoi · ${b.eyebrow}`)
      p(`**${b.title}** — ${b.text} [${b.cta.label}]`)
      break
    case "people":
      head(b, "Équipe")
      b.items.forEach((x) => p(`- **${x.name}**, ${x.role} — ${x.bio}`))
      break
    case "jobs":
      head(b, "Offres")
      b.items.forEach((j) => p(`- **${j.title}** (${d.entities[j.entity].name}, ${j.place}, ${j.contract}) — ${j.text}`))
      p(`\n[${b.spontaneous.label}]`)
      break
    case "chips":
      head(b, "Secteurs")
      b.items.forEach((c) => p(`- **${c.title}** — ${c.text}`))
      break
    case "specs":
      head(b, "Fiche technique")
      b.items.forEach(([k, v]) => p(`- **${k}** : ${v}`))
      break
    case "marquee":
      p("#### Bandeau défilant")
      p(b.items.join(" · "))
      break
    case "tree":
      head(d.tree, "Organigramme interactif")
      p(`- **${d.tree.root.name}** — ${d.tree.root.text}`)
      d.tree.nodes.forEach((n) => {
        p(`  - **${d.entities[n.entity].name}** (${d.entities[n.entity].role}) — ${n.model}`)
        n.children.forEach((c) => p(`    - **${d.entities[c.entity].name}** — ${c.text}`))
      })
      break
    case "entities":
      head(d.entityCards, "Entités (défilement horizontal)")
      d.entityCards.items.forEach((e) => p(`${e.number}. **${e.title}** — ${e.text} _(${e.keywords.join(" · ")})_ [${e.cta.label}]`))
      break
    case "pillars":
      head(d.pillars, "Piliers épinglés")
      d.pillars.items.forEach((x) => p(`- **${x.title}** (${d.entities[x.entity].name}) — ${x.text}`))
      break
    case "projects":
      head(d.projects, b.filters ? "Réalisations (filtres)" : "Réalisations (aperçu)")
      ;(b.limit ? d.projectItems.slice(0, b.limit) : d.projectItems).forEach((x) =>
        p(`- **${x.title}** — ${d.projectCategories[x.category]}, ${x.city}, ${x.year}. ${x.text}`),
      )
      break
    case "news":
      head({ ...d.news, ...b }, "Actualités")
      d.articles.slice(0, b.limit ?? d.articles.length).forEach((a) => p(`- **${a.title}** (${a.date}, ${a.category}) — ${a.excerpt}`))
      break
    case "teaser":
      p(`#### Teaser · ${b.eyebrow}`)
      p(`**${b.title}** — ${b.text}`)
      b.facts.forEach(([k, v]) => p(`- ${k} : ${v}`))
      p(`[${b.cta.label}]`)
      break
    case "legal":
      b.sections.forEach((s) => {
        p(`**${s.title}**`)
        s.text.forEach((t) => p(t))
        p()
      })
      break
    case "contact":
      p("#### Formulaire de contact")
      p(`${d.forms.needLabel} ${d.forms.needs.map((n) => n.label).join(" · ")}`)
      p(`Champs : ${[d.forms.name, d.forms.company, d.forms.phone, d.forms.email, d.forms.city, d.forms.message].join(" · ")}`)
      d.forms.contactCards.forEach((c) => p(`- **${c.title}** : ${c.lines.join(" — ")}`))
      break
    case "quote":
      p("#### Demande de devis (3 étapes)")
      p(d.forms.quote.steps.join(" → "))
      p(`${d.forms.quote.type} : ${d.forms.quote.types.join(" · ")}`)
      p(`${d.forms.quote.model} : ${d.forms.quote.models.join(" · ")} — ${d.forms.quote.finish} : ${d.forms.quote.finishes.join(" · ")}`)
      break
  }
  p()
}

function page(path: string, x: PageData | Dictionary["home"], d: Dictionary) {
  p(`## ${x.name} \`${path}\``)
  p()
  p(`**SEO** : ${x.metaTitle}  `)
  p(`**Meta** : ${x.metaDescription}`)
  p()
  if ("words" in x.hero) {
    const h = x.hero
    p(`#### Hero · ${h.eyebrow}`)
    p(`**${h.titleBefore} [${h.words.join(" / ")}] ${h.titleAfter}**`)
    p(h.text)
    p(`Boutons : ${h.ctas.map((c) => c.label).join(" · ")} — Preuves : ${h.proofs.join(" · ")}`)
  } else {
    const h = x.hero
    p(`#### Hero · ${h.eyebrow}${h.badge ? ` · badge « ${h.badge} »` : ""}`)
    p(`**${h.title}**`)
    p(h.text)
    if (h.ctas) p(`Boutons : ${h.ctas.map((c) => c.label).join(" · ")}`)
  }
  p()
  x.blocks.forEach((b) => block(b, d))
  if (!("noCta" in x && x.noCta)) p(`#### CTA final\n**${d.cta.title}** — ${d.cta.text}\n`)
  p("---\n")
}

function build(d: Dictionary, lang: "fr" | "en") {
  L.length = 0
  p(lang === "fr" ? "# Oloum Group – Copy du site (français)" : "# Oloum Group – Website copy (English)")
  p()
  p(
    lang === "fr"
      ? "> Fichier généré par `pnpm copy` depuis `src/i18n/dictionaries/fr`. Ne pas modifier à la main : modifier le dictionnaire puis relancer.\n> Convention : `*mots*` = mot surligné. **Contenu de démonstration** : chiffres, projets, noms, témoignages, tarifs et dates sont des maquettes à valider avec le client (voir `05-A-FOURNIR.md`)."
      : "> Generated by `pnpm copy` from `src/i18n/dictionaries/en`. Edit the dictionary, not this file.\n> `*words*` = highlighted words. **Demo content**: figures, projects, names, testimonials, prices and dates are mocks to validate with the client.",
  )
  p()
  p(lang === "fr" ? "## Éléments globaux" : "## Global elements")
  p(`**Signature** : ${d.meta.signature}`)
  p(`**Header** : ${d.header.nav.map((n) => n.label).join(" · ")} · [${d.header.cta}]`)
  p(`**Méga-menu « ${d.header.nav[0].label} »** : ${d.header.groupMenu.links.map((l) => `${l.label} (${l.text})`).join(" · ")}`)
  p(`**Méga-menu « ${d.header.nav[1].label} »** : ${d.header.entitiesMenu.entities.map((e) => `${d.entities[e.entity].name} → ${e.links.map((l) => l.label).join(", ")}`).join(" · ")} · ${d.header.entitiesMenu.side.title} ${d.header.entitiesMenu.side.text}`)
  p(`**Footer** : ${d.footer.description}`)
  p(`**Newsletter** : ${d.footer.newsletter.title} — ${d.footer.newsletter.text}`)
  p(`**404** : ${d.notFound.title} — ${d.notFound.text}`)
  p()
  p("---\n")
  page("/", d.home, d)
  for (const key of Object.keys(d.pages) as PageKey[]) page(routes[key], d.pages[key], d)
  p(lang === "fr" ? "## Articles" : "## Articles")
  for (const a of d.articles) {
    p(`### ${a.title} \`/actualites/${a.slug}\``)
    p(`_${a.date} · ${a.category} · ${a.readTime} min_\n`)
    p(a.excerpt + "\n")
    a.body.forEach((b) => p(`${b.heading ? `**${b.heading}** ` : ""}${b.text}\n`))
  }
  return L.join("\n")
}

writeFileSync("docs/03-COPY-DU-SITE.md", build(fr, "fr"))
writeFileSync("docs/03-WEBSITE-COPY-EN.md", build(en, "en"))
console.log("docs/03-COPY-DU-SITE.md and docs/03-WEBSITE-COPY-EN.md written")
