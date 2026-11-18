import type { Metadata } from "next"
import Button from "@/components/ui/Button"
import Rich from "@/components/ui/Rich"
import { Container } from "@/components/ui/Section"
import type { LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { href as h, routes } from "@/lib/routes"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return { title: getDictionary(locale).notFound.metaTitle, robots: { index: false, follow: true } }
}

/** Localized 404 (unknown paths are rewritten here by the proxy with a 404 status). */
export default async function NotFoundPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const t = getDictionary(locale).notFound
  return (
    <section className="on-dark grain blueprint-dark relative flex min-h-svh items-center overflow-hidden bg-night pt-32 pb-20 text-white">
      <svg aria-hidden viewBox="0 0 40 44" className="absolute -right-20 bottom-0 w-[38rem] max-w-[80vw] opacity-15">
        <path d="M20 2 38 12 20 22 2 12Z" fill="none" stroke="#fcae42" strokeWidth=".3" strokeDasharray="1 1" />
        <path d="M2 12 20 22v20L2 32Z" fill="#920f15" />
        <path d="M38 12 20 22v20l18-10Z" fill="#6e0b10" />
      </svg>
      <Container className="relative space-y-8">
        <p data-reveal className="eyebrow">
          {t.eyebrow}
        </p>
        <p aria-hidden className="font-display text-[clamp(7rem,25vw,18rem)] leading-[0.8] font-extrabold tracking-[-0.07em] text-amber">404</p>
        <h1 data-split className="max-w-3xl text-h1">
          <Rich text={t.title} />
        </h1>
        <p data-reveal className="max-w-xl text-lead text-white/75">
          {t.text}
        </p>
        <div data-reveal className="flex flex-wrap gap-3">
          <Button href={h(locale, "/")} magnetic>
            {t.home}
          </Button>
          <Button href={h(locale, routes.contact)} variant="light">
            {t.contact}
          </Button>
        </div>
      </Container>
    </section>
  )
}
