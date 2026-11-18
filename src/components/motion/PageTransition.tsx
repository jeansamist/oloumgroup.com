"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { useSitePathname } from "@/lib/hooks"
import { gsap, prefersReducedMotion } from "@/lib/motion"

/**
 * On every client-side navigation a red curtain covering the screen shows the
 * page name, then sweeps away upward to reveal the new page. Skipped on the
 * first load (the Loader handles it); simple fade with reduced motion.
 */
export default function PageTransition({ children, names }: { children: ReactNode; names: Record<string, string> }) {
  const pathname = useSitePathname()
  const curtain = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const first = useRef(true)
  const name = names[pathname] ?? names[pathname.replace(/\/[^/]+$/, "")] ?? ""

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const c = curtain.current
    if (!c) return
    if (prefersReducedMotion()) {
      gsap.fromTo(content.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
      return
    }
    const tl = gsap.timeline()
    tl.set(c, { display: "flex", clipPath: "inset(0% 0% 0% 0%)" })
      .fromTo(c.querySelector("[data-name]"), { yPercent: 110 }, { yPercent: 0, duration: 0.45, ease: "expo.out" })
      .fromTo(c.querySelector("[data-bar]"), { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "expo.out" }, "<")
      .to(c.querySelector("[data-name]"), { yPercent: -110, duration: 0.35, ease: "power2.in" }, "+=0.12")
      .to(c, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.7, ease: "expo.inOut" }, "-=0.1")
      .fromTo(content.current, { y: 60 }, { y: 0, duration: 0.9, ease: "expo.out", clearProps: "transform" }, "<0.15")
      .set(c, { display: "none" })
    return () => {
      tl.kill()
      gsap.set(c, { display: "none" })
    }
  }, [pathname])

  return (
    <>
      <div ref={curtain} aria-hidden className="blueprint-dark pointer-events-none fixed inset-0 z-[95] hidden flex-col items-center justify-center gap-6 bg-red text-white">
        <div className="overflow-hidden px-6">
          <p data-name className="text-center font-display text-h1 font-extrabold tracking-[-0.04em]">
            {name}
          </p>
        </div>
        <span data-bar className="h-[3px] w-40 origin-left bg-amber" />
      </div>
      <div ref={content}>{children}</div>
    </>
  )
}
