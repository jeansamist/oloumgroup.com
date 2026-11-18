"use client"

import { useState } from "react"
import Icon from "@/components/ui/Icon"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import type { Faq as FaqItems } from "@/i18n/types"
import { cn } from "@/lib/utils"

export default function Faq({ eyebrow, title, items }: { eyebrow?: string; title: string; items: FaqItems }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <Section tone="concrete">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={eyebrow} title={title} className="lg:sticky lg:top-32 lg:self-start" />
        <ul data-reveal="stagger" className="border-t border-ink/80">
          {items.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <li key={q} className="border-b border-ink/15">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left font-display text-[1.12rem] font-extrabold tracking-[-0.02em] sm:text-xl"
                  >
                    <span className="transition-colors group-hover:text-red">{q}</span>
                    <span className={cn("flex size-10 shrink-0 items-center justify-center transition-[background-color,color,transform] duration-500 ease-out-expo", isOpen ? "rotate-45 bg-red text-amber" : "bg-white text-red")}>
                      <Icon name="plus" size={18} />
                    </span>
                  </button>
                </h3>
                <div className={cn("grid transition-[grid-template-rows] duration-500 ease-out-expo", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pr-14 pb-7 text-pretty text-muted">{a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
