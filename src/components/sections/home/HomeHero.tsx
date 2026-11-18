"use client"

import { useEffect, useRef, useState } from "react"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import { EntityMark } from "@/components/ui/Logo"
import Photo from "@/components/ui/Photo"
import { scrollToTarget } from "@/components/motion/SmoothScroll"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { EntityKey } from "@/lib/entities"
import { gsap, isTouchDevice, prefersReducedMotion, SplitText } from "@/lib/motion"
import { href as h } from "@/lib/routes"
import { cn } from "@/lib/utils"

const SLIDE_MS = 6000
const wordEntities: EntityKey[] = ["yo", "bella", "usine"]

/**
 * Home hero: crossfading photo slideshow with slow zoom, pointer parallax,
 * blueprint grid, rotating word (construire / louer / produire) on an amber
 * highlighter, magnetic buttons, proofs, slide captions and a scroll cue.
 */
export default function HomeHero({ t, locale, entities }: { t: Dictionary["home"]["hero"]; locale: Locale; entities: Dictionary["entities"] }) {
  const root = useRef<HTMLElement>(null)
  const layer = useRef<HTMLDivElement>(null)
  const [slide, setSlide] = useState(0)
  const [word, setWord] = useState(0)

  // Intro timeline (after the loader when it runs).
  useEffect(() => {
    const el = root.current
    if (!el) return
    const items = el.querySelectorAll<HTMLElement>("[data-hero]")
    if (prefersReducedMotion()) {
      gsap.set(items, { opacity: 1 })
      return
    }
    const delay = document.documentElement.classList.contains("no-loader") ? 0.1 : 1.9
    const split = SplitText.create(el.querySelector("h1")!, { type: "lines", mask: "lines", linesClass: "split-line" })
    gsap.set(items, { opacity: 1 })
    const tl = gsap.timeline({ delay })
    tl.from(split.lines, { yPercent: 115, duration: 1.2, ease: "expo.out", stagger: 0.1 })
      .from(el.querySelectorAll("[data-hero-fade]"), { y: 30, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08 }, "-=0.9")
      .from(el.querySelector("[data-hero-bg]"), { scale: 1.15, duration: 2.2, ease: "expo.out" }, 0)
    return () => {
      tl.kill()
      split.revert()
    }
  }, [])

  // Slideshow + rotating word, in sync.
  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % t.slides.length)
      setWord((w) => (w + 1) % t.words.length)
    }, SLIDE_MS / 2)
    return () => window.clearInterval(id)
  }, [t.slides.length, t.words.length])

  // Pointer parallax on the photo layer.
  useEffect(() => {
    const el = root.current
    if (!el || isTouchDevice() || prefersReducedMotion()) return
    const x = gsap.quickTo(layer.current, "x", { duration: 1.2, ease: "power3" })
    const y = gsap.quickTo(layer.current, "y", { duration: 1.2, ease: "power3" })
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      x(((e.clientX - r.left) / r.width - 0.5) * -30)
      y(((e.clientY - r.top) / r.height - 0.5) * -20)
    }
    el.addEventListener("pointermove", move)
    return () => el.removeEventListener("pointermove", move)
  }, [])

  const currentSlide = Math.floor(slide) % t.slides.length

  return (
    <section ref={root} className="on-dark relative flex min-h-svh items-end overflow-hidden bg-night pt-32 pb-24 text-white sm:items-center sm:pb-28">
      <div data-hero-bg className="absolute inset-0">
        <div ref={layer} className="absolute -inset-8">
          {t.slides.map((s, i) => (
            <div key={s.image} className={cn("absolute inset-0 transition-opacity duration-[1600ms] ease-in-out", i === currentSlide ? "opacity-100" : "opacity-0")}>
              <Photo image={s.image} alt={s.alt} priority={i === 0} fx={false} className="size-full" imgClassName={i === currentSlide ? "animate-ken-burns" : ""} />
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden className="absolute inset-0 bg-linear-to-r from-night via-night/75 to-night/20" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-night/90 via-transparent to-transparent" />
      <div aria-hidden className="blueprint-dark absolute inset-0 [mask-image:linear-gradient(to_right,black,transparent_70%)]" />
      <div aria-hidden className="absolute top-0 bottom-0 left-[max(1.25rem,calc((100vw-80rem)/2+2rem))] w-px bg-white/10" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="max-w-5xl space-y-8">
          <p data-hero data-hero-fade className="eyebrow">
            {t.eyebrow}
          </p>
          <h1 data-hero className="text-display">
            {t.titleBefore}
            {/* Rotating word on its own line, so the longest word never leaves a gap. */}
            <span className="grid justify-items-start">
              {t.words.map((w, i) => (
                <span
                  key={w}
                  aria-hidden={i !== word}
                  className={cn(
                    "relative col-start-1 row-start-1 text-amber transition-[transform,opacity,filter] duration-700 ease-out-expo",
                    i === word ? "translate-y-0 opacity-100 blur-0" : i === (word + t.words.length - 1) % t.words.length ? "-translate-y-[60%] opacity-0 blur-sm" : "translate-y-[60%] opacity-0 blur-sm",
                  )}
                >
                  {w}
                  {i === word && <span aria-hidden className="absolute inset-x-0 bottom-[0.04em] h-[0.1em] origin-left bg-amber/90" style={{ animation: "grow-x .9s var(--ease-out-expo) both" }} />}
                </span>
              ))}
            </span>
            {t.titleAfter}
          </h1>
          <p data-hero data-hero-fade className="max-w-2xl text-lead text-white/80">
            {t.text}
          </p>
          <div data-hero data-hero-fade className="flex flex-wrap gap-3">
            {t.ctas.map((c) =>
              c.href.startsWith("#") ? (
                <Button key={c.label} href={c.href} onClick={(e) => (e.preventDefault(), scrollToTarget(c.href))} magnetic size="lg">
                  {c.label}
                </Button>
              ) : (
                <Button key={c.label} href={h(locale, c.href)} variant={c.variant ?? "primary"} size="lg">
                  {c.label}
                </Button>
              ),
            )}
          </div>
          <ul data-hero data-hero-fade className="flex flex-wrap gap-x-7 gap-y-3 pt-2 text-sm font-medium text-white/85">
            {t.proofs.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center bg-amber text-red-dark">
                  <Icon name="check" size={12} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Entity index, synced with the rotating word */}
      <ul data-hero data-hero-fade className="absolute top-1/2 right-5 hidden -translate-y-1/2 flex-col gap-2 sm:right-8 xl:flex">
        {wordEntities.map((e, i) => (
          <li key={e} className={cn("flex items-center gap-3 border-l-2 py-1.5 pl-3 transition-[opacity,border-color] duration-500", i === word ? "border-amber opacity-100" : "border-white/20 opacity-45")}>
            <EntityMark entity={e} size={28} className="text-white" />
            <span className="leading-tight">
              <span className="block font-display text-sm font-extrabold">{entities[e].name}</span>
              <span className="font-mono text-[0.58rem] tracking-[0.12em] text-white/60 uppercase">{t.words[i]}</span>
            </span>
          </li>
        ))}
      </ul>

      <div data-hero data-hero-fade className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 font-mono text-[0.6rem] tracking-[0.2em] text-white/60 uppercase md:flex">
        {t.scroll}
        <span className="relative h-12 w-px overflow-hidden bg-white/20">
          <span className="absolute inset-0 animate-scroll-cue bg-amber" />
        </span>
      </div>
      <p className="absolute bottom-8 left-5 hidden font-mono text-[0.6rem] tracking-[0.14em] text-white/50 uppercase sm:left-8 md:block">
        {String(currentSlide + 1).padStart(2, "0")} / {String(t.slides.length).padStart(2, "0")} — {t.slides[currentSlide].caption}
      </p>
    </section>
  )
}
