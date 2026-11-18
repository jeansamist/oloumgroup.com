import Link from "next/link"
import Icon from "@/components/ui/Icon"
import Logo from "@/components/ui/Logo"
import Marquee from "@/components/ui/Marquee"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { href as h } from "@/lib/routes"
import { group } from "@/lib/site"
import { BackToTop, NewsletterForm, Wordmark } from "./FooterParts"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const f = dict.footer
  const l = (p: string) => h(locale, p)
  const year = 2026

  return (
    <footer className="on-dark grain relative overflow-hidden bg-night text-white">
      <div className="border-y border-white/10 bg-amber py-5 text-red-dark">
        <Marquee
          items={[...f.marquee, ...f.marquee, ...f.marquee].map((w, i) => (
            <span key={i} className="font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              {w}
            </span>
          ))}
          duration={28}
          label={dict.meta.signature}
        />
      </div>

      <div className="blueprint-dark">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_2fr]">
          <div className="space-y-7">
            <Logo light />
            <p className="max-w-sm text-pretty text-white/70">{f.description}</p>
            <address className="space-y-3 text-sm">
              <p className="font-mono text-[0.68rem] tracking-[0.18em] text-amber uppercase">{f.contactTitle}</p>
              <a href={group.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-white/85 hover:text-white">
                <Icon name="map" size={18} className="mt-0.5 text-amber" /> {f.address}
              </a>
              <a href={`tel:${group.phone}`} className="flex gap-3 text-white/85 hover:text-white">
                <Icon name="phone" size={18} className="text-amber" /> {group.phoneDisplay}
              </a>
              <a href={`mailto:${group.email}`} className="flex gap-3 text-white/85 hover:text-white">
                <Icon name="mail" size={18} className="text-amber" /> {group.email}
              </a>
              <p className="flex gap-3 text-white/60">
                <Icon name="clock" size={18} className="text-amber" />
                <span>
                  {f.hours[0]}
                  <br />
                  {f.hours[1]}
                </span>
              </p>
            </address>
          </div>

          <div className="space-y-14">
            <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4">
              {f.columns.map((col) => (
                <div key={col.title} className="space-y-4">
                  <h3 className="font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-amber uppercase">{col.title}</h3>
                  <ul className="space-y-2.5 text-[0.92rem]">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link href={l(link.href)} className="link-draw text-white/80 hover:text-white">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
            <div className="grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 sm:items-end">
              <div className="space-y-2">
                <p className="font-display text-xl font-extrabold">{f.newsletter.title}</p>
                <p className="text-sm text-white/65">{f.newsletter.text}</p>
              </div>
              <NewsletterForm placeholder={f.newsletter.placeholder} button={f.newsletter.button} success={f.newsletter.success} />
            </div>
          </div>
        </div>

        <div className="overflow-hidden px-3 pb-4 text-white/90">
          <Wordmark text={f.wordmark} />
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 border-t border-white/10 px-5 py-7 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} Oloum Group. {f.rights} · {f.madeIn}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          {f.legal.map((link) => (
            <Link key={link.href} href={l(link.href)} className="link-draw hover:text-white">
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher current={locale} label={dict.common.language} light />
        </div>
      </div>
      <BackToTop label={dict.common.backToTop} />
    </footer>
  )
}
