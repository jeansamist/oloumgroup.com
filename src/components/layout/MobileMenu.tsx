"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import Icon from "@/components/ui/Icon"
import Logo, { EntityMark } from "@/components/ui/Logo"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { gsap, prefersReducedMotion } from "@/lib/motion"
import { href as h } from "@/lib/routes"
import { group } from "@/lib/site"
import { cn } from "@/lib/utils"
import LanguageSwitcher from "./LanguageSwitcher"

/** Full-screen menu that drops like a curtain, with giant numbered links. */
export default function MobileMenu({
  open,
  onClose,
  locale,
  t,
  entities,
  common,
}: {
  open: boolean
  onClose: () => void
  locale: Locale
  t: Dictionary["header"]
  entities: Dictionary["entities"]
  common: Dictionary["common"]
}) {
  const root = useRef<HTMLDivElement>(null)
  const l = (p: string) => h(locale, p)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (open) {
      window.__lenis?.stop()
      document.body.style.overflow = "hidden"
      if (!prefersReducedMotion()) {
        gsap.fromTo(el, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "expo.inOut" })
        gsap.fromTo(el.querySelectorAll("[data-m]"), { yPercent: 110 }, { yPercent: 0, duration: 0.8, ease: "expo.out", stagger: 0.05, delay: 0.25 })
      }
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
      window.addEventListener("keydown", onKey)
      return () => {
        window.removeEventListener("keydown", onKey)
        window.__lenis?.start()
        document.body.style.overflow = ""
      }
    }
  }, [open, onClose])

  const main = [
    ...t.nav.map((n) => ({ label: n.label, href: n.href })),
    { label: t.cta, href: "/devis" },
  ]

  return (
    <div
      ref={root}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label={t.mobile.title}
      inert={!open}
      className={cn("blueprint-dark fixed inset-0 z-[90] overflow-y-auto bg-red-dark text-white lg:hidden", open ? "visible" : "invisible")}
      data-lenis-prevent
    >
      <div className="flex h-18 items-center justify-between px-5 sm:h-20 sm:px-8">
        <Logo light />
        <button type="button" onClick={onClose} aria-label={t.closeMenu} className="flex size-11 items-center justify-center border border-white/30">
          <Icon name="x" size={20} />
        </button>
      </div>
      <nav aria-label={t.mainNav} className="px-5 pt-6 sm:px-8">
        <ul>
          {main.map((item, i) => (
            <li key={item.label} className="overflow-hidden border-b border-white/15">
              <Link data-m href={l(item.href)} onClick={onClose} className="flex min-h-16 items-center gap-4 font-display text-[clamp(1.6rem,8vw,2.6rem)] font-extrabold tracking-[-0.04em]">
                <span className="font-mono text-xs font-medium tracking-normal text-amber">0{i + 1}</span>
                {item.label}
                <Icon name="arrow" size={22} className="ml-auto" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 font-mono text-[0.7rem] tracking-[0.2em] text-amber uppercase">{t.mobile.entities}</p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-3">
          {t.entitiesMenu.entities.map((e) => (
            <li key={e.entity}>
              <Link href={l(e.href)} onClick={onClose} className="flex items-center gap-3 border border-white/15 p-3">
                <EntityMark entity={e.entity} size={36} className="text-white" />
                <span className="leading-tight">
                  <span className="block font-display font-extrabold">{entities[e.entity].name}</span>
                  <span className="font-mono text-[0.6rem] tracking-[0.12em] text-white/60 uppercase">{entities[e.entity].role}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pb-10 text-sm">
          <div className="space-y-1">
            <a href={`tel:${group.phone}`} className="block">{group.phoneDisplay}</a>
            <a href={group.whatsapp} className="block text-amber">{common.whatsapp}</a>
          </div>
          <LanguageSwitcher current={locale} label={common.language} light />
        </div>
      </nav>
    </div>
  )
}
