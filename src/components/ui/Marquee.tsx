import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Infinite CSS marquee. The track is duplicated so it loops seamlessly; hovering pauses it. */
export default function Marquee({
  items,
  className,
  separator = "✦",
  duration = 40,
  reverse,
  label,
}: {
  items: ReactNode[]
  className?: string
  separator?: ReactNode
  duration?: number
  reverse?: boolean
  label?: string
}) {
  const track = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} aria-label={hidden ? undefined : label} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <li key={i} className="flex shrink-0 items-center">
          <span>{item}</span>
          <span aria-hidden className="px-6 opacity-50 sm:px-10">
            {separator}
          </span>
        </li>
      ))}
    </ul>
  )
  return (
    <div className={cn("group/marquee relative flex overflow-hidden", className)}>
      <div
        className={cn("flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]", reverse && "[animation-direction:reverse]")}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {track(false)}
        {track(true)}
      </div>
    </div>
  )
}
