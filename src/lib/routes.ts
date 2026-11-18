import type { Locale } from "@/i18n/config"

/** Every page of the site (paths are the same in French and English). */
export const routes = {
  home: "/",
  group: "/le-groupe",
  history: "/le-groupe/histoire",
  leadership: "/le-groupe/direction",
  commitments: "/engagements",
  yo: "/yves-oloume-sarl",
  prefab: "/yves-oloume-sarl/batiments-prefabriques",
  logistics: "/yves-oloume-sarl/construction-logistique",
  btp: "/yves-oloume-sarl/construction-renovation",
  shelving: "/yves-oloume-sarl/rayonnages",
  containers: "/yves-oloume-sarl/conteneurs-amenages",
  bella: "/bella-location",
  catalogue: "/bella-location/catalogue",
  plans: "/bella-location/formules",
  usine: "/usine",
  sectors: "/secteurs",
  projects: "/realisations",
  news: "/actualites",
  careers: "/carrieres",
  faq: "/faq",
  contact: "/contact",
  quote: "/devis",
  legal: "/mentions-legales",
  privacy: "/confidentialite",
} as const

export type RouteKey = keyof typeof routes
/** Pages built from the generic page template (everything but home). */
export type PageKey = Exclude<RouteKey, "home">

/** Article slugs of the news section (content in the dictionaries). */
export const articleSlugs = [
  "lancement-oloum-group",
  "choisir-achat-ou-location",
  "bien-choisir-son-rayonnage",
  "base-vie-chantier-checklist",
] as const
export type ArticleSlug = (typeof articleSlugs)[number]

export const articlePath = (slug: string) => `${routes.news}/${slug}`

/** Every indexable path (without locale prefix), used by the proxy and the sitemap. */
export const allPaths: string[] = [...Object.values(routes), ...articleSlugs.map(articlePath)]

/** Prefix an internal path with the locale: ("en", "/contact") -> "/en/contact". */
export function localizePath(locale: Locale, path: string) {
  return path === "/" ? `/${locale}` : `/${locale}${path}`
}

/** Localizes internal hrefs ("/usine"), leaves external ones (https:, mailto:, tel:) untouched. */
export function href(locale: Locale, value: string) {
  return value.startsWith("/") ? localizePath(locale, value) : value
}

/** Route key for a path without locale ("/usine" -> "usine"). */
export function routeKeyForPath(path: string): RouteKey | undefined {
  return (Object.keys(routes) as RouteKey[]).find((k) => routes[k] === path)
}

/** Internal route rendered (via a proxy rewrite) for unknown URLs. Never linked or indexed. */
export const notFoundPath = "/page-introuvable"
