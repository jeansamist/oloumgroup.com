import type { Locale } from "@/i18n/config"
import { getDictionary, type Dictionary } from "@/i18n/get-dictionary"
import type { Block, PageData } from "@/i18n/types"
import { articlePath, localizePath, routes, type PageKey } from "./routes"
import { companies, group, siteUrl } from "./site"
import { plain } from "./utils"

/**
 * llms.txt (https://llmstxt.org) and llms-full.txt, generated from the
 * dictionaries so AI agents always read the same content as the site.
 */

const url = (locale: Locale, path: string) => `${siteUrl}${localizePath(locale, path)}`
const line = (s: string) => plain(s).replace(/\s+/g, " ").trim()

function blockMd(b: Block, d: Dictionary): string[] {
  const out: string[] = []
  const head = (x: { title?: string; lead?: string }) => {
    if (x.title) out.push(`### ${line(x.title)}`)
    if (x.lead) out.push(line(x.lead))
  }
  switch (b.type) {
    case "intro":
      head(b)
      out.push(line(b.text))
      if (b.sub) out.push(line(b.sub))
      break
    case "cards":
      head(b)
      b.items.forEach((c) => out.push(`- **${line(c.title)}**: ${line(c.text)}${c.meta ? ` (${c.meta})` : ""}`))
      break
    case "split":
      head(b)
      b.text.forEach((t) => out.push(line(t)))
      b.bullets?.forEach((x) => out.push(`- ${x}`))
      break
    case "steps":
      head(b)
      b.steps.forEach((s, i) => out.push(`${i + 1}. **${s.title}**: ${s.text}`))
      break
    case "buyOrRent":
      return blockMd({ type: "toggle", ...d.buyOrRent }, d)
    case "toggle":
      head(b)
      b.options.forEach((o) => out.push(`- **${o.label}**${o.entity ? ` (${d.entities[o.entity].name})` : ""}: ${o.title}. ${o.text} ${o.points.join("; ")}.`))
      break
    case "index":
      head(b)
      b.items.forEach((x, i) => out.push(`${i + 1}. **${x.title}**: ${x.text}`))
      break
    case "stats":
      b.items.forEach((s) => out.push(`- ${s.value}: ${s.label}`))
      break
    case "faq":
      head(b)
      b.items.forEach(([q, a]) => out.push(`- **${q}** ${a}`))
      break
    case "quotes":
      head(b)
      b.items.forEach((q) => out.push(`> ${q.quote} (${q.author}, ${q.role})`))
      break
    case "timeline":
      head(b)
      b.items.forEach((t) => out.push(`- ${t.year}: **${t.title}**. ${t.text}`))
      break
    case "table":
      head(b)
      out.push(`| ${b.head.join(" | ")} |`, `|${b.head.map(() => " --- ").join("|")}|`, ...b.rows.map((r) => `| ${r.join(" | ")} |`))
      if (b.note) out.push(line(b.note))
      break
    case "sister":
      out.push(`${line(b.title)}: ${b.text}`)
      break
    case "people":
      head(b)
      b.items.forEach((p) => out.push(`- **${p.name}**, ${p.role} (${d.entities[p.entity].name}): ${p.bio}`))
      break
    case "jobs":
      head(b)
      b.items.forEach((j) => out.push(`- **${j.title}** (${d.entities[j.entity].name}, ${j.place}, ${j.contract}): ${j.text}`))
      break
    case "chips":
      head(b)
      b.items.forEach((c) => out.push(`- **${c.title}**: ${c.text}`))
      break
    case "specs":
      head(b)
      b.items.forEach(([k, v]) => out.push(`- ${k}: ${v}`))
      break
    case "tree":
      head(d.tree)
      out.push(`- **${d.tree.root.name}**: ${d.tree.root.text}`)
      d.tree.nodes.forEach((n) => {
        out.push(`  - **${d.entities[n.entity].name}** (${d.entities[n.entity].role}): ${n.model}`)
        n.children.forEach((c) => out.push(`    - **${d.entities[c.entity].name}**: ${c.text}`))
      })
      break
    case "entities":
      head(d.entityCards)
      d.entityCards.items.forEach((e) => out.push(`- **${e.title}**: ${e.text}`))
      break
    case "pillars":
      head(d.pillars)
      d.pillars.items.forEach((p) => out.push(`- **${p.title}** (${d.entities[p.entity].name}): ${p.text}`))
      break
    case "projects":
      if (!b.filters) break
      d.projectItems.forEach((p) => out.push(`- **${p.title}** (${d.entities[p.entity].name}, ${p.city}, ${p.year}): ${p.text}`))
      break
    case "teaser":
      out.push(`### ${line(b.title)}`, b.text, ...b.facts.map(([k, v]) => `- ${k}: ${v}`))
      break
    case "legal":
      b.sections.forEach((s) => out.push(`### ${s.title}`, ...s.text))
      break
    case "contact":
      d.forms.contactCards.forEach((c) => out.push(`- **${c.title}**: ${c.lines.join(", ")}`))
      d.forms.directory.items.forEach((x) => out.push(`- **${d.entities[x.entity as keyof typeof d.entities].name}**: ${x.phone}, ${x.email}`))
      break
    case "quote":
      out.push(`${d.forms.quote.steps.join(" → ")}. ${d.forms.quote.type}: ${d.forms.quote.types.join(", ")}.`)
      break
    // Visual-only blocks (marquee, gallery, news list) carry no extra facts.
  }
  return out
}

