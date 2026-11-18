"use client"

import Link from "next/link"
import { useEffect, useId, useRef, useState } from "react"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import Logo, { EntityMark } from "@/components/ui/Logo"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { useSitePathname } from "@/lib/hooks"
import { href as h } from "@/lib/routes"
import { cn } from "@/lib/utils"
import MobileMenu from "./MobileMenu"

type Menu = "group" | "entities" | null

/**
 * Transparent over the dark page hero, solid white once the hero has scrolled by.
 * Hides when scrolling down, comes back when scrolling up. "Le groupe" and
 * "Nos entités" open mega-menus on hover, focus or click.
 */
export default function Header({ locale, t, entities, common }: { locale: Locale; t: Dictionary["header"]; entities: Dictionary["entities"]; common: Dictionary["common"] }) {
  const pathname = useSitePathname()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState<Menu>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)
  const panelId = useId()
  const l = (p: string) => h(locale, p)

  useEffect(() => {
    let last = window.scrollY
    const heroEnd = () => {
      const hero = document.querySelector<HTMLElement>("#main section")
      if (!hero) return 24
      return Math.max(24, hero.offsetTop + hero.offsetHeight * 0.25)
    }
    let threshold = heroEnd()
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > threshold)
      if (Math.abs(y - last) < 6) return
      setHidden(y > last && y > threshold + 80)
      if (y > last) setMenu(null)
      last = y
    }
    const onResize = () => {
      threshold = heroEnd()
      onScroll()
    }
    onScroll()
    const timer = window.setTimeout(onResize, 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [pathname])

  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setMenu(null)
    setMobileOpen(false)
  }

  useEffect(() => {
    if (!menu) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menu])

  const open = (m: Menu) => {
    window.clearTimeout(closeTimer.current)
    setMenu(m)
  }
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setMenu(null), 160)
  }
  const isActive = (p: string) => (p === "/" ? pathname === "/" : pathname === p || pathname.startsWith(`${p}/`))
  const solid = scrolled || !!menu
  const light = !solid

  return (
    <>
      <header
        className={cn("fixed inset-x-0 top-0 z-50 isolate transition-transform ease-out-expo", hidden && !mobileOpen ? "-translate-y-full duration-500" : "translate-y-0 duration-700")}
        onMouseLeave={scheduleClose}
      >
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 -z-10 border-b border-line bg-white shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)] transition-[clip-path,opacity] duration-700 ease-out-expo",
            solid ? "opacity-100 [clip-path:inset(0_0_-40px_0)]" : "opacity-0 [clip-path:inset(0_0_100%_0)]",
          )}
        />
        {/* Hero scrim: keeps the white bar legible over bright photos. */}
        <div aria-hidden className={cn("absolute inset-x-0 top-0 -z-20 h-32 bg-linear-to-b from-black/45 to-transparent transition-opacity duration-500", solid && "opacity-0")} />
        <div className="relative mx-auto flex h-18 w-full max-w-[1280px] items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
          <Link href={l("/")} aria-label={t.brandAria} className="shrink-0" data-cursor="link">
            <Logo light={light} />
          </Link>

          <nav aria-label={t.mainNav} className="hidden items-center gap-1 lg:flex">
            {t.nav.map((item) =>
              "menu" in item && item.menu ? (
                <div key={item.label} onMouseEnter={() => open(item.menu)}>
                  <button
                    type="button"
                    aria-expanded={menu === item.menu}
                    aria-controls={panelId}
                    onClick={() => setMenu(menu === item.menu ? null : item.menu)}
                    onFocus={() => open(item.menu)}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 text-[0.88rem] font-semibold transition-colors",
                      light ? "text-white/85 hover:text-white" : menu === item.menu || isActive(item.href) ? "text-red" : "text-ink hover:text-red",
                    )}
                  >
                    {item.label}
                    <Icon name="chevronDown" size={15} className={cn("transition-transform duration-300", menu === item.menu && "rotate-180")} />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={l(item.href)}
                  onMouseEnter={() => setMenu(null)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn("relative px-3.5 py-2 text-[0.88rem] font-semibold transition-colors", light ? "text-white/85 hover:text-white" : isActive(item.href) ? "text-red" : "text-ink hover:text-red")}
                >
                  {item.label}
                  {isActive(item.href) && <span aria-hidden className="absolute inset-x-3.5 -bottom-0.5 h-0.5 bg-amber" />}
                </Link>
              ),
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden sm:block">
              <Button href={l("/devis")} size="sm" magnetic>
                {t.cta}
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={t.openMenu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className={cn("flex size-11 items-center justify-center rounded-[2px] lg:hidden", light ? "bg-white/15 text-white" : "bg-red text-white")}
            >
              <Icon name="menu" size={20} />
            </button>
          </div>

          <div id={panelId} onMouseEnter={() => window.clearTimeout(closeTimer.current)} className={cn("absolute inset-x-5 top-full hidden pt-2 sm:inset-x-8 lg:block", menu ? "pointer-events-auto" : "pointer-events-none")}>
            <div
              inert={!menu}
              className={cn(
                "overflow-hidden border border-line bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] transition-[opacity,transform] duration-500 ease-out-expo",
                menu ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
              )}
            >
              {menu === "group" && (
                <div className="grid grid-cols-[0.8fr_2fr]">
                  <div className="blueprint-dark flex flex-col justify-between bg-red p-8 text-white">
                    <p className="font-display text-2xl leading-tight font-extrabold tracking-[-0.03em] text-balance">{t.groupMenu.title}</p>
                    <p className="mt-6 text-sm text-white/75">{t.groupMenu.text}</p>
                  </div>
                  <ul className="grid grid-cols-3 gap-px bg-line">
                    {t.groupMenu.links.map((link, i) => (
                      <li key={link.href} className="bg-white">
                        <MegaLink href={l(link.href)} label={link.label} text={link.text} index={i + 1} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {menu === "entities" && (
                <div className="grid grid-cols-[1fr_1fr_1fr_0.85fr]">
                  {t.entitiesMenu.entities.map((e) => (
                    <div key={e.entity} className="border-r border-line p-6">
                      <Link href={l(e.href)} className="group/e flex items-center gap-3" data-cursor="link">
                        <EntityMark entity={e.entity} size={40} />
                        <span className="leading-tight">
                          <span className="block font-display text-lg font-extrabold tracking-[-0.02em] transition-colors group-hover/e:text-red">{entities[e.entity].name}</span>
                          <span className="font-mono text-[0.62rem] tracking-[0.12em] text-muted uppercase">{entities[e.entity].role}</span>
                        </span>
                      </Link>
                      <ul className="mt-5 space-y-1 border-t border-line pt-4">
                        {e.links.map((link) => (
                          <li key={link.label}>
                            <Link href={l(link.href)} className="group/l flex items-center justify-between py-1.5 text-[0.9rem] text-ink/80 hover:text-red">
                              <span className="link-draw">{link.label}</span>
                              <Icon name="arrow" size={14} className="-translate-x-2 opacity-0 transition-all duration-300 group-hover/l:translate-x-0 group-hover/l:opacity-100" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="flex flex-col justify-between bg-amber p-6 text-red-dark">
                    <div>
                      <p className="font-display text-2xl font-extrabold tracking-[-0.03em]">{t.entitiesMenu.side.title}</p>
                      <p className="mt-3 text-sm">{t.entitiesMenu.side.text}</p>
                    </div>
                    <Link href={l(t.entitiesMenu.side.cta.href)} className="mt-6 inline-flex items-center gap-2 self-start bg-red-dark px-4 py-2.5 text-sm font-semibold text-amber transition-transform hover:scale-[1.03]">
                      {t.entitiesMenu.side.cta.label} <Icon name="arrow" size={15} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} locale={locale} t={t} entities={entities} common={common} />
    </>
  )
}

function MegaLink({ href, label, text, index }: { href: string; label: string; text: string; index: number }) {
  return (
    <Link href={href} data-cursor="link" className="group/mega relative flex h-full flex-col gap-1.5 p-6 transition-colors duration-300 hover:bg-concrete">
      <span className="font-mono text-[0.65rem] font-semibold text-red">0{index}</span>
      <span className="flex items-center gap-2 font-display text-lg font-extrabold tracking-[-0.02em]">
        {label}
        <Icon name="arrow" size={16} className="-translate-x-2 opacity-0 transition-all duration-500 ease-out-expo group-hover/mega:translate-x-0 group-hover/mega:opacity-100" />
      </span>
      <span className="text-sm text-muted">{text}</span>
      <span aria-hidden className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 bg-amber transition-transform duration-500 ease-out-expo group-hover/mega:scale-x-100" />
    </Link>
  )
}
