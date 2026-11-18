"use client"

import Link from "next/link"
import { locales, type Locale } from "@/i18n/config"
import { useSitePathname } from "@/lib/hooks"
import { localizePath } from "@/lib/routes"
import { cn } from "@/lib/utils"

/** FR / EN switch that keeps the current page. */
export default function LanguageSwitcher({ current, label, light, className }: { current: Locale; label: string; light?: boolean; className?: string }) {
  const path = useSitePathname()
  return (
    <nav aria-label={label} className={cn("flex items-center font-mono text-[0.7rem] font-semibold tracking-[0.12em]", className)}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className={cn("px-1.5", light ? "text-white/30" : "text-ink/25")}>/</span>}
          <Link
            href={localizePath(l, path)}
            hrefLang={l}
            lang={l}
            aria-current={l === current ? "true" : undefined}
            className={cn(
              "px-1 py-1 uppercase transition-colors",
              l === current ? (light ? "text-amber" : "text-red") : light ? "text-white/60 hover:text-white" : "text-ink/50 hover:text-ink",
            )}
          >
            {l}
          </Link>
        </span>
      ))}
    </nav>
  )
}
