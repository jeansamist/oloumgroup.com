import type { Metadata } from "next"
import CtaBand from "@/components/layout/CtaBand"
import Blocks from "@/components/sections/Blocks"
import HomeHero from "@/components/sections/home/HomeHero"
import JsonLd from "@/components/ui/JsonLd"
import type { LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { buildMetadata } from "@/lib/seo"
import { faqSchema } from "@/lib/structured-data"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const h = getDictionary(locale).home
  return buildMetadata({ locale, path: "/", title: h.metaTitle, description: h.metaDescription, absoluteTitle: true })
}

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const faqs = dict.home.blocks.flatMap((b) => (b.type === "faq" ? b.items : []))
  return (
    <>
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
      <HomeHero t={dict.home.hero} locale={locale} entities={dict.entities} />
      <Blocks blocks={dict.home.blocks} locale={locale} dict={dict} />
      <CtaBand locale={locale} t={dict.cta} />
    </>
  )
}
