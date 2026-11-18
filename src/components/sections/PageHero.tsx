import Link from "next/link"
import Button from "@/components/ui/Button"
import EntityBadge from "@/components/ui/EntityBadge"
import Icon from "@/components/ui/Icon"
import Photo from "@/components/ui/Photo"
import Rich from "@/components/ui/Rich"
import { Container } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { PageHero as Hero } from "@/i18n/types"
import { href as h } from "@/lib/routes"

/** Dark photo hero of every inner page: breadcrumb, entity badge, title, text, CTAs. */
export default function PageHero({ hero, crumbs, locale, dict }: { hero: Hero; crumbs: { name: string; path: string }[]; locale: Locale; dict: Dictionary }) {
  const entity = hero.entity && hero.entity !== "group" ? dict.entities[hero.entity] : null
  return (
    <section className="on-dark relative flex min-h-[78svh] items-end overflow-hidden bg-night pt-36 pb-16 text-white sm:pb-20">
      <div data-parallax="0.18" className="absolute inset-0">
        <div data-parallax-inner className="absolute -inset-y-[12%] inset-x-0">
          <Photo image={hero.image} alt={hero.imageAlt} priority fx={false} className="size-full" imgClassName="animate-ken-burns" />
        </div>
      </div>
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-night via-night/70 to-night/30" />
      <div aria-hidden className="blueprint-dark absolute inset-0 [mask-image:linear-gradient(to_right,black,transparent_75%)]" />
      <Container className="relative">
        <nav aria-label={dict.common.breadcrumb} data-reveal className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] tracking-[0.12em] text-white/60 uppercase">
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                {i > 0 && <Icon name="chevron" size={12} />}
                {i < crumbs.length - 1 ? (
                  <Link href={h(locale, c.path)} className="hover:text-amber">
                    {c.name}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-amber">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-4xl space-y-7">
          <div data-reveal className="flex flex-wrap items-center gap-4">
            {entity && hero.entity ? (
              <EntityBadge entity={hero.entity} name={entity.name} role={entity.role} light />
            ) : (
              <p className="eyebrow">{hero.eyebrow}</p>
            )}
            {entity && hero.badge && hero.badge !== entity.role && <span className="bg-amber px-2.5 py-1 font-mono text-[0.62rem] font-semibold tracking-[0.14em] text-red-dark uppercase">{hero.badge}</span>}
          </div>
          <h1 data-split className="text-h1 text-balance">
            <Rich text={hero.title} />
          </h1>
          <p data-reveal className="max-w-2xl text-lead text-pretty text-white/80">
            {hero.text}
          </p>
          {hero.ctas && (
            <div data-reveal className="flex flex-wrap gap-3 pt-2">
              {hero.ctas.map((c) => (
                <Button key={c.label} href={h(locale, c.href)} variant={c.variant ?? "primary"} magnetic={!c.variant}>
                  {c.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
