import Rich from "@/components/ui/Rich"
import Section, { Container, Eyebrow } from "@/components/ui/Section"

/** Large paragraph whose words light up one by one while scrolling. */
export default function Intro({ eyebrow, title, text, sub }: { eyebrow?: string; title?: string; text: string; sub?: string }) {
  return (
    <Section className="blueprint">
      <Container className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
        <div>{eyebrow && <div data-reveal><Eyebrow>{eyebrow}</Eyebrow></div>}</div>
        <div className="space-y-8">
          {title && (
            <h2 data-split className="text-h2">
              <Rich text={title} />
            </h2>
          )}
          <p data-words className="font-display text-[clamp(1.5rem,1rem+2vw,2.7rem)] leading-[1.18] font-bold tracking-[-0.03em] text-pretty">
            {text}
          </p>
          {sub && (
            <p data-reveal className="max-w-2xl border-l-2 border-amber pl-5 text-lead text-muted">
              {sub}
            </p>
          )}
        </div>
      </Container>
    </Section>
  )
}
