import { EntityMark } from "@/components/ui/Logo"
import type { EntityKey } from "@/lib/entities"
import { cn } from "@/lib/utils"

/** Entity chip: mock mark + name (+ role). */
export default function EntityBadge({ entity, name, role, className, light }: { entity: EntityKey; name: string; role?: string; className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <EntityMark entity={entity} size={34} className={light ? "text-white" : "text-ink"} />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-[0.95rem] font-extrabold tracking-[-0.02em]">{name}</span>
        {role && <span className={cn("font-mono text-[0.62rem] tracking-[0.12em] uppercase", light ? "text-white/60" : "text-muted")}>{role}</span>}
      </span>
    </span>
  )
}