function pageMd(locale: Locale, path: string, p: PageData | Dictionary["home"], d: Dictionary) {
  const hero = "words" in p.hero ? `${p.hero.titleBefore} ${p.hero.words.join(" / ")} ${p.hero.titleAfter}` : p.hero.title
  return [`## ${p.name}`, `URL: ${url(locale, path)}`, "", `> ${p.metaDescription}`, "", `**${line(hero)}** ${p.hero.text}`, "", ...p.blocks.flatMap((b) => [...blockMd(b, d), ""])].join("\n")
}

function intro(d: Dictionary, locale: Locale) {
  const fr = locale === "fr"
  return [
    `# Oloum Group`,
    "",
    `> ${d.meta.description}`,
    "",
    fr
      ? `Oloum Group est un groupe camerounais basé à Douala (${group.street}, ${group.district}). Signature : « ${d.meta.signature} ». Entités : ${companies.yo.name} (construit et vend : bâtiments préfabriqués, construction BTP, rénovation, 15 solutions de rayonnage, cerclage, conteneurs aménagés ; créée en ${companies.yo.foundingYear}), ${companies.bella.name} (location de bâtiments préfabriqués) et l'Usine (projet futur de production). Contact : ${group.phoneDisplay}, ${group.email}, WhatsApp ${group.whatsapp}. Langues du site : français (/fr, par défaut) et anglais (/en).`
      : `Oloum Group is a Cameroonian group based in Douala (${group.street}, ${group.district}). Tagline: "${d.meta.signature}". Entities: ${companies.yo.name} (builds and sells: prefabricated buildings, construction works, renovation, 15 shelving and racking solutions, strapping, converted containers; founded ${companies.yo.foundingYear}), ${companies.bella.name} (prefabricated building rental) and The Factory (future production project). Contact: ${group.phoneDisplay}, ${group.email}, WhatsApp ${group.whatsapp}. Site languages: French (/fr, default) and English (/en).`,
  ]
}

const pageKeys = (d: Dictionary) => Object.keys(d.pages) as PageKey[]
const optional = new Set<PageKey>(["legal", "privacy", "faq", "careers", "news"])

/** /llms.txt — summary + link index (French first, English mirror). */
export function llmsTxt() {
  const fr = getDictionary("fr")
  const en = getDictionary("en")
  const links = (locale: Locale, d: Dictionary, keys: PageKey[]) => keys.map((k) => `- [${d.pages[k].name}](${url(locale, routes[k])}): ${d.pages[k].metaDescription}`)
  const main = pageKeys(fr).filter((k) => !optional.has(k))
  const extra = pageKeys(fr).filter((k) => optional.has(k))
  return [
    ...intro(fr, "fr"),
    "",
    "Le contenu complet de toutes les pages est disponible en un seul fichier : " + `${siteUrl}/llms-full.txt`,
    "",
    "## Pages (français)",
    `- [${fr.home.name}](${url("fr", "/")}): ${fr.home.metaDescription}`,
    ...links("fr", fr, main),
    "",
    "## Articles",
    ...fr.articles.map((a) => `- [${a.title}](${url("fr", articlePath(a.slug))}): ${a.excerpt}`),
    "",
    "## Pages (English)",
    `- [${en.home.name}](${url("en", "/")}): ${en.home.metaDescription}`,
    ...links("en", en, main),
    "",
    "## Optional",
    ...links("fr", fr, extra),
    `- [Sitemap](${siteUrl}/sitemap.xml): toutes les URL du site, FR et EN`,
    "",
  ].join("\n")
}

/** /llms-full.txt — every page and article as Markdown (French, then English). */
export function llmsFullTxt() {
  const parts: string[] = []
  for (const locale of ["fr", "en"] as const) {
    const d = getDictionary(locale)
    parts.push(...intro(d, locale), "")
    parts.push(pageMd(locale, "/", d.home, d))
    for (const k of pageKeys(d)) parts.push(pageMd(locale, routes[k], d.pages[k], d))
    for (const a of d.articles) {
      parts.push(`## ${a.title}`, `URL: ${url(locale, articlePath(a.slug))}`, `${a.date} · ${a.category}`, "", a.excerpt, "", ...a.body.flatMap((b) => [b.heading ? `### ${b.heading}` : "", b.text, ""]).filter((x, i, arr) => x || arr[i - 1]))
    }
    parts.push("\n---\n")
  }
  return parts.join("\n")
}
