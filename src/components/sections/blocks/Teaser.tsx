import Button from "@/components/ui/Button"
import Rich from "@/components/ui/Rich"
import { Container, Eyebrow } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Cta } from "@/i18n/types"
import { href as h } from "@/lib/routes"

/** Future factory teaser: a blueprint of the plant that draws itself, with key facts. */
export default function Teaser({ eyebrow, title, text, cta, facts, locale, soon }: { eyebrow: string; title: string; text: string; cta: Cta; facts: [string, string][]; locale: Locale; soon: string }) {
  return (
    <section className="on-dark grain blueprint-dark relative overflow-hidden bg-night py-24 text-white sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-7">
          <div data-reveal className="flex items-center gap-4">
            <Eyebrow>{eyebrow}</Eyebrow>
            {eyebrow !== soon && <span className="dashed-box px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.14em] text-amber uppercase">{soon}</span>}
          </div>
          <h2 data-split className="text-h1 text-balance">
            <Rich text={title} />
          </h2>
          <p data-reveal className="max-w-xl text-lead text-white/75">
            {text}
          </p>
          <dl data-reveal="stagger" className="grid gap-px bg-white/10 sm:grid-cols-3">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-night p-5">
                <dt className="font-mono text-[0.62rem] tracking-[0.12em] text-amber uppercase">{k}</dt>
                <dd className="mt-2 font-display font-extrabold">{v}</dd>
              </div>
            ))}
          </dl>
          <div data-reveal>
            <Button href={h(locale, cta.href)} magnetic>
              {cta.label}
            </Button>
          </div>
        </div>
        <div data-draw className="relative" aria-hidden>
          <svg viewBox="0 0 600 420" fill="none" className="w-full" stroke="#fcae42" strokeWidth="1.5">
            {/* Factory elevation: saw-tooth roof, chimney, doors, conveyors */}
            <path pathLength={1} className="draw-path" d="M40 360V200l90-60v60l90-60v60l90-60v60l90-60v220Z" />
            <path pathLength={1} className="draw-path" style={{ transitionDelay: ".3s" }} d="M450 360V90h40v270" />
            <path pathLength={1} className="draw-path" style={{ transitionDelay: ".5s" }} d="M70 360v-80h70v80M180 360v-60h50v60M260 300h120v40H260ZM20 360h560" />
            <path pathLength={1} className="draw-path" stroke="rgba(255,255,255,.4)" style={{ transitionDelay: ".8s" }} d="M500 360v-50h70v50M510 310l25-25 25 25" />
            <path pathLength={1} className="draw-path" stroke="rgba(255,255,255,.35)" strokeDasharray="4 6" style={{ transitionDelay: "1s" }} d="M40 395h410M40 388v14M450 388v14" />
            <path pathLength={1} className="draw-path" stroke="rgba(255,255,255,.35)" strokeDasharray="4 6" style={{ transitionDelay: "1.1s" }} d="M590 90v270M583 90h14M583 360h14" />
          </svg>
          <span className="absolute bottom-0 left-1/3 font-mono text-[0.6rem] tracking-[0.2em] text-white/40">8 000 m²</span>
          <span className="absolute top-6 right-2 font-mono text-[0.6rem] tracking-[0.2em] text-white/40">USINE · 2028</span>
        </div>
      </Container>
    </section>
  )
}
