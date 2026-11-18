import Photo from "@/components/ui/Photo"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import type { ImageKey } from "@/lib/site"

/** Technical sheet: label / value rows next to a sticky image, like a drawing's title block. */
export default function Specs({ eyebrow, title, lead, items, image, imageAlt }: { eyebrow?: string; title: string; lead?: string; items: [string, string][]; image: ImageKey; imageAlt: string }) {
  return (
    <Section tone="ink" className="blueprint-dark">
      <Container className="grid gap-14 lg:grid-cols-2">
        <div className="space-y-10">
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
          <dl data-reveal="stagger" className="border-t border-white/20">
            {items.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-white/10 py-4 sm:grid-cols-[11rem_1fr]">
                <dt className="font-mono text-[0.7rem] tracking-[0.12em] text-amber uppercase">{k}</dt>
                <dd className="text-white/85">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div data-reveal="clip" className="corners relative aspect-[4/5]" data-cursor="view">
            <Photo image={image} alt={imageAlt} sizes="(min-width: 1024px) 50vw, 100vw" className="size-full" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
