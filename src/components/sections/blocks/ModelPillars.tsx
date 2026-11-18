"use client"

import Link from "next/link"
import { useRef } from "react"
import { EntityMark } from "@/components/ui/Logo"
import Rich from "@/components/ui/Rich"
import { Eyebrow } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/motion"
import { href as h } from "@/lib/routes"

/**
 * Construire · Louer · Produire. Desktop: the section pins, an amber line draws
 * across the three pillars and each lights up and reveals its links in turn.
 */
export default function ModelPillars({ t, entities, locale, includes }: { t: Dictionary["pillars"]; entities: Dictionary["entities"]; locale: Locale; includes: string }) {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const mm = gsap.matchMedia()
      mm.add("(min-width: 1024px)", () => {
        const cols = gsap.utils.toArray<HTMLElement>("[data-pillar]")
        gsap.set(cols, { opacity: 0.2 })
        gsap.set("[data-pillar-list]", { opacity: 0, y: 24 })
        const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top top", end: "+=170%", pin: true, scrub: 0.6 } })
        cols.forEach((col, i) => {
          tl.to("[data-line]", { scaleX: (i + 1) / cols.length, duration: 1, ease: "none" }, i)
            .to(col, { opacity: 1, duration: 0.4 }, i)
            .to(col.querySelector("[data-node]"), { scale: 1, backgroundColor: "#fcae42", color: "#6e0b10", duration: 0.3 }, i)
            .to(col.querySelectorAll("[data-pillar-list]"), { opacity: 1, y: 0, duration: 0.6 }, i + 0.2)
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section ref={root} className="on-dark grain blueprint-dark relative bg-night py-20 text-white sm:py-28 lg:flex lg:min-h-svh lg:flex-col lg:justify-center">
      <div className="mx-auto w-full max-w-[1280px] space-y-16 px-5 sm:px-8">
        <div className="max-w-3xl space-y-5">
          <div data-reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </div>
          <h2 data-split className="text-h2">
            <Rich text={t.title} />
          </h2>
          <p data-reveal className="text-lead text-white/70">
            {t.lead}
          </p>
        </div>
        <div className="relative">
          <div aria-hidden className="absolute top-[26px] right-[16%] left-[16%] hidden h-0.5 bg-white/10 lg:block">
            <div data-line className="h-full origin-left scale-x-0 bg-amber" />
          </div>
          <ol className="grid gap-4 lg:grid-cols-3 lg:gap-10">
            {t.items.map((p, i) => (
              <li key={p.title} data-pillar className="relative space-y-6 border border-white/10 p-7 sm:p-9 lg:border-0 lg:p-0 lg:text-center">
                <span data-node className="relative z-10 flex size-13 items-center justify-center bg-amber font-mono font-semibold text-red-dark lg:mx-auto lg:scale-75 lg:bg-white/15 lg:text-white">
                  0{i + 1}
                </span>
                <h3 className="font-display text-[clamp(2.6rem,2rem+2.4vw,4.6rem)] leading-none font-extrabold tracking-[-0.05em]">{p.title}</h3>
                <p className="flex items-center gap-3 lg:justify-center">
                  <EntityMark entity={p.entity} size={28} className="text-white" />
                  <span className="font-mono text-[0.68rem] tracking-[0.12em] text-amber uppercase">{entities[p.entity].name}</span>
                </p>
                <p className="text-pretty text-white/70 lg:mx-auto lg:max-w-sm">{p.text}</p>
                <div data-pillar-list className="space-y-3">
                  <p className="font-mono text-[0.62rem] tracking-[0.14em] text-white/50 uppercase">{includes}</p>
                  <ul className="flex flex-wrap gap-2 lg:justify-center">
                    {p.links.map((l) => (
                      <li key={l.label}>
                        <Link href={h(locale, l.href)} className="inline-block border border-white/20 px-3 py-1.5 text-sm transition-colors hover:border-amber hover:bg-amber hover:text-red-dark">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
