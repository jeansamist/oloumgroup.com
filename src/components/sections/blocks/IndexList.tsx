import Rich from "@/components/ui/Rich"
import Section, { Container, SectionHeading } from "@/components/ui/Section"

/** Numbered index (01–15): each row fills with red and reveals its tags on hover. */
export default function IndexList({ eyebrow, title, lead, items, note }: { eyebrow?: string; title: string; lead?: string; items: { title: string; text: string; tags?: string[] }[]; note?: string }) {
  return (
    <Section>
      <Container className="space-y-12">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <ol data-reveal="stagger" className="border-t border-ink">
          {items.map((item, i) => (
            <li key={item.title} className="group relative isolate border-b border-line">
              <span aria-hidden className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-red transition-transform duration-500 ease-out-expo group-hover:scale-y-100" />
              <div className="grid gap-3 px-2 py-6 transition-colors duration-300 group-hover:text-white sm:grid-cols-[4rem_1fr_1.2fr_auto] sm:items-center sm:gap-6 sm:px-4">
                <span className="font-mono text-sm font-semibold text-red transition-colors group-hover:text-amber">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[clamp(1.25rem,1rem+1vw,1.9rem)] font-extrabold tracking-[-0.03em] transition-transform duration-500 ease-out-expo group-hover:translate-x-2">{item.title}</h3>
                <p className="text-[0.95rem] text-muted transition-colors group-hover:text-white/80">{item.text}</p>
                {item.tags && (
                  <ul className="flex flex-wrap gap-1.5 sm:justify-end">
                    {item.tags.map((t) => (
                      <li key={t} className="border border-ink/15 px-2 py-0.5 font-mono text-[0.62rem] tracking-[0.08em] uppercase transition-colors group-hover:border-amber group-hover:bg-amber group-hover:text-red-dark">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        {note && (
          <p data-reveal className="text-sm text-muted italic">
            <Rich text={note} />
          </p>
        )}
      </Container>
    </Section>
  )
}
