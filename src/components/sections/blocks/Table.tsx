import Rich from "@/components/ui/Rich"
import Section, { Container, SectionHeading } from "@/components/ui/Section"

export default function Table({ eyebrow, title, lead, head, rows, note }: { eyebrow?: string; title: string; lead?: string; head: string[]; rows: string[][]; note?: string }) {
  return (
    <Section>
      <Container className="space-y-12">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <div data-reveal className="overflow-x-auto border border-line" data-lenis-prevent>
          <table className="w-full min-w-[42rem] border-collapse text-left text-[0.92rem]">
            <thead>
              <tr className="bg-red text-white">
                {head.map((c, i) => (
                  <th key={i} scope="col" className="px-5 py-4 font-mono text-[0.7rem] font-semibold tracking-[0.1em] uppercase">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, r) => (
                <tr key={r} className="border-t border-line transition-colors hover:bg-amber/15 even:bg-concrete">
                  {row.map((c, i) =>
                    i === 0 ? (
                      <th key={i} scope="row" className="px-5 py-4 font-display font-extrabold tracking-[-0.01em]">
                        {c}
                      </th>
                    ) : (
                      <td key={i} className="px-5 py-4 text-ink/80">
                        {c === "✓" ? <span className="inline-flex size-6 items-center justify-center bg-amber font-bold text-red-dark">✓</span> : c}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {note && (
          <p data-reveal className="text-sm text-muted italic">
            <Rich text={note} />
          </p>
        )}
      </Container>
    </Section>
  )
}
