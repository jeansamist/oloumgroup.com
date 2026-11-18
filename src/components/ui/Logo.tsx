import type { EntityKey } from "@/lib/entities"
import { entityStyle } from "@/lib/entities"
import { cn } from "@/lib/utils"

/**
 * MOCK LOGOS — single place to swap when the client sends the real files.
 * The mark is an isometric module (three faces: amber top, red left, deep red right),
 * a nod to the prefabricated building shared by every entity.
 */
export function ModuleMark({ className, tone = "color" }: { className?: string; tone?: "color" | "mono" }) {
  const mono = tone === "mono"
  return (
    <svg viewBox="0 0 40 44" aria-hidden className={cn("shrink-0", className)}>
      <path d="M20 2 38 12 20 22 2 12Z" fill={mono ? "currentColor" : "#fcae42"} opacity={mono ? 0.9 : 1} />
      <path d="M2 12 20 22v20L2 32Z" fill={mono ? "currentColor" : "#920f15"} opacity={mono ? 0.55 : 1} />
      <path d="M38 12 20 22v20l18-10Z" fill={mono ? "currentColor" : "#6e0b10"} opacity={mono ? 0.75 : 1} />
      <path d="M20 22v20" stroke={mono ? "transparent" : "#fcae42"} strokeOpacity=".35" strokeWidth=".8" />
    </svg>
  )
}

export default function Logo({ className, light = false, compact = false }: { className?: string; light?: boolean; compact?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 leading-none", light ? "text-white" : "text-ink", className)}>
      <ModuleMark className="h-9 w-8" />
      {!compact && (
        <span className="flex flex-col">
          <span className="font-display text-[1.32rem] font-extrabold tracking-[-0.04em]">OLOUM</span>
          <span className={cn("mt-0.5 font-mono text-[0.58rem] font-semibold tracking-[0.42em]", light ? "text-amber" : "text-red")}>GROUP</span>
        </span>
      )}
    </span>
  )
}

/** Mock logo of an entity: a square with its initials in the entity colour (dashed for the future factory). */
export function EntityMark({ entity, className, size = 44 }: { entity: EntityKey; className?: string; size?: number }) {
  const s = entityStyle[entity]
  if (entity === "group")
    return (
      <span aria-hidden className={cn("inline-flex shrink-0 items-center justify-center", className)} style={{ width: size, height: size }}>
        <ModuleMark className="h-full w-auto" />
      </span>
    )
  return (
    <span
      aria-hidden
      className={cn("inline-flex shrink-0 items-center justify-center font-display font-extrabold tracking-[-0.04em]", s.dashed && "dashed-box", className)}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: s.dashed ? "transparent" : s.color,
        color: s.dashed ? "currentColor" : s.ink,
      }}
    >
      {s.initials}
    </span>
  )
}
