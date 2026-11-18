"use client"

import { useEffect, useRef } from "react"
import Logo from "@/components/ui/Logo"
import { gsap } from "@/lib/motion"

/**
 * Branded entry screen: logo, 000 → 100 counter, then an amber curtain and the
 * red screen lift away. Once per session; the boot script adds `no-loader` to
 * <html> before paint when it should be skipped, so it never flashes.
 */
export default function Loader({ label, signature }: { label: string; signature: string }) {
  const root = useRef<HTMLDivElement>(null)
  const count = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el || document.documentElement.classList.contains("no-loader")) return
    const obj = { v: 0 }
    const tl = gsap.timeline({ onComplete: () => void (el.style.display = "none") })
    tl.fromTo(el.querySelector("[data-loader-bar]"), { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "power2.inOut" })
      .to(
        obj,
        {
          v: 100,
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => {
            if (count.current) count.current.textContent = String(Math.round(obj.v)).padStart(3, "0")
          },
        },
        0,
      )
      .to(el.querySelector("[data-loader-content]"), { yPercent: -30, opacity: 0, duration: 0.35, ease: "power2.in" }, "-=0.05")
      .to(el.querySelector("[data-loader-amber]"), { yPercent: -100, duration: 0.6, ease: "expo.inOut" }, "-=0.2")
      .to(el, { yPercent: -100, duration: 0.65, ease: "expo.inOut" }, "-=0.45")
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={root} role="status" aria-label={label} className="blueprint-dark fixed inset-0 z-[100] flex bg-red p-6 text-white sm:p-10 [html.no-loader_&]:hidden">
      <div data-loader-amber className="absolute inset-0 translate-y-full bg-amber" />
      <div data-loader-content className="relative flex w-full flex-col justify-between">
        <Logo light />
        <div className="space-y-5">
          <p className="font-mono text-xs tracking-[0.3em] text-amber uppercase">{signature}</p>
          <div className="h-px w-full bg-white/20">
            <div data-loader-bar className="h-full origin-left bg-amber" />
          </div>
          <span ref={count} className="block text-right font-display text-7xl font-extrabold tracking-[-0.05em] tabular-nums sm:text-9xl">
            000
          </span>
        </div>
      </div>
    </div>
  )
}
