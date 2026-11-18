import type { ElementType, ReactNode } from "react"
import Rich from "@/components/ui/Rich"
import type { Tone } from "@/i18n/types"
import { cn } from "@/lib/utils"

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8", className)}>{children}</div>
}

const tones: Record<Tone, string> = {
  default: "bg-white",
  concrete: "bg-concrete",
  ink: "on-dark grain bg-night text-white",
  red: "on-dark grain bg-red text-white",
}

export default function Section({ tone = "default", flush, className, children, id }: { tone?: Tone; flush?: boolean; className?: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} data-tone={tone} className={cn("relative", !flush && "py-20 sm:py-28", tones[tone], className)}>
      {children}
    </section>
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>
}

/** Eyebrow + display title (line-by-line reveal) + lead. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
  align = "left",
  className,
  children,
}: {
  eyebrow?: string
  title: string
  lead?: string
  as?: ElementType
  align?: "left" | "center"
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={cn("max-w-3xl space-y-5", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div data-reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <Tag data-split className="text-h2 text-balance">
        <Rich text={title} />
      </Tag>
      {lead && (
        <p data-reveal className="text-lead text-pretty opacity-75">
          <Rich text={lead} />
        </p>
      )}
      {children}
    </div>
  )
}
