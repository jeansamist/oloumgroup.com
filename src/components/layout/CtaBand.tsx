import Button from "@/components/ui/Button"
import Rich from "@/components/ui/Rich"
import { Container, Eyebrow } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { href as h } from "@/lib/routes"

/** Final call to action before the footer. */
export default function CtaBand({ locale, t }: { locale: Locale; t: Dictionary["cta"] }) {
  return (
    <section className="on-dark grain blueprint-dark relative overflow-hidden bg-red py-20 text-white sm:py-28">
      <div aria-hidden className="absolute -top-24 -right-24 size-96 rotate-45 border border-white/10" />
      <div aria-hidden className="absolute -right-10 -bottom-32 size-72 rotate-45 border border-amber/30" />
      <Container className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div className="space-y-6">
          <div data-reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </div>
          <h2 data-split className="text-h1 text-balance">
            <Rich text={t.title} />
          </h2>
          <p data-reveal className="max-w-xl text-lead text-white/80">
            {t.text}
          </p>
        </div>
        <div data-reveal className="flex flex-wrap gap-3 lg:justify-end">
          <Button href={h(locale, t.primary.href)} size="lg" magnetic>
            {t.primary.label}
          </Button>
          <Button href={t.secondary.href} variant="light" size="lg" icon="whatsapp">
            {t.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}
