import type { MetadataRoute } from "next"
import { locales } from "@/i18n/config"
import { allPaths, localizePath, routes } from "@/lib/routes"
import { absoluteUrl, languageAlternates } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const low = new Set<string>([routes.legal, routes.privacy])
  return allPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizePath(locale, path)),
      lastModified,
      changeFrequency: path === routes.home || path === routes.news ? "weekly" : "monthly",
      priority: path === routes.home ? 1 : low.has(path) ? 0.3 : path.split("/").length > 2 ? 0.7 : 0.8,
      alternates: {
        languages: Object.fromEntries(Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, absoluteUrl(href)])),
      },
    })),
  )
}
