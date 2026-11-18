import Section, { Container } from "@/components/ui/Section"

export default function Legal({ sections, updated }: { sections: { title: string; text: string[] }[]; updated: string }) {
  return (
    <Section>
      <Container className="max-w-3xl space-y-12">
        <p className="font-mono text-xs tracking-[0.1em] text-muted uppercase">{updated}</p>
        {sections.map((s, i) => (
          <div key={s.title} data-reveal className="grid gap-4 border-t border-line pt-8 sm:grid-cols-[3rem_1fr]">
            <span className="font-mono text-sm font-semibold text-red">{String(i + 1).padStart(2, "0")}</span>
            <div className="space-y-3">
              <h2 className="text-h3">{s.title}</h2>
              {s.text.map((p) => (
                <p key={p} className="text-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  )
}
