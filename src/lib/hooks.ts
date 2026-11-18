"use client"

import { usePathname } from "next/navigation"
import { useSyncExternalStore } from "react"

/** Evaluates a media query on the client (false on the server). */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query)
      mq.addEventListener("change", cb)
      return () => mq.removeEventListener("change", cb)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

/** Pathname without the locale prefix ("/fr/usine" -> "/usine", "/en" -> "/"). */
export function useSitePathname(): string {
  const p = usePathname() ?? "/"
  return p.replace(/^\/(en|fr)(?=\/|$)/, "") || "/"
}
