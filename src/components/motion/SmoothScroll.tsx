"use client"

import Lenis from "lenis"
import { useEffect } from "react"
import { useSitePathname } from "@/lib/hooks"
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/motion"

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

/** Scrolls to a position or element, through Lenis when it is running. */
export function scrollToTarget(target: number | string | HTMLElement, immediate = false) {
  if (window.__lenis) window.__lenis.scrollTo(target, { immediate, duration: 1.4 })
  else if (typeof target === "number") window.scrollTo({ top: target, behavior: immediate ? "auto" : "smooth" })
  else {
    const el = typeof target === "string" ? document.querySelector(target) : target
    el?.scrollIntoView({ behavior: immediate ? "auto" : "smooth" })
  }
}

/** Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync. */
export default function SmoothScroll() {
  const pathname = useSitePathname()

  useEffect(() => {
    if (prefersReducedMotion()) return
    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, touchMultiplier: 1.2, anchors: true })
    window.__lenis = lenis
    lenis.on("scroll", ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])

  useEffect(() => {
    if (window.location.hash) return
    scrollToTarget(0, true)
  }, [pathname])

  return null
}
