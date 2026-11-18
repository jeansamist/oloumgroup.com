"use client"

import type { CSSProperties, PointerEvent, ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Card with a light 3D tilt, an amber glow following the pointer and an amber
 * rule that draws along the bottom on hover. CSS variables are written directly,
 * so moving the pointer never re-renders React.
 */
export default function TiltCard({ className, children, tilt = 5, as: Tag = "article" }: { className?: string; children: ReactNode; tilt?: number; as?: "article" | "div" | "li" }) {
  function onMove(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty("--x", `${x}px`)
    el.style.setProperty("--y", `${y}px`)
    if (tilt && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--rx", `${(y / r.height - 0.5) * -tilt}deg`)
      el.style.setProperty("--ry", `${(x / r.width - 0.5) * tilt}deg`)
    }
  }
  function onLeave(e: PointerEvent<HTMLElement>) {
    e.currentTarget.style.setProperty("--rx", "0deg")
    e.currentTarget.style.setProperty("--ry", "0deg")
  }
  return (
    <Tag
      onPointerEnter={onMove}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ "--x": "50%", "--y": "50%", "--rx": "0deg", "--ry": "0deg" } as CSSProperties}
      className={cn(
        "group relative isolate overflow-hidden rounded-[2px] border border-line bg-white transition-[transform,border-color] duration-500 ease-out-expo [transform:perspective(900px)_rotateX(var(--rx))_rotateY(var(--ry))] hover:border-ink/30",
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute top-0 left-0 -mt-32 -ml-32 size-64 translate-x-(--x) translate-y-(--y) rounded-full bg-amber opacity-25 blur-3xl" />
      </div>
      <span aria-hidden className="absolute inset-x-0 bottom-0 z-10 h-[3px] origin-left scale-x-0 bg-amber transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
      {children}
    </Tag>
  )
}
