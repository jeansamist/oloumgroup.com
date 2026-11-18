/**
 * Client copy deck (French): one document per page, generated from the dictionaries,
 * in three formats, each in its own folder:
 *   docs/copie-client/markdown/NN-page.md
 *   docs/copie-client/pdf/NN-page.pdf     (printed with Chrome)
 *   docs/copie-client/docx/NN-page.docx   (editable by the client in Word)
 *
 * Run: `pnpm client-copy` (requires Google Chrome for the PDFs; set CHROME_PATH if needed).
 */
import { mkdirSync, rmSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  Header,
  HeadingLevel,
  LevelFormat,
  Packer,
  PageNumber,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx"
import puppeteer from "puppeteer-core"

/** TextRun with Arial set explicitly (some viewers ignore document defaults). */
const T = (o: string | ConstructorParameters<typeof TextRun>[0]) => new TextRun(typeof o === "string" ? { text: o, font: "Arial" } : { font: "Arial", ...(o as object) })
import d from "../src/i18n/dictionaries/fr"
import type { Block, PageData } from "../src/i18n/types"
import { articlePath, routes, type PageKey } from "../src/lib/routes"

/* ─── Document model ──────────────────────────────────────────────────────── */

type Node =
  | { t: "h2" | "h3" | "p" | "note" | "field"; text: string; label?: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "quote"; text: string; by: string }

type Doc = { file: string; title: string; url: string; intro: string; nodes: Node[] }

const clean = (s: string) => s.replace(/\*\*?([^*]+)\*\*?/g, "$1")
const F = (label: string, text: string): Node => ({ t: "field", label, text: clean(text) })

/* ─── Copy → nodes ────────────────────────────────────────────────────────── */

const blockLabel: Partial<Record<Block["type"], string>> = {
  intro: "Texte d'introduction",
  cards: "Cartes",
  split: "Texte et photo",
  steps: "Étapes",
  toggle: "Bascule à deux onglets",
  buyOrRent: "Bascule « Acheter / Louer »",
  index: "Liste numérotée",
  stats: "Chiffres clés",
  faq: "Questions fréquentes",
  quotes: "Témoignages",
  timeline: "Frise chronologique",
  table: "Tableau",
  gallery: "Galerie photos",
  sister: "Bandeau vers une autre entité",
  people: "Équipe",
  jobs: "Offres d'emploi",
  chips: "Secteurs",
  specs: "Fiche technique",
  marquee: "Bandeau défilant",
  tree: "Organigramme du groupe",
  entities: "Cartes des entités",
  pillars: "Construire · Louer · Produire",
  projects: "Réalisations",
  news: "Actualités",
  teaser: "Encart « L'Usine »",
  legal: "Contenu juridique",
  contact: "Formulaire de contact",
  quote: "Formulaire de devis",
}

function heading(n: Node[], x: { eyebrow?: string; title?: string; lead?: string }) {
  if (x.eyebrow) n.push(F("Petit titre", x.eyebrow))
  if (x.title) n.push(F("Titre", x.title))
  if (x.lead) n.push(F("Sous-titre", x.lead))
}

function blockNodes(b: Block): Node[] {
  const n: Node[] = []
  switch (b.type) {
    case "intro":
      heading(n, b)
      n.push(F("Texte", b.text))
      if (b.sub) n.push(F("Texte secondaire", b.sub))
      break
    case "cards":
      heading(n, b)
      b.items.forEach((c, i) => {
        n.push({ t: "h3", text: `Carte ${i + 1}` })
        if (c.tag) n.push(F("Étiquette", c.tag))
        n.push(F("Titre", c.title), F("Texte", c.text))
        if (c.meta) n.push(F("Mention", c.meta))
      })
      break
    case "split":
      heading(n, b)
      b.text.forEach((t, i) => n.push(F(`Paragraphe ${i + 1}`, t)))
      if (b.bullets) n.push({ t: "p", text: "Points clés :" }, { t: "ul", items: b.bullets })
      if (b.cta) n.push(F("Lien", b.cta.label))
      break
    case "steps":
      heading(n, b)
      b.steps.forEach((s, i) => n.push({ t: "h3", text: `Étape ${i + 1}` }, F("Titre", s.title), F("Texte", s.text)))
      break
    case "buyOrRent":
      return blockNodes({ type: "toggle", ...d.buyOrRent })
    case "toggle":
      heading(n, b)
      b.options.forEach((o) => {
        n.push({ t: "h3", text: `Onglet « ${o.label} »` }, F("Titre", o.title), F("Texte", o.text), { t: "ul", items: o.points })
        if (o.cta) n.push(F("Bouton", o.cta.label))
      })
      break
    case "index":
      heading(n, b)
      n.push({ t: "table", head: ["N°", "Nom", "Description", "Usages"], rows: b.items.map((it, i) => [String(i + 1).padStart(2, "0"), it.title, it.text, (it.tags ?? []).join(", ")]) })
      if (b.note) n.push({ t: "note", text: b.note })
      break
    case "stats":
      n.push({ t: "table", head: ["Chiffre", "Légende"], rows: b.items.map((s) => [s.value, s.label]) })
      break
    case "faq":
      heading(n, b)
      b.items.forEach(([q, a], i) => n.push({ t: "h3", text: `Question ${i + 1}` }, F("Question", q), F("Réponse", a)))
      break
    case "quotes":
      heading(n, b)
      b.items.forEach((q) => n.push({ t: "quote", text: q.quote, by: `${q.author} — ${q.role}` }))
      break
    case "timeline":
      heading(n, b)
      n.push({ t: "table", head: ["Année", "Titre", "Texte"], rows: b.items.map((x) => [x.year, x.title, x.text]) })
      break
    case "table":
      heading(n, b)
      n.push({ t: "table", head: b.head.map((h) => h || "—"), rows: b.rows })
      if (b.note) n.push({ t: "note", text: b.note })
      break
    case "gallery":
      heading(n, b)
      n.push({ t: "p", text: "Légendes des photos :" }, { t: "ul", items: b.items.map((i) => i.caption) })
      break
    case "sister":
      n.push(F("Petit titre", b.eyebrow), F("Titre", b.title), F("Texte", b.text), F("Bouton", b.cta.label))
      break
    case "people":
      heading(n, b)
      n.push({ t: "table", head: ["Nom", "Fonction", "Entité", "Présentation"], rows: b.items.map((p) => [p.name, p.role, d.entities[p.entity].name, p.bio]) })
      break
    case "jobs":
      heading(n, b)
      n.push({ t: "table", head: ["Poste", "Entité", "Lieu", "Contrat", "Description"], rows: b.items.map((j) => [j.title, d.entities[j.entity].name, j.place, j.contract, j.text]) })
      n.push(F("Bouton", b.spontaneous.label))
      break
    case "chips":
      heading(n, b)
      n.push({ t: "table", head: ["Secteur", "Description"], rows: b.items.map((c) => [c.title, c.text]) })
      break
    case "specs":
      heading(n, b)
      n.push({ t: "table", head: ["Caractéristique", "Valeur"], rows: b.items.map(([k, v]) => [k, v]) })
      break
    case "marquee":
      n.push(F("Mots qui défilent", b.items.join(" · ")))
      break
    case "tree":
      heading(n, d.tree)
      n.push(F(d.tree.root.name, d.tree.root.text))
      d.tree.nodes.forEach((x) => {
        n.push(F(d.entities[x.entity].name, `${d.entities[x.entity].role} — ${x.model}`))
        x.children.forEach((c) => n.push(F(`   └ ${d.entities[c.entity].name}`, c.text)))
      })
      break
    case "entities":
      heading(n, d.entityCards)
      d.entityCards.items.forEach((e) => n.push({ t: "h3", text: `Carte ${e.number}` }, F("Titre", e.title), F("Texte", e.text), F("Mots-clés", e.keywords.join(" · ")), F("Bouton", e.cta.label)))
      break
    case "pillars":
      heading(n, d.pillars)
      d.pillars.items.forEach((p) => n.push({ t: "h3", text: p.title }, F("Entité", d.entities[p.entity].name), F("Texte", p.text), F("Liens", p.links.map((l) => l.label).join(" · "))))
      break
    case "projects":
      heading(n, d.projects)
      n.push({
        t: "table",
        head: ["Réalisation", "Entité", "Catégorie", "Lieu", "Année", "Description"],
        rows: (b.limit ? d.projectItems.slice(0, b.limit) : d.projectItems).map((x) => [x.title, d.entities[x.entity].short, d.projectCategories[x.category], x.city, x.year, x.text]),
      })
      if (b.limit) n.push({ t: "note", text: `Aperçu des ${b.limit} premières réalisations. La liste complète est dans le document « Réalisations ».` })
      break
    case "news":
      heading(n, { ...d.news, ...b })
      n.push({ t: "ul", items: d.articles.slice(0, b.limit ?? d.articles.length).map((a) => `${a.title} (${a.category})`) })
      n.push({ t: "note", text: "Le texte complet des articles est dans le document « Actualités »." })
      break
    case "teaser":
      n.push(F("Petit titre", b.eyebrow), F("Titre", b.title), F("Texte", b.text))
      n.push({ t: "table", head: ["Information", "Valeur"], rows: b.facts.map(([k, v]) => [k, v]) })
      n.push(F("Bouton", b.cta.label))
      break
    case "legal":
      n.push(F("Date de mise à jour", b.updated))
      b.sections.forEach((s) => n.push({ t: "h3", text: s.title }, ...s.text.map((t) => ({ t: "p", text: t }) as Node)))
      break
    case "contact": {
      const f = d.forms
      n.push(F("Question", f.needLabel), F("Choix proposés", f.needs.map((x) => x.label).join(" · ")))
      n.push(F("Champs", [f.name, f.company, f.phone, f.email, f.city, f.message].join(" · ")))
      n.push(F("Aide du message", f.messagePlaceholder), F("Consentement", f.consent), F("Boutons", `${f.submitEmail} · ${f.submitWhatsapp}`), F("Message de confirmation", f.success))
      n.push({ t: "h3", text: "Cartes de contact" })
      n.push({ t: "table", head: ["Carte", "Informations"], rows: f.contactCards.map((c) => [c.title, c.lines.join(" — ")]) })
      n.push({ t: "h3", text: f.directory.title })
      n.push({ t: "table", head: ["Entité", "Téléphone", "E-mail"], rows: f.directory.items.map((x) => [d.entities[x.entity as keyof typeof d.entities].name, x.phone, x.email]) })
      break
    }
    case "quote": {
      const q = d.forms.quote
      n.push(F("Étapes", q.steps.join(" → ")), F(q.type, q.types.join(" · ")), F(q.model, q.models.join(" · ")), F(q.finish, q.finishes.join(" · ")))
      n.push(F("Autres champs", [q.size, q.duration, q.deadline, q.budget].join(" · ")), F("Bouton", q.submit))
      break
    }
  }
  return n
}

function pageNodes(p: PageData | typeof d.home): Node[] {
  const n: Node[] = []
  n.push({ t: "h2", text: "Référencement Google" }, F("Titre de la page (onglet et Google)", p.metaTitle), F("Description Google", p.metaDescription))
  n.push({ t: "h2", text: "Section 1 — En-tête de page" })
  if ("words" in p.hero) {
    const h = p.hero
    n.push(F("Petit titre", h.eyebrow), F("Titre", `${h.titleBefore} [${h.words.join(" / ")}] ${h.titleAfter}`))
    n.push({ t: "note", text: "Le mot entre crochets change automatiquement toutes les 3 secondes." })
    n.push(F("Texte", h.text), F("Boutons", h.ctas.map((c) => c.label).join(" · ")), F("Points forts", h.proofs.join(" · ")))
    n.push(F("Légendes des photos", h.slides.map((s) => s.caption).join(" · ")))
  } else {
    const h = p.hero
    n.push(F("Petit titre", h.eyebrow))
    if (h.badge) n.push(F("Badge", h.badge))
    n.push(F("Titre", h.title), F("Texte", h.text))
    if (h.ctas) n.push(F("Boutons", h.ctas.map((c) => c.label).join(" · ")))
  }
  p.blocks.forEach((b, i) => {
    n.push({ t: "h2", text: `Section ${i + 2} — ${blockLabel[b.type] ?? b.type}` }, ...blockNodes(b))
  })
  if (!("noCta" in p && p.noCta)) {
    n.push({ t: "h2", text: `Section ${p.blocks.length + 2} — Appel à l'action (bas de page)` })
    n.push({ t: "note", text: "Bandeau commun à toutes les pages : à relire dans le document « Éléments communs »." })
  }
  return n
}

const INTRO =
  "Ce document reprend tous les textes de la page. Vous pouvez modifier directement le texte, ou ajouter vos remarques. Les textes actuels sont des propositions : les chiffres et les dates (surlignés en jaune) sont des exemples à confirmer en priorité, tout comme les noms, projets, témoignages et tarifs."

function buildDocs(): Doc[] {
  const docs: Doc[] = []
  const pad = (i: number) => String(i).padStart(2, "0")
  // 00 — common elements
  const c: Node[] = []
  c.push({ t: "h2", text: "Signature et description du groupe" }, F("Signature", d.meta.signature), F("Description (Google)", d.meta.description))
  c.push({ t: "h2", text: "Menu principal" }, F("Liens", d.header.nav.map((x) => x.label).join(" · ")), F("Bouton", d.header.cta))
  c.push({ t: "h3", text: `Sous-menu « ${d.header.nav[0].label} »` }, F("Titre", d.header.groupMenu.title), F("Texte", d.header.groupMenu.text))
  c.push({ t: "table", head: ["Lien", "Description"], rows: d.header.groupMenu.links.map((l) => [l.label, l.text]) })
  c.push({ t: "h3", text: `Sous-menu « ${d.header.nav[1].label} »` })
  c.push({ t: "table", head: ["Entité", "Liens"], rows: d.header.entitiesMenu.entities.map((e) => [d.entities[e.entity].name, e.links.map((l) => l.label).join(", ")]) })
  c.push(F("Encart — titre", d.header.entitiesMenu.side.title), F("Encart — texte", d.header.entitiesMenu.side.text), F("Encart — bouton", d.header.entitiesMenu.side.cta.label))
  c.push({ t: "h2", text: "Nom et rôle des entités" })
  c.push({ t: "table", head: ["Entité", "Rôle"], rows: Object.values(d.entities).map((e) => [e.name, e.role]) })
  c.push({ t: "h2", text: "Appel à l'action (bas de chaque page)" }, F("Petit titre", d.cta.eyebrow), F("Titre", d.cta.title), F("Texte", d.cta.text), F("Boutons", `${d.cta.primary.label} · ${d.cta.secondary.label}`))
  const ft = d.footer
  c.push({ t: "h2", text: "Pied de page" }, F("Description", ft.description), F("Bandeau défilant", ft.marquee.join(" · ")), F("Adresse", ft.address), F("Horaires", ft.hours.join(" — ")))
  c.push({ t: "table", head: ["Colonne", "Liens"], rows: ft.columns.map((col) => [col.title, col.links.map((l) => l.label).join(", ")]) })
  c.push(F("Lettre d'information — titre", ft.newsletter.title), F("Lettre d'information — texte", ft.newsletter.text), F("Confirmation d'inscription", ft.newsletter.success), F("Mentions", `${ft.rights} · ${ft.madeIn}`))
  c.push({ t: "h2", text: "Page d'erreur (page introuvable)" }, F("Titre", d.notFound.title), F("Texte", d.notFound.text), F("Boutons", `${d.notFound.home} · ${d.notFound.contact}`))
  docs.push({ file: `${pad(0)}-elements-communs`, title: "Éléments communs", url: "Toutes les pages", intro: "Textes présents sur toutes les pages : menu, bas de page, appel à l'action, page d'erreur.", nodes: c })

  docs.push({ file: `${pad(1)}-accueil`, title: d.home.name, url: "oloumgroup.com/fr", intro: INTRO, nodes: pageNodes(d.home) })
  const keys = Object.keys(d.pages) as PageKey[]
  keys.forEach((k, i) => {
    const p = d.pages[k]
    const nodes = pageNodes(p)
    if (k === "news") {
      d.articles.forEach((a) => {
        nodes.push({ t: "h2", text: `Article — ${a.title}` }, F("Adresse", `oloumgroup.com/fr${articlePath(a.slug)}`), F("Date", a.date), F("Catégorie", a.category), F("Temps de lecture", `${a.readTime} min`), F("Titre", a.title), F("Résumé", a.excerpt))
        a.body.forEach((b) => {
          if (b.heading) nodes.push({ t: "h3", text: b.heading })
          nodes.push({ t: "p", text: b.text })
        })
      })
    }
    const slug = routes[k].split("/").filter(Boolean).pop()!
    docs.push({ file: `${pad(i + 2)}-${slug}`, title: p.name, url: `oloumgroup.com/fr${routes[k]}`, intro: INTRO, nodes })
  })
  return docs
}

/* ─── Highlight: numbers and dates are the facts to confirm first ─────────── */

const NUM = /(\d[\d\s.,]*\d|\d)(\s?(%|\+|h|m²|m³|mm|FCFA|ans?|mois|semaines?|jours?|personnes|couverts|pieds|postes|places|lits|modules|km))?/g
function parts(text: string) {
  const out: { s: string; hi: boolean }[] = []
  let last = 0
  for (const m of text.matchAll(NUM)) {
    if (m.index! > last) out.push({ s: text.slice(last, m.index), hi: false })
    out.push({ s: m[0], hi: true })
    last = m.index! + m[0].length
  }
  if (last < text.length) out.push({ s: text.slice(last), hi: false })
  return out
}

/* ─── Markdown ────────────────────────────────────────────────────────────── */

const mdCell = (s: string) => s.replace(/\|/g, "\\|")
function toMarkdown(doc: Doc) {
  const L = [`# Oloum Group — ${doc.title}`, "", `**Page :** ${doc.url}  `, "**Statut :** proposition à valider", "", `> ${doc.intro}`, ""]
  for (const n of doc.nodes) {
    if (n.t === "h2") L.push(`## ${n.text}`, "")
    else if (n.t === "h3") L.push(`### ${n.text}`, "")
    else if (n.t === "field") L.push(`**${n.label} :** ${n.text}`, "")
    else if (n.t === "p") L.push(n.text, "")
    else if (n.t === "note") L.push(`_Note : ${n.text}_`, "")
    else if (n.t === "quote") L.push(`> « ${n.text} »  `, `> — ${n.by}`, "")
    else if (n.t === "ul") L.push(...n.items.map((i) => `- ${i}`), "")
    else if (n.t === "ol") L.push(...n.items.map((i, k) => `${k + 1}. ${i}`), "")
    else if (n.t === "table") L.push(`| ${n.head.map(mdCell).join(" | ")} |`, `|${n.head.map(() => " --- ").join("|")}|`, ...n.rows.map((r) => `| ${r.map(mdCell).join(" | ")} |`), "")
  }
  return L.join("\n")
}

/* ─── HTML → PDF ─────────────────────────────────────────────────────────── */

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
const hl = (s: string) => parts(s).map((p) => (p.hi ? `<mark>${esc(p.s)}</mark>` : esc(p.s))).join("")

function toHtml(doc: Doc) {
  const body = doc.nodes
    .map((n) => {
      switch (n.t) {
        case "h2":
          return `<h2>${esc(n.text)}</h2>`
        case "h3":
          return `<h3>${esc(n.text)}</h3>`
        case "field":
          return `<div class="field"><span class="label">${esc(n.label!)}</span><span class="value">${hl(n.text)}</span></div>`
        case "p":
          return `<p>${hl(n.text)}</p>`
        case "note":
          return `<p class="note">${esc(n.text)}</p>`
        case "quote":
          return `<blockquote>« ${hl(n.text)} »<cite>${esc(n.by)}</cite></blockquote>`
        case "ul":
          return `<ul>${n.items.map((i) => `<li>${hl(i)}</li>`).join("")}</ul>`
        case "ol":
          return `<ol>${n.items.map((i) => `<li>${hl(i)}</li>`).join("")}</ol>`
        case "table":
          return `<table><thead><tr>${n.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${n.rows.map((r) => `<tr>${r.map((c) => `<td>${hl(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`
      }
    })
    .join("\n")
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>
  * { box-sizing: border-box; }
  body { font-family: "Helvetica Neue", Arial, sans-serif; color: #1a1a1a; font-size: 10.5pt; line-height: 1.5; margin: 0; }
  .cover { border-left: 8px solid #920f15; padding: 6mm 0 6mm 8mm; margin-bottom: 8mm; background: linear-gradient(90deg,#f3f4f6,#fff); }
  .brand { font: 700 9pt Arial; letter-spacing: .25em; color: #920f15; text-transform: uppercase; }
  h1 { font-size: 26pt; margin: 2mm 0 1mm; letter-spacing: -.02em; }
  .meta { color: #666; font-size: 9.5pt; }
  .intro { background: #fff6e8; border-left: 4px solid #fcae42; padding: 4mm 5mm; margin: 0 0 6mm; font-size: 9.5pt; }
  h2 { font-size: 13.5pt; color: #fff; background: #920f15; padding: 2.2mm 4mm; margin: 8mm 0 3mm; break-after: avoid; }
  h3 { font-size: 11pt; color: #920f15; margin: 5mm 0 2mm; border-bottom: 1px solid #d9dade; padding-bottom: 1mm; break-after: avoid; }
  .field { display: grid; grid-template-columns: 42mm 1fr; gap: 4mm; padding: 1.8mm 0; border-bottom: 1px dotted #d9dade; break-inside: avoid; }
  .label { font-weight: 700; color: #6e0b10; font-size: 9pt; }
  p { margin: 0 0 2.5mm; }
  .note { color: #666; font-style: italic; font-size: 9pt; }
  mark { background: #fde68a; padding: 0 .4mm; }
  ul, ol { margin: 1mm 0 3mm 5mm; padding-left: 4mm; }
  table { width: 100%; border-collapse: collapse; margin: 2mm 0 4mm; font-size: 9pt; }
  th { background: #1a1a1a; color: #fff; text-align: left; padding: 2mm; }
  td { border-bottom: 1px solid #d9dade; padding: 2mm; vertical-align: top; }
  tr { break-inside: avoid; }
  tbody tr:nth-child(even) td { background: #f3f4f6; }
  blockquote { margin: 2mm 0 4mm; padding: 3mm 5mm; border-left: 4px solid #fcae42; background: #f3f4f6; font-size: 11pt; }
  cite { display: block; margin-top: 2mm; font-size: 9pt; color: #666; font-style: normal; }
</style></head><body>
<div class="cover"><div class="brand">Oloum Group · Copie du site</div><h1>${esc(doc.title)}</h1><div class="meta">Page : ${esc(doc.url)} · Statut : proposition à valider · Version du ${new Date().toLocaleDateString("fr-FR")}</div></div>
<div class="intro">${esc(doc.intro)}</div>
${body}
</body></html>`
}

/* ─── DOCX ───────────────────────────────────────────────────────────────── */

const RED = "920F15"
const runs = (text: string, base: { bold?: boolean; color?: string; size?: number; italics?: boolean } = {}) =>
  parts(text).map((p) => T({ text: p.s, ...base, ...(p.hi ? { highlight: "yellow" } : {}) }))

const W = 9638 // A4 content width in DXA with 2 cm margins
const border = { style: BorderStyle.SINGLE, size: 4, color: "D9DADE" }
const cellBorders = { top: border, bottom: border, left: border, right: border }

function docxTable(head: string[], rows: string[][]) {
  const widths = head.length === 2 ? [Math.round(W * 0.3), W - Math.round(W * 0.3)] : head.map(() => Math.floor(W / head.length))
  widths[widths.length - 1] = W - widths.slice(0, -1).reduce((a, b) => a + b, 0)
  const cell = (text: string, i: number, header: boolean) =>
    new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      borders: cellBorders,
      shading: header ? { type: ShadingType.CLEAR, fill: "1A1A1A", color: "auto" } : undefined,
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
      children: [new Paragraph({ children: header ? [T({ text, bold: true, color: "FFFFFF", size: 18 })] : runs(text, { size: 18 }) })],
    })
  return new Table({
    width: { size: W, type: WidthType.DXA },
    columnWidths: widths,
    rows: [new TableRow({ tableHeader: true, children: head.map((h, i) => cell(h, i, true)) }), ...rows.map((r) => new TableRow({ children: r.map((c, i) => cell(c, i, false)) }))],
  })
}

function toDocx(doc: Doc) {
  const children: (Paragraph | Table)[] = [
    new Paragraph({ children: [T({ text: "OLOUM GROUP · COPIE DU SITE", bold: true, color: RED, size: 18, characterSpacing: 40 })] }),
    new Paragraph({ heading: HeadingLevel.TITLE, children: [T(doc.title)] }),
    new Paragraph({ children: [T({ text: `Page : ${doc.url} · Statut : proposition à valider · Version du ${new Date().toLocaleDateString("fr-FR")}`, color: "666666", size: 18 })] }),
    new Paragraph({
      shading: { type: ShadingType.CLEAR, fill: "FFF6E8", color: "auto" },
      border: { left: { style: BorderStyle.SINGLE, size: 24, color: "FCAE42", space: 8 } },
      spacing: { before: 200, after: 200 },
      children: [T({ text: doc.intro, size: 19 })],
    }),
  ]
  for (const n of doc.nodes) {
    if (n.t === "h2") children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [T(n.text)] }))
    else if (n.t === "h3") children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [T(n.text)] }))
    else if (n.t === "field")
      children.push(new Paragraph({ spacing: { after: 100 }, children: [T({ text: `${n.label} : `, bold: true, color: "6E0B10" }), ...runs(n.text)] }))
    else if (n.t === "p") children.push(new Paragraph({ spacing: { after: 120 }, children: runs(n.text) }))
    else if (n.t === "note") children.push(new Paragraph({ spacing: { after: 120 }, children: [T({ text: `Note : ${n.text}`, italics: true, color: "666666", size: 18 })] }))
    else if (n.t === "quote")
      children.push(
        new Paragraph({
          border: { left: { style: BorderStyle.SINGLE, size: 24, color: "FCAE42", space: 8 } },
          shading: { type: ShadingType.CLEAR, fill: "F3F4F6", color: "auto" },
          spacing: { before: 100 },
          children: runs(`« ${n.text} »`, { italics: true }),
        }),
        new Paragraph({ spacing: { after: 160 }, children: [T({ text: `— ${n.by}`, color: "666666", size: 18 })] }),
      )
    else if (n.t === "ul" || n.t === "ol") n.items.forEach((i) => children.push(new Paragraph({ numbering: { reference: n.t === "ul" ? "bullets" : "numbers", level: 0 }, children: runs(i) })))
    else if (n.t === "table") children.push(docxTable(n.head, n.rows), new Paragraph({ spacing: { after: 120 }, children: [] }))
  }
  return new Document({
    creator: "Oloum Group",
    title: `Oloum Group — ${doc.title}`,
    styles: {
      default: { document: { run: { font: "Arial", size: 21 } } },
      paragraphStyles: [
        { id: "Normal", name: "Normal", run: { font: "Arial", size: 21 }, paragraph: { spacing: { after: 80, line: 276 } } },
        { id: "Title", name: "Title", basedOn: "Normal", next: "Normal", run: { font: "Arial", size: 48, bold: true, color: "1A1A1A" }, paragraph: { spacing: { before: 60, after: 60 }, keepNext: true } },
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: "Arial", size: 28, bold: true, color: RED }, paragraph: { spacing: { before: 360, after: 120 }, keepNext: true, outlineLevel: 0, border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: RED, space: 4 } } } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: "Arial", size: 23, bold: true, color: "6E0B10" }, paragraph: { spacing: { before: 200, after: 80 }, keepNext: true, outlineLevel: 1 } },
      ],
    },
    numbering: {
      config: [
        { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 260 } } } }] },
        { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 300 } } } }] },
      ],
    },
    sections: [
      {
        properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
        headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [T({ text: `Oloum Group — ${doc.title}`, color: "999999", size: 16 })] })] }) },
        footers: {
          default: new Footer({
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [T({ children: ["Page ", PageNumber.CURRENT, " / ", PageNumber.TOTAL_PAGES], color: "999999", size: 16 })] })],
          }),
        },
        children,
      },
    ],
  })
}

/* ─── Run ─────────────────────────────────────────────────────────────────── */

const root = "docs/copie-client"
rmSync(root, { recursive: true, force: true })
for (const dir of ["markdown", "pdf", "docx"]) mkdirSync(join(root, dir), { recursive: true })

const docs = buildDocs()
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true })
const page = await browser.newPage()
for (const doc of docs) {
  writeFileSync(join(root, "markdown", `${doc.file}.md`), toMarkdown(doc))
  writeFileSync(join(root, "docx", `${doc.file}.docx`), await Packer.toBuffer(toDocx(doc)))
  await page.setContent(toHtml(doc), { waitUntil: "load" })
  await page.pdf({
    path: join(root, "pdf", `${doc.file}.pdf`),
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `<div style="width:100%;font:8px Arial;color:#999;padding:0 18mm;text-align:right">Oloum Group — ${esc(doc.title)}</div>`,
    footerTemplate: `<div style="width:100%;font:8px Arial;color:#999;text-align:center">Page <span class="pageNumber"></span> / <span class="totalPages"></span></div>`,
    margin: { top: "18mm", bottom: "16mm", left: "18mm", right: "18mm" },
  })
  console.log(`✓ ${doc.file}`)
}
await browser.close()

writeFileSync(
  join(root, "LISEZ-MOI.md"),
  `# Copie du site Oloum Group — documents à relire\n\nUn document par page du site, en trois formats :\n\n- \`docx/\` — **à envoyer au client** : fichiers Word modifiables\n- \`pdf/\` — version lecture seule, mise en page\n- \`markdown/\` — version texte\n\n${docs.map((x) => `- **${x.file}** — ${x.title} (${x.url})`).join("\n")}\n\nLes chiffres et dates sont surlignés en jaune : ce sont des exemples à confirmer en priorité. Régénérer : \`pnpm client-copy\`.\n`,
)
console.log(`${docs.length} documents → ${root}/{markdown,pdf,docx}`)
