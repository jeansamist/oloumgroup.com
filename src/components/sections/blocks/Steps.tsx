import { TextLink } from "@/components/ui/Button"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Cta, Tone } from "@/i18n/types"
import { href as h } from "@/lib/routes"

/** Process: sticky heading on the left, stacked sticky cards on the right. */
export default function Steps({ eyebrow, title, lead, steps, cta, tone = "concrete", locale }: { eyebrow?: string; title: string; lead?: string; steps: { title: string; text: string }[]; cta?: Cta; tone?: Tone; locale: Locale }) {
  return (
    <Section tone={tone}>
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8 lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
          {cta && (
            <div data-reveal>
              <TextLink href={h(locale, cta.href)}>{cta.label}</TextLink>
            </div>
          )}
        </div>
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={step.title} className="sticky border border-line bg-white p-7 text-ink shadow-[0_-12px_40px_-25px_rgba(0,0,0,0.3)] sm:p-9" style={{ top: `${110 + i * 20}px` }}>
              <div className="flex items-start gap-6">
                <span className="flex size-12 shrink-0 items-center justify-center bg-red font-display text-xl font-extrabold text-amber">{String(i + 1).padStart(2, "0")}</span>
                <div className="space-y-2">
                  <h3 className="text-h3">{step.title}</h3>
                  <p className="text-pretty text-muted">{step.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
