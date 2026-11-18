import Link from "next/link"
import Icon from "@/components/ui/Icon"
import Photo from "@/components/ui/Photo"
import Rich from "@/components/ui/Rich"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import TiltCard from "@/components/ui/TiltCard"
import type { Locale } from "@/i18n/config"
import type { Card, Tone } from "@/i18n/types"
import { href as h } from "@/lib/routes"
import { cn } from "@/lib/utils"

export default function Cards({
  eyebrow,
  title,
  lead,
  items,
  columns = 3,
  numbered = true,
  tone = "default",
  locale,
}: {
  eyebrow?: string
  title: string
  lead?: string
  items: Card[]
  columns?: 2 | 3 | 4
  numbered?: boolean
  tone?: Tone
  locale: Locale
}) {
  const dark = tone === "ink" || tone === "red"
  return (
    <Section tone={tone}>
      <Container className="space-y-14">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <ul
          data-reveal="stagger"
          className={cn("grid gap-4", columns === 2 && "md:grid-cols-2", columns === 3 && "sm:grid-cols-2 lg:grid-cols-3", columns === 4 && "sm:grid-cols-2 lg:grid-cols-4")}
        >
          {items.map((item, i) => {
            const body = (
              <>
                {item.image && (
                  <div className="relative -mx-7 -mt-7 mb-2 aspect-[16/10] sm:-mx-8 sm:-mt-8">
                    <Photo image={item.image} alt="" sizes="(min-width: 1024px) 33vw, 100vw" className="size-full" imgClassName="group-hover:scale-105" />
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  {item.icon && (
                    <span className="flex size-12 items-center justify-center bg-concrete text-red transition-colors duration-500 group-hover:bg-red group-hover:text-amber">
                      <Icon name={item.icon} size={22} />
                    </span>
                  )}
                  {numbered && <span className="font-mono text-xs font-semibold text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>}
                </div>
                {item.tag && <span className="self-start bg-amber px-2.5 py-1 font-mono text-[0.62rem] font-semibold tracking-[0.12em] text-red-dark uppercase">{item.tag}</span>}
                <h3 className="text-h3 text-balance">
                  <Rich text={item.title} mark={false} />
                </h3>
                <p className="text-pretty text-muted">
                  <Rich text={item.text} />
                </p>
                {item.meta && <p className="mt-auto border-t border-line pt-4 font-mono text-[0.7rem] tracking-[0.08em] text-red uppercase">{item.meta}</p>}
                {item.href && (
                  <span className="mt-auto flex items-center gap-2 pt-2 text-sm font-semibold text-red">
                    <span className="link-draw">{item.title}</span>
                    <Icon name="arrow" size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                )}
              </>
            )
            return (
              <TiltCard key={item.title} as="li" className={cn("flex flex-col gap-4 p-7 sm:p-8", dark && "border-white/10 bg-white text-ink")}>
                {item.href ? (
                  <Link href={h(locale, item.href)} className="flex h-full flex-col gap-4 after:absolute after:inset-0" data-cursor="link">
                    {body}
                  </Link>
                ) : (
                  body
                )}
              </TiltCard>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
