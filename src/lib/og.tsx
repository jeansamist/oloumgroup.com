import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { hasLocale, type Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import type { EntityKey } from "@/lib/entities"
import { entityStyle } from "@/lib/entities"
import type { PageKey } from "@/lib/routes"
import { brandDomain, type ImageKey } from "@/lib/site"

/**
 * Open Graph images (1200 × 630), generated at build time for every page and
 * locale: night background with blueprint grid, red band, mock logo, page
 * eyebrow, title (highlighted words in amber), entity chip, signature, domain
 * and the page's hero photo on the right.
 */
export const ogSize = { width: 1200, height: 630 }

const fontDir = join(process.cwd(), "src/assets/fonts")
const imgDir = join(process.cwd(), "src/assets/images")
const fontsPromise = Promise.all([
  readFile(join(fontDir, "Archivo-ExtraBold.ttf")),
  readFile(join(fontDir, "PlexSans-Medium.ttf")),
  readFile(join(fontDir, "PlexMono-Medium.ttf")),
])

const kebab = (key: string) => key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)

async function photo(image: ImageKey) {
  const data = await readFile(join(imgDir, `${kebab(image)}.jpg`))
  return `data:image/jpeg;base64,${data.toString("base64")}`
}

/**
 * Words of a title with their highlight flag and whether a space precedes them,
 * so punctuation right after an *emphasis* stays glued ("*besoin*." → "besoin.").
 */
function words(title: string) {
  const out: { w: string; hi: boolean; space: boolean }[] = []
  let pendingSpace = false
  for (const seg of title.split(/(\*[^*]+\*)/g).filter(Boolean)) {
    const hi = seg.startsWith("*")
    for (const tok of (hi ? seg.slice(1, -1) : seg).split(/(\s+)/)) {
      if (!tok) continue
      if (/^\s+$/.test(tok)) {
        pendingSpace = true
        continue
      }
      out.push({ w: tok, hi, space: out.length > 0 && pendingSpace })
      pendingSpace = false
    }
  }
  return out
}

const mark = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 44"><path d="M20 2 38 12 20 22 2 12Z" fill="#fcae42"/><path d="M2 12 20 22v20L2 32Z" fill="#920f15"/><path d="M38 12 20 22v20l18-10Z" fill="#6e0b10"/></svg>',
)}`

type OgInput = { eyebrow: string; title: string; image: ImageKey; entity?: EntityKey; entityName?: string; signature: string; locale: Locale }

export async function renderOg({ eyebrow, title, image, entity, entityName, signature, locale }: OgInput) {
  const [archivo, plexSans, plexMono] = await fontsPromise
  const bg = await photo(image)
  const style = entity ? entityStyle[entity] : null
  const len = title.replace(/\*/g, "").length
  const fontSize = len > 60 ? 54 : len > 40 ? 62 : 72

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#111111", color: "#ffffff", fontFamily: "Plex Sans", position: "relative" }}>
        {/* Photo on the right, fading into the night background */}
        <img src={bg} alt="" width={620} height={630} style={{ position: "absolute", right: 0, top: 0, width: 620, height: 630, objectFit: "cover" }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: 1200, height: 630, display: "flex", backgroundImage: "linear-gradient(90deg, #111111 0%, #111111 48%, rgba(17,17,17,0.82) 64%, rgba(17,17,17,0.2) 100%)" }} />
        {/* Blueprint grid */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1200,
            height: 630,
            display: "flex",
            backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Red band */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 22, display: "flex", background: "#920f15" }} />
        <div style={{ position: "absolute", left: 22, top: 0, bottom: 0, width: 6, display: "flex", background: "#fcae42" }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "58px 64px 52px 88px", width: "100%", position: "relative" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img src={mark} width={50} height={55} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "Archivo", fontSize: 34, letterSpacing: -1.5, lineHeight: 1 }}>OLOUM</span>
              <span style={{ fontFamily: "Plex Mono", fontSize: 13, letterSpacing: 7, color: "#fcae42", marginTop: 4 }}>GROUP</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 700 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 12, height: 12, background: "#fcae42", display: "flex" }} />
              <span style={{ fontFamily: "Plex Mono", fontSize: 20, letterSpacing: 3, color: "#fcae42", textTransform: "uppercase" }}>{eyebrow}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", fontFamily: "Archivo", fontSize, lineHeight: 1.04, letterSpacing: -2.5 }}>
              {words(title).map(({ w, hi }, i, all) => (
                <span key={i} style={{ color: hi ? "#fcae42" : "#ffffff", marginRight: all[i + 1]?.space ? fontSize * 0.24 : 0 }}>
                  {w}
                </span>
              ))}
            </div>
            {style && entityName && (
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: style.dashed ? "transparent" : style.color,
                    border: style.dashed ? "2px dashed #fcae42" : "none",
                    color: style.dashed ? "#fcae42" : style.ink,
                    fontFamily: "Archivo",
                    fontSize: 16,
                  }}
                >
                  {style.initials}
                </div>
                <span style={{ fontSize: 22, color: "rgba(255,255,255,0.85)" }}>{entityName}</span>
              </div>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.18)", paddingTop: 22 }}>
            <span style={{ fontFamily: "Plex Mono", fontSize: 18, letterSpacing: 3, color: "rgba(255,255,255,0.75)" }}>{signature.replace(/ · /g, "  /  ").toUpperCase()}</span>
            <span style={{ fontFamily: "Plex Mono", fontSize: 18, color: "#fcae42" }}>
              {brandDomain}
              {locale === "en" ? "/en" : ""}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Archivo", data: archivo, weight: 800, style: "normal" },
        { name: "Plex Sans", data: plexSans, weight: 500, style: "normal" },
        { name: "Plex Mono", data: plexMono, weight: 500, style: "normal" },
      ],
    },
  )
}

async function resolve(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params
  return hasLocale(locale) ? locale : "fr"
}

/** OG image of a regular page. */
export async function pageOg(params: Promise<{ locale: string }>, key: PageKey) {
  const locale = await resolve(params)
  const d = getDictionary(locale)
  const p = d.pages[key]
  const entity = p.hero.entity && p.hero.entity !== "group" ? p.hero.entity : undefined
  return renderOg({
    locale,
    eyebrow: p.name,
    title: p.hero.title,
    image: p.hero.image,
    entity,
    entityName: entity ? `${d.entities[entity].name} · ${d.entities[entity].role}` : undefined,
    signature: d.meta.signature,
  })
}

/** OG image of the home page. */
export async function homeOg(params: Promise<{ locale: string }>) {
  const locale = await resolve(params)
  const d = getDictionary(locale)
  const hero = d.home.hero
  return renderOg({
    locale,
    eyebrow: hero.eyebrow,
    title: `${hero.titleBefore} *${hero.words.join(", ")}* ${hero.titleAfter}`,
    image: "craneInstallation",
    signature: d.meta.signature,
  })
}

/** OG image of a news article. */
export async function articleOg(params: Promise<{ locale: string; slug: string }>) {
  const { slug } = await params
  const locale = await resolve(params)
  const d = getDictionary(locale)
  const a = d.articles.find((x) => x.slug === slug) ?? d.articles[0]
  return renderOg({
    locale,
    eyebrow: `${d.pages.news.name} · ${a.category}`,
    title: a.title,
    image: a.image,
    entity: a.entity !== "group" ? a.entity : undefined,
    entityName: a.entity !== "group" ? d.entities[a.entity].name : undefined,
    signature: d.meta.signature,
  })
}
