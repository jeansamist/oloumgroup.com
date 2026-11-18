import Link from "next/link"
import type { ComponentPropsWithoutRef, ReactNode } from "react"
import Icon, { type IconName } from "@/components/ui/Icon"
import Magnetic from "@/components/ui/Magnetic"
import { cn } from "@/lib/utils"

type PressableProps =
  | ({ href: string } & Omit<ComponentPropsWithoutRef<"a">, "href">)
  | ({ href?: never } & ComponentPropsWithoutRef<"button">)

/** Link (next/link for internal paths, <a> otherwise) or button. */
export function Pressable(props: PressableProps) {
  if (typeof props.href === "string") {
    const { href, ...rest } = props
    const external = /^(https?:|mailto:|tel:)/.test(href)
    if (external) return <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest} />
    return <Link href={href} {...rest} />
  }
  const { type = "button", ...rest } = props as ComponentPropsWithoutRef<"button">
  return <button type={type} {...rest} />
}

// Each variant: base colours + the fill that rises on hover.
const variants = {
  /** Amber CTA, deep red text. Hover: ink fill rises, text turns amber. */
  primary: { base: "bg-amber text-red-dark", fill: "bg-ink", text: "group-hover/btn:text-amber", chip: "bg-red-dark text-amber" },
  /** Outlined, for light backgrounds. Hover: red fill. */
  outline: { base: "border border-ink/25 text-ink", fill: "bg-red", text: "group-hover/btn:text-white", chip: "bg-ink text-white group-hover/btn:bg-amber group-hover/btn:text-red-dark" },
  /** Outlined, for dark backgrounds and photos. Hover: white fill. */
  light: { base: "border border-white/40 text-white", fill: "bg-white", text: "group-hover/btn:text-red", chip: "bg-white/15 text-white group-hover/btn:bg-red group-hover/btn:text-white" },
  /** Solid red. Hover: amber fill. */
  red: { base: "bg-red text-white", fill: "bg-amber", text: "group-hover/btn:text-red-dark", chip: "bg-white/15 text-white group-hover/btn:bg-red-dark group-hover/btn:text-amber" },
} as const

const sizes = {
  sm: { root: "h-10 text-[0.8rem]", pad: "py-1 pr-1 pl-4", chip: "size-8" },
  md: { root: "h-13 text-[0.9rem]", pad: "py-1.5 pr-1.5 pl-6", chip: "size-10" },
  lg: { root: "h-15 text-base", pad: "py-2 pr-2 pl-7", chip: "size-11" },
} as const

export type ButtonVariant = keyof typeof variants

export default function Button({
  variant = "primary",
  size = "md",
  icon = "arrowUpRight",
  magnetic = false,
  className,
  children,
  ...props
}: PressableProps & { variant?: ButtonVariant; size?: keyof typeof sizes; icon?: IconName; magnetic?: boolean; children: ReactNode }) {
  const v = variants[variant]
  const s = sizes[size]
  const button = (
    <Pressable
      {...(props as PressableProps)}
      data-cursor="link"
      className={cn(
        "group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden rounded-[2px] font-semibold whitespace-nowrap transition-colors duration-300",
        v.base,
        s.root,
        s.pad,
        className,
      )}
    >
      <span aria-hidden className={cn("absolute inset-0 -z-10 translate-y-full transition-transform duration-500 ease-out-expo group-hover/btn:translate-y-0 group-focus-visible/btn:translate-y-0", v.fill)} />
      <span className={cn("transition-colors duration-300", v.text)}>{children}</span>
      <span className={cn("flex aspect-square items-center justify-center rounded-[2px] transition-[transform,background-color,color] duration-500 ease-out-expo group-hover/btn:rotate-45", s.chip, v.chip)}>
        <Icon name={icon} size={16} />
      </span>
    </Pressable>
  )
  return magnetic ? <Magnetic>{button}</Magnetic> : button
}

/** Text link with an arrow chip and an underline that draws in. */
export function TextLink({ href, children, className, light }: { href: string; children: ReactNode; className?: string; light?: boolean }) {
  return (
    <Pressable href={href} data-cursor="link" className={cn("group/link inline-flex items-center gap-2.5 text-[0.9rem] font-semibold", light ? "text-white" : "text-red", className)}>
      <span className="link-draw">{children}</span>
      <span aria-hidden className="flex size-7 items-center justify-center rounded-[2px] bg-amber text-red-dark transition-transform duration-500 ease-out-expo group-hover/link:translate-x-1 group-hover/link:-rotate-45">
        <Icon name="arrow" size={14} />
      </span>
    </Pressable>
  )
}
