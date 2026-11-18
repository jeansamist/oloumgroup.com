"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import Icon from "@/components/ui/Icon"
import { scrollToTarget } from "@/components/motion/SmoothScroll"
import { isTouchDevice, prefersReducedMotion } from "@/lib/motion"
import { cn } from "@/lib/utils"

/**
 * Giant "Oloum Group" wordmark spanning the full screen width. The font size is
 * fitted to the viewport, then each letter gets a fixed-width slot so the
 * weight animation (cursor distance, slow wave on touch) never changes the
 * overall width.
 */
export function Wordmark({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)

  // Fit to the full width (re-run on resize and once fonts are loaded).
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const letters = Array.from(root.querySelectorAll<HTMLSpanElement>("[data-l]"))
    const fit = () => {
      const target = root.parentElement!.clientWidth
      let size = 100
      // Two passes: the second corrects sub-pixel rounding of the locked slots.
      for (let pass = 0; pass < 2; pass++) {
        letters.forEach((el) => (el.style.width = ""))
        root.style.fontSize = `${size}px`
        const natural = root.getBoundingClientRect().width
        if (!natural) return
        size = (size * target) / natural
        root.style.fontSize = `${size}px`
        // Lock each letter's slot at the base weight.
        letters.forEach((el) => (el.style.width = `${el.getBoundingClientRect().width}px`))
        size = (size * target) / root.getBoundingClientRect().width
      }
      root.style.fontSize = `${size}px`
    }
    fit()
    document.fonts?.ready.then(fit).catch(() => {})
    const ro = new ResizeObserver(fit)
    ro.observe(root.parentElement!)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion()) return
    const letters = Array.from(root.querySelectorAll<HTMLSpanElement>("[data-l]"))
    let raf = 0
    let pointer: { x: number; y: number } | null = null
    let visible = false
    const auto = isTouchDevice()
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible && !raf) raf = requestAnimationFrame(loop)
    })
    io.observe(root)
    function loop(t: number) {
      raf = 0
      if (!visible) return
      const rects = letters.map((el) => el.getBoundingClientRect())
      letters.forEach((el, i) => {
        let k: number
        if (auto || !pointer) {
          k = (Math.sin(t / 900 - i * 0.45) + 1) / 2
          k = auto ? k : k * 0.35
        } else {
          const r = rects[i]
          const d = Math.hypot(pointer.x - (r.left + r.width / 2), pointer.y - (r.top + r.height / 2))
          k = Math.max(0, 1 - d / 420)
        }
        // Heavier letters get narrower so they stay inside their slot.
        el.style.fontVariationSettings = `"wght" ${Math.round(250 + k * 650)}, "wdth" ${Math.round(100 - k * 30)}`
        el.style.color = k > 0.7 ? "var(--amber)" : ""
      })
      raf = requestAnimationFrame(loop)
    }
    const move = (e: PointerEvent) => (pointer = { x: e.clientX, y: e.clientY })
    const leave = () => (pointer = null)
    window.addEventListener("pointermove", move, { passive: true })
    document.addEventListener("pointerleave", leave)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("pointermove", move)
      document.removeEventListener("pointerleave", leave)
    }
  }, [])

  return (
    <p ref={ref} aria-label={text} className="w-max font-display text-[15vw] leading-[0.82] whitespace-nowrap select-none">
      {text.split("").map((ch, i) => (
        <span key={i} aria-hidden data-l className="inline-block text-center transition-colors duration-300" style={{ fontVariationSettings: '"wght" 250, "wdth" 100' }}>
          {ch === " " ? "\u00a0" : ch}
        </span>
      ))}
    </p>
  )
}

/** Amber square button with a ring showing scroll progress. */
export function BackToTop({ label }: { label: string }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - innerHeight
      setProgress(max > 0 ? scrollY / max : 0)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  const c = 2 * Math.PI * 22
  return (
    <button
      type="button"
      onClick={() => scrollToTarget(0)}
      aria-label={label}
      className={cn(
        "fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-red text-white shadow-lg transition-[opacity,transform] duration-500 ease-out-expo hover:bg-red-dark sm:right-8 sm:bottom-8",
        progress > 0.08 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90" aria-hidden>
        <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="2" />
        <circle cx="24" cy="24" r="22" fill="none" stroke="#fcae42" strokeWidth="2" strokeDasharray={c} strokeDashoffset={c * (1 - progress)} />
      </svg>
      <Icon name="arrow" size={18} className="-rotate-90" />
    </button>
  )
}

/** Newsletter form (no backend yet: shows a success state). */
export function NewsletterForm({ placeholder, button, success }: { placeholder: string; button: string; success: string }) {
  const [done, setDone] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: connect to the client's emailing tool.
    setDone(true)
  }
  if (done)
    return (
      <p role="status" className="flex items-center gap-2 text-amber">
        <Icon name="check" size={18} /> {success}
      </p>
    )
  return (
    <form onSubmit={submit} className="flex border border-white/20 focus-within:border-amber">
      <input type="email" required placeholder={placeholder} aria-label={placeholder} className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/40" />
      <button type="submit" className="bg-amber px-4 text-sm font-semibold text-red-dark transition-colors hover:bg-white">
        {button}
      </button>
    </form>
  )
}
