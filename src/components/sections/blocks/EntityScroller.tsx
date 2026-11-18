"use client"

import Link from "next/link"
import { useRef } from "react"
import Icon from "@/components/ui/Icon"
import { EntityMark } from "@/components/ui/Logo"
import Photo from "@/components/ui/Photo"
import Rich from "@/components/ui/Rich"
import { Eyebrow } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from "@/lib/motion"
import { href as h } from "@/lib/routes"

/**
 * Four large entity cards. Desktop: the section pins and vertical scroll moves
 * the cards horizontally. Mobile / reduced motion: cards stack vertically.
 */
export default function EntityScroller({ t, entities, locale }: { t: Dictionary["entityCards"]; entities: Dictionary["entities"]; locale: Locale }) {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLUListElement>(null)
  const bar = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const mm = gsap.matchMedia()
      mm.add("(min-width: 1024px)", () => {
        const el = track.current!
        const distance = () => el.scrollWidth - window.innerWidth + 64
        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => bar.current && (bar.current.style.transform = `scaleX(${self.progress})`),
          },
        })
        return () => tween.scrollTrigger?.kill()
      })
      ScrollTrigger.refresh()
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="entites" ref={root} className="relative overflow-hidden bg-white py-20 sm:py-28 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-0 motion-reduce:lg:h-auto motion-reduce:lg:py-28">
      <div className="mx-auto mb-12 flex w-full max-w-[1280px] items-end justify-between gap-6 px-5 sm:px-8 lg:mb-10">
        <div className="space-y-5">
          <div data-reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </div>
          <h2 data-split className="text-h2">
            <Rich text={t.title} />
          </h2>
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <span className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">{t.drag}</span>
          <div aria-hidden className="h-0.5 w-48 overflow-hidden bg-line">
            <div ref={bar} className="h-full origin-left scale-x-0 bg-red" />
          </div>
        </div>
      </div>

      <ul ref={track} data-cursor="drag" className="flex flex-col gap-4 px-5 sm:px-8 lg:w-max lg:flex-row lg:gap-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] motion-reduce:lg:mx-auto motion-reduce:lg:grid motion-reduce:lg:w-full motion-reduce:lg:max-w-[1280px] motion-reduce:lg:grid-cols-2 motion-reduce:lg:pl-8">
        {t.items.map((s) => (
          <li key={s.number} className="group on-dark relative isolate flex min-h-[28rem] flex-col justify-between overflow-hidden bg-night p-7 text-white sm:p-9 lg:h-[66svh] lg:w-[min(38rem,44vw)] motion-reduce:lg:w-auto">
            <div className="absolute inset-0 -z-10 opacity-45 transition-opacity duration-700 ease-out-expo group-hover:opacity-90">
              <Photo image={s.image} alt="" sizes="(min-width: 1024px) 44vw, 100vw" fx={false} className="size-full" imgClassName="transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-night via-night/75 to-night/20" />
            <div className="flex items-start justify-between gap-6">
              <span className="font-display text-7xl font-extrabold tracking-[-0.06em] text-white/20 transition-colors duration-500 group-hover:text-amber sm:text-8xl">{s.number}</span>
              <EntityMark entity={s.entity} size={52} className="text-white" />
            </div>
            <div className="space-y-5">
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-amber uppercase">{entities[s.entity].role}</p>
              <h3 className="font-display text-[clamp(1.8rem,1.4rem+1.5vw,2.8rem)] leading-none font-extrabold tracking-[-0.04em]">{s.title}</h3>
              <p className="max-w-md text-pretty text-white/75">{s.text}</p>
              <ul className="flex flex-wrap gap-2 transition-all duration-500 ease-out-expo lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                {s.keywords.map((k) => (
                  <li key={k} className="bg-amber px-2.5 py-1 font-mono text-[0.62rem] font-semibold tracking-[0.1em] text-red-dark uppercase">
                    {k}
                  </li>
                ))}
              </ul>
              <Link href={h(locale, s.cta.href)} className="inline-flex items-center gap-3 font-semibold after:absolute after:inset-0" data-cursor="view">
                <span className="link-draw">{s.cta.label}</span>
                <span className="flex size-10 items-center justify-center bg-amber text-red-dark transition-transform duration-500 group-hover:rotate-45">
                  <Icon name="arrowUpRight" size={16} />
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
