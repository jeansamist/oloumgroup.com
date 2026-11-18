import type { Metadata } from "next"
import CtaBand from "@/components/layout/CtaBand"
import JsonLd from "@/components/ui/JsonLd"
import type { LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { localizePath, routeKeyForPath, routes, type PageKey } from "@/lib/routes"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data"
import Blocks from "./Blocks"
import PageHero from "./PageHero"

/** Breadcrumb trail of a page (home → parents → page). */
export function crumbsFor(key: PageKey, dict: ReturnType<typeof getDictionary>) {
  const trail: { name: string; path: string }[] = []
  let current: PageKey | undefined = key
  while (current) {
    const page: (typeof dict.pages)[PageKey] = dict.pages[current]
    trail.unshift({ name: page.name, path: routes[current] })
    const parent: string | undefined = page.parent
    current = parent ? (routeKeyForPath(parent) as PageKey | undefined) : undefined
  }
  return [{ name: dict.common.home, path: "/" }, ...trail]
}

/** `generateMetadata` for a dictionary-driven page. */
export function pageMetadata(key: PageKey) {
  return async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
    const locale = await resolveLocale(params)
    const p = getDictionary(locale).pages[key]
    return buildMetadata({ locale, path: routes[key], title: p.metaTitle, description: p.metaDescription })
  }
}

/** Page component for a dictionary-driven page: hero, blocks, CTA band, JSON-LD. */
export function pageView(key: PageKey) {
  return async function Page({ params }: LocaleParams) {
    const locale = await resolveLocale(params)
    const dict = getDictionary(locale)
    const p = dict.pages[key]
    const crumbs = crumbsFor(key, dict)
    const faqs = p.blocks.flatMap((b) => (b.type === "faq" ? b.items : []))
    return (
      <>
        <JsonLd data={[breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: localizePath(locale, c.path) }))), ...(faqs.length ? [faqSchema(faqs)] : [])]} />
        <PageHero hero={p.hero} crumbs={crumbs} locale={locale} dict={dict} />
        <Blocks blocks={p.blocks} locale={locale} dict={dict} />
        {!p.noCta && <CtaBand locale={locale} t={dict.cta} />}
      </>
    )
  }
}
