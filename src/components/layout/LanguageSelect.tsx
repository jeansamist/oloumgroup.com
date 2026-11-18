"use client"

import { useRouter } from "next/navigation"
import Icon from "@/components/ui/Icon"
import { locales, type Locale } from "@/i18n/config"
import { useSitePathname } from "@/lib/hooks"
import { localizePath } from "@/lib/routes"

/** Footer language select: switches to the same page in the chosen language. */
export default function LanguageSelect({ current, label, names }: { current: Locale; label: string; names: Record<Locale, string> }) {
  const router = useRouter()
  const path = useSitePathname()
  return (
    <label className="relative inline-flex items-center gap-2 text-sm">
      <Icon name="globe" size={16} className="pointer-events-none absolute left-3 text-amber" />
      <span className="sr-only">{label}</span>
      <select
        value={current}
        onChange={(e) => router.push(localizePath(e.target.value as Locale, path) + window.location.hash)}
        className="appearance-none border border-white/20 bg-transparent py-2 pr-9 pl-9 text-white transition-colors outline-none hover:border-white/50 focus:border-amber"
      >
        {locales.map((l) => (
          <option key={l} value={l} lang={l} className="bg-night text-white">
            {names[l]}
          </option>
        ))}
      </select>
      <Icon name="chevronDown" size={14} className="pointer-events-none absolute right-3 text-white/60" />
    </label>
  )
}
