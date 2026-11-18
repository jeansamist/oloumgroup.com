import Link from "next/link"
import Button from "@/components/ui/Button"
import { EntityMark } from "@/components/ui/Logo"
import Icon from "@/components/ui/Icon"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { Cta } from "@/i18n/types"
import type { EntityKey } from "@/lib/entities"
import { href as h, routes } from "@/lib/routes"

export default function Jobs({
  eyebrow,
  title,
  items,
  apply,
  spontaneous,
  locale,
  entities,
}: {
  eyebrow?: string
  title: string
  items: { title: string; entity: EntityKey; place: string; contract: string; text: string }[]
  apply: string
  spontaneous: Cta
  locale: Locale
  entities: Dictionary["entities"]
}) {
  return (
    <Section tone="concrete">
      <Container className="space-y-12">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul data-reveal="stagger" className="space-y-3">
          {items.map((job) => (
            <li key={job.title}>
              <Link
                href={`${h(locale, routes.contact)}?besoin=job&sujet=${encodeURIComponent(job.title)}`}
                className="group grid gap-4 border border-line bg-white p-6 transition-colors duration-300 hover:border-red sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:p-7"
              >
                <EntityMark entity={job.entity} size={46} />
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[0.65rem] tracking-[0.1em] uppercase">
                    <span className="text-red">{entities[job.entity].name}</span>
                    <span className="text-muted">· {job.place}</span>
                    <span className="bg-amber px-2 py-0.5 text-red-dark">{job.contract}</span>
                  </div>
                  <h3 className="text-h3 transition-colors group-hover:text-red">{job.title}</h3>
                  <p className="text-sm text-muted">{job.text}</p>
                </div>
                <span className="flex items-center gap-2 text-sm font-semibold text-red">
                  {apply}
                  <span className="flex size-10 items-center justify-center bg-red text-amber transition-transform duration-500 ease-out-expo group-hover:rotate-45">
                    <Icon name="arrowUpRight" size={16} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div data-reveal>
          <Button href={`${h(locale, spontaneous.href)}?besoin=job`} variant="outline">
            {spontaneous.label}
          </Button>
        </div>
      </Container>
    </Section>
  )
}
