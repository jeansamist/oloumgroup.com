import Link from "next/link"
import { TextLink } from "@/components/ui/Button"
import { EntityMark } from "@/components/ui/Logo"
import Photo from "@/components/ui/Photo"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { Article } from "@/i18n/types"
import { articlePath, href as h, routes } from "@/lib/routes"
import { cn } from "@/lib/utils"

export function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso))
}

export function ArticleCard({ a, locale, dict, large, row }: { a: Article; locale: Locale; dict: Dictionary; large?: boolean; row?: boolean }) {
  return (
    <Link href={h(locale, articlePath(a.slug))} className={cn("group flex h-full flex-col border border-line bg-white transition-colors hover:border-red", row && "sm:flex-row")} data-cursor="view">
      <div className={cn("relative", large ? "aspect-[16/10]" : "aspect-[16/11]", row && "sm:aspect-auto sm:w-2/5 sm:shrink-0")}>
        <Photo image={a.image} alt="" sizes="(min-width: 1024px) 40vw, 100vw" className="size-full" imgClassName="group-hover:scale-105" />
        <span className="absolute top-4 left-4 bg-amber px-2.5 py-1 font-mono text-[0.62rem] font-semibold tracking-[0.12em] text-red-dark uppercase">{a.category}</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <p className="flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.08em] text-muted uppercase">
          <EntityMark entity={a.entity} size={22} />
          {formatDate(a.date, locale)} · {a.readTime} {dict.common.minutes}
        </p>
        <h3 className={large ? "text-h2" : "text-h3"}>{a.title}</h3>
        <p className="text-sm text-muted">{a.excerpt}</p>
        <span className="mt-auto pt-3 text-sm font-semibold text-red">
          <span className="link-draw">{dict.common.readMore}</span> →
        </span>
      </div>
    </Link>
  )
}

export default function News({ eyebrow, title, lead, limit, locale, dict }: { eyebrow?: string; title?: string; lead?: string; limit?: number; locale: Locale; dict: Dictionary }) {
  const list = [...dict.articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit ?? dict.articles.length)
  const [first, ...rest] = list
  return (
    <Section tone={limit ? "default" : "concrete"}>
      <Container className="space-y-12">
        {title && (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
            {limit && (
              <div data-reveal>
                <TextLink href={h(locale, routes.news)}>{dict.common.allArticles}</TextLink>
              </div>
            )}
          </div>
        )}
        <ul data-reveal="stagger" className="grid gap-4 lg:grid-cols-2">
          <li className="lg:[grid-row:span_var(--rows)]" style={{ ["--rows" as string]: Math.max(1, rest.length) }}>
            <ArticleCard a={first} locale={locale} dict={dict} large />
          </li>
          {rest.map((a) => (
            <li key={a.slug}>
              <ArticleCard a={a} locale={locale} dict={dict} row />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
