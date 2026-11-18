import { EntityMark } from "@/components/ui/Logo"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import TiltCard from "@/components/ui/TiltCard"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { EntityKey } from "@/lib/entities"

/** Leadership cards with monogram placeholders until photos arrive. */
export default function People({ eyebrow, title, lead, items, entities, mockNote }: { eyebrow?: string; title: string; lead?: string; items: { name: string; role: string; entity: EntityKey; bio: string }[]; entities: Dictionary["entities"]; mockNote: string }) {
  return (
    <Section>
      <Container className="space-y-14">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead}>
          <p className="font-mono text-[0.65rem] tracking-[0.1em] text-muted uppercase">{mockNote}</p>
        </SectionHeading>
        <ul data-reveal="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => {
            const initials = p.name
              .split(/\s+/)
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()
            return (
              <TiltCard as="li" key={p.name + p.role} className="flex flex-col">
                <div className="blueprint relative flex aspect-[4/3] items-center justify-center bg-concrete">
                  <span className="font-display text-7xl font-extrabold tracking-[-0.06em] text-red/20 transition-colors duration-500 group-hover:text-red">{initials}</span>
                  <span className="absolute top-4 left-4">
                    <EntityMark entity={p.entity} size={34} />
                  </span>
                </div>
                <div className="space-y-2 p-7">
                  <p className="font-mono text-[0.65rem] tracking-[0.12em] text-red uppercase">{entities[p.entity].name}</p>
                  <h3 className="text-h3">{p.name}</h3>
                  <p className="font-semibold">{p.role}</p>
                  <p className="text-sm text-muted">{p.bio}</p>
                </div>
              </TiltCard>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
