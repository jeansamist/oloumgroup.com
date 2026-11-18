import Link from "next/link"
import EntityBadge from "@/components/ui/EntityBadge"
import Icon from "@/components/ui/Icon"
import Photo from "@/components/ui/Photo"
import Rich from "@/components/ui/Rich"
import { Container, Eyebrow } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { Cta } from "@/i18n/types"
import type { EntityKey } from "@/lib/entities"
import { href as h } from "@/lib/routes"
import type { ImageKey } from "@/lib/site"

/** Cross-link to a sister entity (buy ↔ rent), full-width image card. */
export default function Sister({ eyebrow, title, text, cta, image, entity, locale, entities }: { eyebrow: string; title: string; text: string; cta: Cta; image: ImageKey; entity: EntityKey; locale: Locale; entities: Dictionary["entities"] }) {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Link href={h(locale, cta.href)} data-cursor="view" className="group on-dark relative isolate flex min-h-[26rem] items-end overflow-hidden bg-night p-8 text-white sm:p-12">
          <div data-parallax="0.15" className="absolute inset-0 -z-10">
            <div data-parallax-inner className="absolute -inset-y-[10%] inset-x-0">
              <Photo image={image} alt="" sizes="100vw" className="size-full" imgClassName="transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-night via-night/80 to-night/10" />
          <div className="grid w-full gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div className="space-y-5">
              <div data-reveal className="flex flex-wrap items-center gap-5">
                <Eyebrow>{eyebrow}</Eyebrow>
                <EntityBadge entity={entity} name={entities[entity].name} role={entities[entity].role} light />
              </div>
              <h2 data-split className="text-h2 text-balance">
                <Rich text={title} />
              </h2>
              <p data-reveal className="max-w-xl text-white/75">
                {text}
              </p>
            </div>
            <span data-reveal className="flex items-center gap-3 justify-self-start font-semibold md:justify-self-end">
              {cta.label}
              <span className="flex size-14 items-center justify-center bg-amber text-red-dark transition-transform duration-500 ease-out-expo group-hover:rotate-45">
                <Icon name="arrowUpRight" size={20} />
              </span>
            </span>
          </div>
        </Link>
      </Container>
    </section>
  )
}
