"use client"

import { useRef, useState } from "react"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import Section, { Container } from "@/components/ui/Section"
import type { Dictionary } from "@/i18n/get-dictionary"
import { formToText, openMail, openWhatsapp } from "@/lib/forms"
import { gsap, prefersReducedMotion } from "@/lib/motion"
import { group } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Choices, Input, Select, Textarea } from "./Field"

/** Three-step quote request with a live summary. */
export default function Quote({ dict }: { dict: Dictionary }) {
  const f = dict.forms
  const q = f.quote
  const [step, setStep] = useState(0)
  const [sent, setSent] = useState(false)
  const [data, setData] = useState({ type: q.types[0], model: q.models[2], finish: q.finishes[2], size: "", duration: "", deadline: "", budget: "", city: "", name: "", company: "", phone: "", email: "", message: "" })
  const panel = useRef<HTMLDivElement>(null)
  const set = (k: keyof typeof data) => (v: string) => setData((d) => ({ ...d, [k]: v }))
  const on = (k: keyof typeof data) => (e: { target: { value: string } }) => set(k)(e.target.value)

  const go = (n: number) => {
    if (n > step && panel.current) {
      const invalid = panel.current.querySelector<HTMLInputElement>(":invalid")
      if (invalid) return invalid.reportValidity()
    }
    if (prefersReducedMotion() || !panel.current) return setStep(n)
    const dir = n > step ? 1 : -1
    gsap.to(panel.current, {
      x: -40 * dir,
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        setStep(n)
        requestAnimationFrame(() => gsap.fromTo(panel.current, { x: 40 * dir, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "expo.out" }))
      },
    })
  }

  const summary: [string, string][] = [
    [q.type, data.type],
    [q.model, data.model],
    [q.finish, data.finish],
    [q.size, data.size],
    [q.duration, data.duration],
    [q.deadline, data.deadline],
    [q.budget, data.budget],
    [f.city, data.city],
    [f.name, data.name],
    [f.company, data.company],
    [f.phone, data.phone],
    [f.email, data.email],
    [f.message, data.message],
  ]
  const subject = `${f.subjectPrefix} — ${q.submit} — ${data.type} (${data.model})`
  const send = (via: "mail" | "wa") => {
    const invalid = panel.current?.querySelector<HTMLInputElement>(":invalid")
    if (invalid) return invalid.reportValidity()
    const body = formToText(summary)
    if (via === "mail") openMail(group.email, subject, body)
    else openWhatsapp(`${subject}\n\n${body}`)
    setSent(true)
  }

  return (
    <Section className="blueprint">
      <Container className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="border border-line bg-white">
          <ol className="grid grid-cols-3 border-b border-line">
            {q.steps.map((s, i) => (
              <li key={s}>
                <button type="button" onClick={() => i < step && go(i)} className={cn("relative flex w-full flex-col gap-1 p-4 text-left sm:p-6", i <= step ? "text-ink" : "text-ink/40")} aria-current={i === step ? "step" : undefined}>
                  <span className="font-mono text-[0.65rem] font-semibold text-red">0{i + 1}</span>
                  <span className="font-display text-sm font-extrabold sm:text-base">{s}</span>
                  <span aria-hidden className={cn("absolute inset-x-0 bottom-0 h-[3px] origin-left bg-amber transition-transform duration-700 ease-out-expo", i <= step ? "scale-x-100" : "scale-x-0")} />
                </button>
              </li>
            ))}
          </ol>
          <div className="overflow-hidden p-6 sm:p-10">
            {sent ? (
              <p role="status" className="flex items-start gap-3 border-l-4 border-amber bg-concrete p-5">
                <Icon name="check" size={20} className="mt-0.5 text-red" /> {f.success}
              </p>
            ) : (
              <div ref={panel} className="space-y-8">
                {step === 0 && (
                  <>
                    <Select label={q.type} value={data.type} onChange={on("type")}>
                      {q.types.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </Select>
                    <Choices label={q.model} options={q.models} value={data.model} onChange={set("model")} />
                    <Choices label={q.finish} options={q.finishes} value={data.finish} onChange={set("finish")} />
                  </>
                )}
                {step === 1 && (
                  <div className="grid gap-8 sm:grid-cols-2">
                    <Input label={q.size} placeholder={q.sizePlaceholder} value={data.size} onChange={on("size")} required />
                    <Input label={f.city} value={data.city} onChange={on("city")} required />
                    <Input label={q.duration} placeholder={q.durationPlaceholder} value={data.duration} onChange={on("duration")} />
                    <Input label={q.deadline} type="month" value={data.deadline} onChange={on("deadline")} placeholder=" " />
                    <Input label={q.budget} value={data.budget} onChange={on("budget")} className="sm:col-span-2" />
                  </div>
                )}
                {step === 2 && (
                  <div className="grid gap-8 sm:grid-cols-2">
                    <Input label={f.name} autoComplete="name" value={data.name} onChange={on("name")} required />
                    <Input label={f.company} autoComplete="organization" value={data.company} onChange={on("company")} />
                    <Input label={f.phone} type="tel" autoComplete="tel" value={data.phone} onChange={on("phone")} required />
                    <Input label={f.email} type="email" autoComplete="email" value={data.email} onChange={on("email")} />
                    <Textarea label={f.message} placeholder={f.messagePlaceholder} value={data.message} onChange={on("message")} className="sm:col-span-2" />
                    <label className="flex items-start gap-3 text-sm text-muted sm:col-span-2">
                      <input type="checkbox" required className="mt-1 size-4 accent-red" />
                      {f.consent}
                    </label>
                  </div>
                )}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
                  {step > 0 ? (
                    <button type="button" onClick={() => go(step - 1)} className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink">
                      <Icon name="arrow" size={16} className="rotate-180" /> {q.back}
                    </button>
                  ) : (
                    <span />
                  )}
                  {step < 2 ? (
                    <Button type="button" onClick={() => go(step + 1)} variant="red" icon="arrow">
                      {q.next}
                    </Button>
                  ) : (
                    <div className="flex flex-wrap gap-3">
                      <Button type="button" onClick={() => send("mail")} variant="red" icon="mail">
                        {q.submit}
                      </Button>
                      <Button type="button" onClick={() => send("wa")} variant="outline" icon="whatsapp">
                        {f.submitWhatsapp}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <aside className="on-dark h-fit bg-night p-7 text-white lg:sticky lg:top-28">
          <p className="eyebrow">{q.summary}</p>
          <dl className="mt-6 divide-y divide-white/10">
            {summary
              .filter(([, v]) => v)
              .map(([k, v]) => (
                <div key={k} className="grid grid-cols-[8rem_1fr] gap-3 py-2.5 text-sm">
                  <dt className="text-white/50">{k}</dt>
                  <dd className="break-words">{v}</dd>
                </div>
              ))}
          </dl>
        </aside>
      </Container>
    </Section>
  )
}
