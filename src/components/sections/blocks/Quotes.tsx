"use client"

import { useEffect, useState } from "react"
import Icon from "@/components/ui/Icon"
import Rich from "@/components/ui/Rich"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import { cn } from "@/lib/utils"

/** Testimonials slider: big quote, auto-advance (paused on hover), progress segments. */
export default function Quotes({ eyebrow, title, items, mockNote }: { eyebrow?: string; title: string; items: { quote: string; author: string; role: string }[]; mockNote: string }) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused || items.length < 2) return
    const t = window.setTimeout(() => setI((v) => (v + 1) % items.length), 7000)
    return () => window.clearTimeout(t)
  }, [i, paused, items.length])
  const q = items[i]

  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-6">
          <SectionHeading eyebrow={eyebrow} title={title} />
          <p className="font-mono text-[0.65rem] tracking-[0.1em] text-muted uppercase">{mockNote}</p>
        </div>
        <figure onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative border-l-4 border-amber bg-concrete p-8 sm:p-12" data-reveal>
          <span aria-hidden className="absolute -top-8 right-6 font-display text-[9rem] leading-none text-red/15">“</span>
          <blockquote key={i} className="animate-[fadeUp_.7s_var(--ease-out-expo)] font-display text-[clamp(1.4rem,1rem+1.5vw,2.2rem)] leading-tight font-bold tracking-[-0.03em] text-balance">
            <Rich text={q.quote} />
          </blockquote>
          <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-semibold">{q.author}</p>
              <p className="text-sm text-muted">{q.role}</p>
            </div>
            <div className="flex items-center gap-2">
              {items.map((_, k) => (
                <button key={k} type="button" aria-label={`${k + 1} / ${items.length}`} onClick={() => setI(k)} className="h-1.5 w-8 overflow-hidden bg-ink/15">
                  <span className={cn("block h-full bg-red", k === i ? (paused ? "w-full" : "w-full animate-[grow_7s_linear]") : k < i ? "w-full" : "w-0")} />
                </button>
              ))}
              <button type="button" aria-label="→" onClick={() => setI((i + 1) % items.length)} className="ml-2 flex size-10 items-center justify-center bg-red text-amber">
                <Icon name="arrow" size={16} />
              </button>
            </div>
          </figcaption>
        </figure>
      </Container>
    </Section>
  )
}
