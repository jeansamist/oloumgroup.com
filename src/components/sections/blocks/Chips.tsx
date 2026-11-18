import Icon, { type IconName } from "@/components/ui/Icon"
import Section, { Container, SectionHeading } from "@/components/ui/Section"

/** Sectors grid: icon tiles that flip to red on hover. */
export default function Chips({ eyebrow, title, lead, items }: { eyebrow?: string; title: string; lead?: string; items: { title: string; icon: IconName; text: string }[] }) {
  return (
    <Section tone="concrete" className="blueprint">
      <Container className="space-y-12">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <ul data-reveal="stagger" className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {items.map((s) => (
            <li key={s.title} className="group relative isolate bg-white p-6 transition-colors duration-500 hover:text-white sm:p-8">
              <span aria-hidden className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-red transition-transform duration-500 ease-out-expo group-hover:scale-y-100" />
              <Icon name={s.icon} size={30} className="text-red transition-colors duration-500 group-hover:text-amber" />
              <h3 className="mt-8 font-display text-lg font-extrabold tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-1 text-sm text-muted transition-colors duration-500 group-hover:text-white/75">{s.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
