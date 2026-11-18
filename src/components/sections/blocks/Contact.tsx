"use client"

import { useEffect, useState, type FormEvent } from "react"
import Button from "@/components/ui/Button"
import EntityBadge from "@/components/ui/EntityBadge"
import Icon, { type IconName } from "@/components/ui/Icon"
import { EntityMark } from "@/components/ui/Logo"
import Section, { Container } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { EntityKey } from "@/lib/entities"
import { formToText, openMail, openWhatsapp, recipientFor } from "@/lib/forms"
import { href as h } from "@/lib/routes"
import { group } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Input, Textarea } from "./Field"

/** Need selector (routes the request to an entity) + form + contact cards + map. */
export default function Contact({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const f = dict.forms
  const [need, setNeed] = useState(f.needs[0].key)
  const [subject, setSubject] = useState("")
  const [sent, setSent] = useState(false)
  const current = f.needs.find((n) => n.key === need) ?? f.needs[0]
  const entity = current.entity as EntityKey

  // Pre-select from the URL (?besoin=job&sujet=...), e.g. links from the careers page.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const b = q.get("besoin")
    if (b && f.needs.some((n) => n.key === b)) setNeed(b)
    const s = q.get("sujet")
    if (s) setSubject(s)
  }, [f.needs])

  const collect = (form: HTMLFormElement) => {
    const d = new FormData(form)
    const get = (k: string) => String(d.get(k) ?? "")
    return formToText([
      [f.needLabel, current.label],
      [f.name, get("name")],
      [f.company, get("company")],
      [f.phone, get("phone")],
      [f.email, get("email")],
      [f.city, get("city")],
      [f.message, get("message")],
    ])
  }
  const title = `${f.subjectPrefix} — ${current.label}${subject ? ` — ${subject}` : ""}`
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    openMail(recipientFor(entity), title, collect(e.currentTarget))
    setSent(true)
  }
  const whatsapp = (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form!
    if (!form.reportValidity()) return
    openWhatsapp(`${title}\n\n${collect(form)}`)
    setSent(true)
  }

  return (
    <>
      <Section className="blueprint">
        <Container className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          <form onSubmit={submit} className="space-y-10 border border-line bg-white p-6 sm:p-10" data-reveal>
            <fieldset className="space-y-4">
              <legend className="font-display text-2xl font-extrabold tracking-[-0.03em]">{f.needLabel}</legend>
              <div className="flex flex-wrap gap-2 pt-2">
                {f.needs.map((n) => (
                  <button
                    key={n.key}
                    type="button"
                    aria-pressed={need === n.key}
                    onClick={() => setNeed(n.key)}
                    className={cn("flex items-center gap-2 border px-3.5 py-2 text-sm font-medium transition-colors duration-300", need === n.key ? "border-red bg-red text-white" : "border-line hover:border-ink")}
                  >
                    <EntityMark entity={n.entity as EntityKey} size={20} className={need === n.key ? "text-white" : "text-ink"} />
                    {n.label}
                  </button>
                ))}
              </div>
              <p className="flex flex-wrap items-center gap-3 bg-concrete p-4 text-sm">
                <span className="text-muted">{f.routedTo}</span>
                <EntityBadge key={entity} entity={entity} name={dict.entities[entity].name} role={dict.entities[entity].role} className="animate-[fadeUp_.5s_var(--ease-out-expo)]" />
              </p>
            </fieldset>

            {sent ? (
              <p role="status" className="flex items-start gap-3 border-l-4 border-amber bg-concrete p-5">
                <Icon name="check" size={20} className="mt-0.5 text-red" /> {f.success}
              </p>
            ) : (
              <>
                <div className="grid gap-8 sm:grid-cols-2">
                  <Input label={f.name} name="name" autoComplete="name" required />
                  <Input label={f.company} name="company" autoComplete="organization" />
                  <Input label={f.phone} name="phone" type="tel" autoComplete="tel" required />
                  <Input label={f.email} name="email" type="email" autoComplete="email" />
                  <Input label={f.city} name="city" className="sm:col-span-2" />
                  <Textarea label={f.message} name="message" placeholder={f.messagePlaceholder} required className="sm:col-span-2" defaultValue={subject ? `${subject}\n\n` : undefined} key={subject} />
                </div>
                <label className="flex items-start gap-3 text-sm text-muted">
                  <input type="checkbox" required className="mt-1 size-4 accent-red" />
                  {f.consent}
                </label>
                <div className="flex flex-wrap gap-3">
                  <Button type="submit" variant="red" icon="mail">
                    {f.submitEmail}
                  </Button>
                  <Button type="button" onClick={whatsapp} variant="outline" icon="whatsapp">
                    {f.submitWhatsapp}
                  </Button>
                </div>
              </>
            )}
          </form>

          <aside className="space-y-4">
            <ul data-reveal="stagger" className="grid gap-3">
              {f.contactCards.map((c) => (
                <li key={c.title}>
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-start gap-4 border border-line bg-white p-5 transition-colors hover:border-red">
                    <span className="flex size-11 shrink-0 items-center justify-center bg-red text-amber transition-colors group-hover:bg-amber group-hover:text-red-dark">
                      <Icon name={c.icon as IconName} size={20} />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display font-extrabold">{c.title}</span>
                      {c.lines.map((line) => (
                        <span key={line} className="block text-sm text-muted">
                          {line}
                        </span>
                      ))}
                    </span>
                    <span className="self-center font-mono text-[0.62rem] tracking-[0.12em] text-red uppercase">{c.action} →</span>
                  </a>
                </li>
              ))}
            </ul>
            <div data-reveal className="space-y-3 border border-line bg-white p-5">
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-red uppercase">{f.directory.title}</p>
              <ul className="divide-y divide-line">
                {f.directory.items.map((d) => (
                  <li key={d.entity} className="flex items-center gap-3 py-3 text-sm">
                    <EntityMark entity={d.entity as EntityKey} size={30} className="text-ink" />
                    <span className="flex-1">
                      <span className="block font-semibold">{dict.entities[d.entity as EntityKey].name}</span>
                      <span className="text-muted">
                        {d.phone} · {d.email}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <a data-reveal href={h(locale, f.quoteLink.href)} className="flex items-center justify-between gap-3 bg-amber p-5 font-semibold text-red-dark">
              {f.quoteLink.label} <Icon name="arrow" size={18} />
            </a>
          </aside>
        </Container>
      </Section>
      <section aria-label={f.mapTitle} className="relative h-[26rem] bg-concrete">
        <iframe title={f.mapTitle} src={group.mapsEmbed} loading="lazy" className="size-full border-0 grayscale-[.6] contrast-[1.05]" referrerPolicy="no-referrer-when-downgrade" />
        <div className="on-dark pointer-events-none absolute top-6 left-5 bg-red p-5 text-white sm:left-8">
          <p className="font-display text-lg font-extrabold">Oloum Group</p>
          <p className="text-sm text-white/80">{dict.footer.address}</p>
        </div>
      </section>
    </>
  )
}
