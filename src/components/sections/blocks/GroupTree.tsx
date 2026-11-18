"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import Icon from "@/components/ui/Icon"
import { EntityMark, ModuleMark } from "@/components/ui/Logo"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { EntityKey } from "@/lib/entities"
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/motion"
import { href as h } from "@/lib/routes"
import { cn } from "@/lib/utils"

/**
 * Interactive organisation chart. Connectors draw in on scroll, nodes cascade in.
 * Hovering (or focusing) an entity lights its branch and dims the others.
 */
export default function GroupTree({ t, entities, locale, soon }: { t: Dictionary["tree"]; entities: Dictionary["entities"]; locale: Locale; soon: string }) {
  const root = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<EntityKey | null>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      // fromTo with explicit end values: never read the "current" state, which
      // the hover transitions (and React's dev double-mount) can leave mid-way.
      const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 70%", once: true } })
      const rise = (y: number) => ({ from: { y, opacity: 0 }, to: { y: 0, opacity: 1, ease: "expo.out", clearProps: "transform,opacity" } })
      const node = rise(30)
      const leaf = rise(20)
      tl.fromTo("[data-node='root']", node.from, { ...node.to, duration: 0.7 })
        .fromTo("[data-v='root']", { scaleY: 0 }, { scaleY: 1, duration: 0.4, ease: "power2.out" }, "-=0.2")
        .fromTo("[data-h]", { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power2.inOut" })
        .fromTo("[data-v='branch']", { scaleY: 0 }, { scaleY: 1, duration: 0.3, stagger: 0.08 }, "-=0.1")
        .fromTo("[data-node='branch']", node.from, { ...node.to, duration: 0.7, stagger: 0.12 }, "-=0.1")
        .fromTo("[data-v='leaf']", { scaleY: 0 }, { scaleY: 1, duration: 0.3 }, "-=0.3")
        .fromTo("[data-node='leaf']", leaf.from, { ...leaf.to, duration: 0.6, stagger: 0.1 }, "-=0.1")
    },
    { scope: root },
  )

  const dim = (e: EntityKey, children: EntityKey[] = []) => active !== null && active !== e && !children.includes(active)
  const lit = (e: EntityKey, children: EntityKey[] = []) => active === e || children.includes(active as EntityKey)

  return (
    <Section tone="concrete" className="blueprint overflow-hidden">
      <Container className="space-y-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
          <p data-reveal className="hidden font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase lg:block">
            ↳ {t.hint}
          </p>
        </div>

        <div ref={root} className="relative" onMouseLeave={() => setActive(null)}>
          {/* Root */}
          <div className="flex flex-col items-center">
            <div data-node="root" className="on-dark relative flex w-full max-w-md items-center gap-5 bg-red p-6 text-white shadow-[0_20px_50px_-20px_rgba(146,15,21,.6)]">
              <ModuleMark className="h-14 w-12" />
              <div>
                <p className="font-display text-2xl font-extrabold tracking-[-0.03em]">{t.root.name}</p>
                <p className="text-sm text-white/75">{t.root.text}</p>
              </div>
            </div>
            <span data-v="root" aria-hidden className="tree-vline h-12 w-0.5 bg-red" />
          </div>

          {/* Horizontal rail (desktop) */}
          <div aria-hidden className="relative mx-[calc((100%-3rem)/6)] hidden h-0.5 lg:block">
            <span data-h className="tree-line absolute inset-0 bg-red" />
          </div>

          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-6">
            {t.nodes.map((n) => {
              const children = n.children.map((c) => c.entity)
              const future = n.entity === "usine"
              return (
                <li key={n.entity} className="flex flex-col items-center">
                  <span data-v="branch" aria-hidden className={cn("tree-vline hidden h-10 w-0.5 lg:block", lit(n.entity, children) ? "bg-amber" : "bg-red", future && "bg-transparent border-l-2 border-dashed border-red")} />
                  <div data-node="branch" className="w-full">
                  <Link
                    href={h(locale, n.href)}
                    data-cursor="link"
                    onMouseEnter={() => setActive(n.entity)}
                    onFocus={() => setActive(n.entity)}
                    className={cn(
                      "group relative flex w-full flex-col gap-4 border-2 bg-white p-6 transition-[opacity,transform,border-color,box-shadow] duration-500 ease-out-expo",
                      future ? "border-dashed border-ink/40" : "border-ink",
                      lit(n.entity, children) && "-translate-y-1 border-amber shadow-[0_20px_40px_-20px_rgba(0,0,0,.35)]",
                      dim(n.entity, children) && "opacity-35",
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <EntityMark entity={n.entity} size={48} className="text-ink" />
                      {future ? (
                        <span className="bg-ink px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.14em] text-amber uppercase">{soon}</span>
                      ) : (
                        <Icon name="arrowUpRight" size={20} className="text-red transition-transform duration-500 group-hover:rotate-45" />
                      )}
                    </div>
                    <div>
                      <p className="font-display text-xl font-extrabold tracking-[-0.03em]">{entities[n.entity].name}</p>
                      <p className="font-mono text-[0.65rem] tracking-[0.12em] text-red uppercase">{entities[n.entity].role}</p>
                    </div>
                    <p className="border-t border-line pt-3 text-sm text-muted">{n.model}</p>
                  </Link>
                  </div>

                  {n.children.length > 0 && (
                    <>
                      <span data-v="leaf" aria-hidden className={cn("tree-vline h-8 w-0.5", lit(n.entity, children) ? "bg-amber" : "bg-ink/40")} />
                      <ul className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-1">
                        {n.children.map((c) => (
                          <li key={c.entity} data-node="leaf">
                            <Link
                              href={h(locale, c.href)}
                              onMouseEnter={() => setActive(c.entity)}
                              onFocus={() => setActive(c.entity)}
                              className={cn(
                                "flex h-full flex-col gap-1 border-l-4 bg-white/80 p-4 transition-[opacity,border-color,background-color] duration-500",
                                active === c.entity ? "border-amber bg-white" : "border-red",
                                active !== null && active !== c.entity && active !== n.entity && "opacity-35",
                              )}
                            >
                              <span className="font-display font-extrabold">{entities[c.entity].name}</span>
                              <span className="text-xs text-muted">{c.text}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
