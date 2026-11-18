import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import CtaBand from "@/components/layout/CtaBand"
import { ArticleCard, formatDate } from "@/components/sections/blocks/News"
import PageHero from "@/components/sections/PageHero"
import { crumbsFor } from "@/components/sections/PageView"
import Icon from "@/components/ui/Icon"
import JsonLd from "@/components/ui/JsonLd"
import Section, { Container } from "@/components/ui/Section"
import { hasLocale, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { articlePath, articleSlugs, href as h, localizePath, routes } from "@/lib/routes"
import { buildMetadata } from "@/lib/seo"
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data"

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return locales.flatMap((locale) => articleSlugs.map((slug) => ({ locale, slug })))
}

async function load(params: Props["params"]) {
  const { locale, slug } = await params
  if (!hasLocale(locale)) notFound()
  const dict = getDictionary(locale)
  const article = dict.articles.find((a) => a.slug === slug)
  if (!article) notFound()
  return { locale, dict, article }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, article } = await load(params)
  return buildMetadata({ locale, path: articlePath(article.slug), title: article.title, description: article.excerpt })
}

export default async function ArticlePage({ params }: Props) {
  const { locale, dict, article } = await load(params)
  const crumbs = [...crumbsFor("news", dict), { name: article.title, path: articlePath(article.slug) }]
  const related = dict.articles.filter((a) => a.slug !== article.slug).slice(0, 2)
  const path = localizePath(locale, articlePath(article.slug))

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ title: article.title, excerpt: article.excerpt, date: article.date, path, locale }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: localizePath(locale, c.path) }))),
        ]}
      />
      <PageHero
        hero={{ eyebrow: `${article.category} · ${formatDate(article.date, locale)}`, title: article.title, text: article.excerpt, image: article.image, imageAlt: article.title, entity: article.entity }}
        crumbs={crumbs}
        locale={locale}
        dict={dict}
      />
      <Section>
        <Container className="grid gap-14 lg:grid-cols-[1fr_18rem]">
          <article className="max-w-3xl space-y-8">
            <p className="font-mono text-xs tracking-[0.1em] text-muted uppercase">
              {formatDate(article.date, locale)} · {article.readTime} {dict.common.minutes}
            </p>
            {article.body.map((b, i) => (
              <div key={i} data-reveal className="space-y-3">
                {b.heading && <h2 className="text-h3">{b.heading}</h2>}
                <p className={i === 0 ? "text-lead" : "text-ink/80"}>{b.text}</p>
              </div>
            ))}
            <p className="border-t border-line pt-6 font-mono text-[0.65rem] tracking-[0.1em] text-muted uppercase">{dict.common.mockNote}</p>
            <Link href={h(locale, routes.news)} className="inline-flex items-center gap-2 font-semibold text-red">
              <Icon name="arrow" size={16} className="rotate-180" /> {dict.news.back}
            </Link>
          </article>
          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">{dict.news.related}</p>
            {related.map((a) => (
              <ArticleCard key={a.slug} a={a} locale={locale} dict={dict} />
            ))}
          </aside>
        </Container>
      </Section>
      <CtaBand locale={locale} t={dict.cta} />
    </>
  )
}
