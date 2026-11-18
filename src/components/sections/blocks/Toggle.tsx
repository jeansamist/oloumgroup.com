"use client"

import { useRef, useState } from "react"
import Button from "@/components/ui/Button"
import EntityBadge from "@/components/ui/EntityBadge"
import Icon from "@/components/ui/Icon"
import Photo from "@/components/ui/Photo"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { ToggleOption } from "@/i18n/types"
import { gsap, prefersReducedMotion } from "@/lib/motion"
import { href as h } from "@/lib/routes"
import { cn } from "@/lib/utils"

/** Two-way switch (Acheter / Louer, Vide / Équipé) with a sliding pill and animated content swap. */
export default function Toggle({ eyebrow, title, lead, options, locale, entities }: { eyebrow?: string; title: string; lead?: string; options: ToggleOption[]; locale: Locale; entities: Dictionary["entities"] }) {
  const [active, setActive] = useState(0)
  const panel = useRef<HTMLDivElement>(null)
  const opt = options[active]

  const pick = (i: number) => {
    if (i === active) return
    if (prefersReducedMotion() || !panel.current) return setActive(i)
    gsap.to(panel.current, {
      opacity: 0,
      y: 16,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setActive(i)
        requestAnimationFrame(() => {
          gsap.fromTo(panel.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" })
          gsap.fromTo(panel.current!.querySelectorAll("[data-t]"), { opacity: 0, x: -12 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.05, ease: "expo.out" })
        })
      },
    })
  }

  return (
    <Section className="blueprint">
      <Container className="space-y-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
          <div data-reveal role="tablist" aria-label={title.replace(/\*/g, "")} className="relative inline-grid shrink-0 grid-flow-col self-start border border-ink/15 bg-white p-1.5 lg:self-end" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
            <span aria-hidden className="absolute inset-y-1.5 left-1.5 bg-red transition-transform duration-500 ease-out-expo" style={{ width: `calc((100% - 0.75rem) / ${options.length})`, transform: `translateX(${active * 100}%)` }} />
            {options.map((o, i) => (
              <button
                key={o.key}
                role="tab"
                type="button"
                aria-selected={i === active}
                onClick={() => pick(i)}
                className={cn("relative z-10 px-6 py-3 font-display text-lg font-extrabold tracking-[-0.02em] transition-colors duration-300 sm:px-10", i === active ? "text-white" : "text-ink/60 hover:text-ink")}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <div ref={panel} role="tabpanel" className="grid overflow-hidden border border-line bg-white lg:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-72 lg:min-h-[30rem]" data-cursor="view">
            <Photo image={opt.image} alt="" sizes="(min-width: 1024px) 50vw, 100vw" className="absolute inset-0" />
            <span className="absolute top-5 left-5 bg-amber px-3 py-1.5 font-display text-sm font-extrabold text-red-dark">{opt.label}</span>
          </div>
          <div className="flex flex-col gap-6 p-8 sm:p-12">
            {opt.entity && (
              <div data-t>
                <EntityBadge entity={opt.entity} name={entities[opt.entity].name} role={entities[opt.entity].role} />
              </div>
            )}
            <h3 data-t className="text-h2">
              {opt.title}
            </h3>
            <p data-t className="text-pretty text-muted">
              {opt.text}
            </p>
            <ul className="space-y-3">
              {opt.points.map((p) => (
                <li data-t key={p} className="flex items-start gap-3 border-b border-line pb-3 last:border-0">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-amber text-red-dark">
                    <Icon name="check" size={13} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            {opt.cta && (
              <div data-t className="mt-auto pt-2">
                <Button href={h(locale, opt.cta.href)} variant="red">
                  {opt.cta.label}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
