import type { Metadata } from "next"
import { defaultLocale, locales, ogLocales, type Locale } from "@/i18n/config"
import { localizePath } from "./routes"
import { siteUrl } from "./site"
import { plain } from "./utils"

/** hreflang alternates for a path, including x-default (French). */
export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(locales.map((l) => [l, localizePath(l, path)])),
    "x-default": localizePath(defaultLocale, path),
  }
}

/**
 * Page metadata. The Open Graph / Twitter image comes from the colocated
 * `opengraph-image.tsx` of each page (generated per page and per locale).
 */
export function buildMetadata({ locale, path, title, description, noIndex, absoluteTitle }: { locale: Locale; path: string; title: string; description: string; noIndex?: boolean; absoluteTitle?: boolean }): Metadata {
  const url = localizePath(locale, path)
  const t = plain(title)
  return {
    title: absoluteTitle ? { absolute: t } : t,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: "Oloum Group",
      title: t,
      description,
      url,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: { card: "summary_large_image", title: t, description },
    robots: noIndex ? { index: false, follow: true } : undefined,
  }
}

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`
}
