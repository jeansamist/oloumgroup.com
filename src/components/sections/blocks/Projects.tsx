"use client"

import { useMemo, useRef, useState } from "react"
import { TextLink } from "@/components/ui/Button"
import { EntityMark } from "@/components/ui/Logo"
import Photo from "@/components/ui/Photo"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { gsap, prefersReducedMotion } from "@/lib/motion"
import { href as h } from "@/lib/routes"
import { cn } from "@/lib/utils"

/** Project grid with animated category filters (full list) or a preview (limit). */
export default function Projects({ dict, locale, limit, filters }: { dict: Dictionary; locale: Locale; limit?: number; filters?: boolean }) {
  const t = dict.projects
  const [cat, setCat] = useState("all")
  const grid = useRef<HTMLUListElement>(null)
  const items = useMemo(() => {
    const list = cat === "all" ? dict.projectItems : dict.projectItems.filter((p) => p.category === cat)
    return limit ? list.slice(0, limit) : list
  }, [cat, dict.projectItems, limit])
  const cats = Object.keys(dict.projectCategories).filter((c) => dict.projectItems.some((p) => p.category === c))

  const choose = (c: string) => {
    if (c === cat) return
    if (prefersReducedMotion() || !grid.current) return setCat(c)
    gsap.to(grid.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.25,
      stagger: 0.02,
      onComplete: () => {
        setCat(c)
        requestAnimationFrame(() => grid.current && gsap.fromTo(grid.current.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.05, ease: "expo.out" }))
      },
    })
  }

  return (
    <Section>
      <Container className="space-y-12">
        {!filters && (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
            <div data-reveal>
              <TextLink href={h(locale, t.seeAll.href)}>{t.seeAll.label}</TextLink>
            </div>
          </div>
        )}
        {filters && (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div role="group" aria-label={t.filtersLabel} className="flex flex-wrap gap-2">
              {["all", ...cats].map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={cat === c}
                  onClick={() => choose(c)}
                  className={cn("border px-4 py-2 text-sm font-semibold transition-colors duration-300", cat === c ? "border-red bg-red text-white" : "border-line hover:border-ink")}
                >
                  {c === "all" ? t.all : dict.projectCategories[c]}
                </button>
              ))}
            </div>
            <p className="font-mono text-xs tracking-[0.1em] text-muted uppercase" aria-live="polite">
              {String(items.length).padStart(2, "0")} {t.count}
            </p>
          </div>
        )}
        <ul ref={grid} data-reveal={filters ? undefined : "stagger"} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <li key={p.title} className={cn("group relative", !filters && i === 0 && "lg:col-span-2 lg:row-span-2")}>
              <article className="relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden bg-night text-white" data-cursor="view">
                <Photo image={p.image} alt={p.title} sizes="(min-width: 1024px) 33vw, 100vw" className="absolute inset-0" imgClassName="group-hover:scale-105" />
                <div aria-hidden className="absolute inset-0 bg-linear-to-t from-night via-night/40 to-transparent" />
                <div className="relative space-y-2 p-6">
                  <div className="flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.1em] uppercase">
                    <EntityMark entity={p.entity} size={24} className="text-white" />
                    <span className="text-amber">{dict.projectCategories[p.category]}</span>
                    <span className="text-white/60">· {p.year}</span>
                  </div>
                  <h3 className="font-display text-xl leading-tight font-extrabold tracking-[-0.02em]">{p.title}</h3>
                  <p className="text-sm text-white/60">{p.city}</p>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out-expo group-hover:grid-rows-[1fr]">
                    <p className="overflow-hidden text-sm text-white/80">{p.text}</p>
                  </div>
                </div>
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </li>
          ))}
        </ul>
        <p className="font-mono text-[0.65rem] tracking-[0.1em] text-muted uppercase">{dict.common.mockNote}</p>
      </Container>
    </Section>
  )
}
