import { Container } from "@/components/ui/Section"
import { cn } from "@/lib/utils"

/** Key figures that count up when visible. */
export default function Stats({ items, tone = "red", note }: { items: { value: string; label: string }[]; tone?: "red" | "ink"; note?: string }) {
  return (
    <section className={cn("on-dark grain blueprint-dark relative text-white", tone === "red" ? "bg-red" : "bg-night")}>
      <Container>
        <dl data-reveal="stagger" className="grid grid-cols-2 gap-px bg-white/15 lg:grid-cols-4">
          {items.map((s) => (
            <div key={s.label} className={cn("px-4 py-12 sm:px-8 sm:py-16", tone === "red" ? "bg-red" : "bg-night")}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="space-y-3">
                <span data-count className="block font-display text-[clamp(2.6rem,1.6rem+4vw,5rem)] leading-none font-extrabold tracking-[-0.05em] text-amber tabular-nums">
                  {s.value}
                </span>
                <span className="block max-w-[14rem] text-sm text-white/75">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        {note && <p className="pb-6 text-xs text-white/50">{note}</p>}
      </Container>
    </section>
  )
}
