import { TextLink } from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import Photo from "@/components/ui/Photo"
import Rich from "@/components/ui/Rich"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Cta, Tone } from "@/i18n/types"
import { href as h } from "@/lib/routes"
import type { ImageKey } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Split({
  eyebrow,
  title,
  lead,
  text,
  bullets,
  image,
  imageAlt,
  reverse,
  cta,
  tone = "concrete",
  locale,
}: {
  eyebrow?: string
  title: string
  lead?: string
  text: string[]
  bullets?: string[]
  image: ImageKey
  imageAlt: string
  reverse?: boolean
  cta?: Cta
  tone?: Tone
  locale: Locale
}) {
  return (
    <Section tone={tone}>
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className={cn("relative", reverse && "lg:order-2")}>
          <div data-reveal="clip" className="corners relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]" data-cursor="view">
            <Photo image={image} alt={imageAlt} sizes="(min-width: 1024px) 50vw, 100vw" className="size-full" />
          </div>
          <div aria-hidden className="absolute -bottom-6 -left-6 -z-0 hidden h-1/2 w-1/2 bg-red sm:block" style={{ zIndex: -1 }} />
        </div>
        <div className="space-y-7">
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
          {text.map((p, i) => (
            <p key={i} data-reveal className="text-pretty text-muted">
              <Rich text={p} />
            </p>
          ))}
          {bullets && (
            <ul data-reveal="stagger" className="grid gap-px bg-line sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 bg-white p-4 text-[0.92rem] font-medium">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-amber text-red-dark">
                    <Icon name="check" size={13} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <div data-reveal>
              <TextLink href={h(locale, cta.href)}>{cta.label}</TextLink>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
