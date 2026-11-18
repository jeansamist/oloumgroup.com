"use client"

import { useRef } from "react"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/motion"
import { cn } from "@/lib/utils"

/** Vertical timeline: an amber line grows with the scroll and each milestone lights up as it is reached. */
export default function Timeline({ eyebrow, title, lead, items }: { eyebrow?: string; title: string; lead?: string; items: { year: string; title: string; text: string }[] }) {
  const root = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.fromTo("[data-tl-line]", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 60%", scrub: true } })
      gsap.utils.toArray<HTMLElement>("[data-tl-item]").forEach((el) => {
        gsap.fromTo(el, { opacity: 0.25 }, { opacity: 1, duration: 0.5, scrollTrigger: { trigger: el, start: "top 65%", toggleActions: "play none none reverse" } })
      })
    },
    { scope: root },
  )
  const now = 2026
  return (
    <Section tone="ink" className="blueprint-dark">
      <Container className="space-y-16">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <div ref={root} className="relative">
          <div aria-hidden className="absolute top-0 bottom-0 left-[0.6rem] w-px bg-white/15 md:left-1/2">
            <div data-tl-line className="h-full w-full origin-top bg-amber" />
          </div>
          <ol className="space-y-12">
            {items.map((item, i) => {
              const future = Number(item.year) > now
              return (
                <li key={item.year + item.title} data-tl-item className={cn("relative grid gap-2 pl-10 md:grid-cols-2 md:gap-16 md:pl-0", i % 2 === 1 && "md:[&>div:first-child]:order-2")}>
                  <span aria-hidden className={cn("absolute top-2 left-0 size-5 rotate-45 border-2 md:left-1/2 md:-translate-x-1/2", future ? "border-dashed border-amber bg-night" : "border-amber bg-red")} />
                  <div className={cn(i % 2 ? "md:pl-4" : "md:pr-4 md:text-right")}>
                    <span className={cn("font-display text-[clamp(2.5rem,2rem+2vw,4rem)] leading-none font-extrabold tracking-[-0.05em]", future ? "text-white/30" : "text-amber")}>{item.year}</span>
                  </div>
                  <div className={cn("space-y-2", i % 2 ? "md:pr-4 md:text-right" : "md:pl-4")}>
                    <h3 className="text-h3">{item.title}</h3>
                    <p className="text-white/70">{item.text}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
