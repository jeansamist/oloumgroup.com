import type { Metadata, Viewport } from "next"
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import type { ReactNode } from "react"
import Cursor from "@/components/layout/Cursor"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Loader from "@/components/layout/Loader"
import ScrollProgress from "@/components/layout/ScrollProgress"
import MotionDirector from "@/components/motion/MotionDirector"
import PageTransition from "@/components/motion/PageTransition"
import SmoothScroll from "@/components/motion/SmoothScroll"
import JsonLd from "@/components/ui/JsonLd"
import { htmlLang, locales, type LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { bootScript } from "@/lib/boot-scripts"
import { articlePath, routes, type PageKey } from "@/lib/routes"
import { languageAlternates } from "@/lib/seo"
import { siteUrl } from "@/lib/site"
import { organizationSchema, websiteSchema } from "@/lib/structured-data"
import "../globals.css"

// Archivo is variable (weight + width): the footer wordmark animates both axes.
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", axes: ["wdth"], display: "swap" })
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-sans", display: "swap" })
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-plex-mono", display: "swap" })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  themeColor: "#920f15",
  width: "device-width",
  initialScale: 1,
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.meta.defaultTitle, template: `%s | Oloum Group` },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: "Oloum Group",
    authors: [{ name: "Oloum Group" }],
    creator: "Oloum Group",
    publisher: "Oloum Group",
    category: "construction",
    alternates: { languages: languageAlternates("/") },
    formatDetection: { telephone: true, email: true, address: true },
  }
}

export default async function LocaleLayout({ children, params }: LocaleParams & { children: ReactNode }) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  // Page names shown by the page transition curtain.
  const names: Record<string, string> = { "/": dict.home.name }
  for (const key of Object.keys(dict.pages) as PageKey[]) names[routes[key]] = dict.pages[key].name
  for (const a of dict.articles) names[articlePath(a.slug)] = dict.pages.news.name

  return (
    <html lang={htmlLang[locale]} className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <noscript>
          <style>{`[role=status].fixed{display:none!important}html.js-motion [data-reveal],html.js-motion [data-hero]{opacity:1}html.js-motion [data-split]{visibility:visible}`}</style>
        </noscript>
        <JsonLd data={[organizationSchema(locale, dict.meta.description), websiteSchema(locale)]} />
      </head>
      <body className="min-h-svh font-sans">
        <a href="#main" className="skip-link">
          {dict.common.skipToContent}
        </a>
        <Loader label={dict.common.loader} signature={dict.meta.signature} />
        <ScrollProgress />
        <Header locale={locale} t={dict.header} entities={dict.entities} common={dict.common} />
        <PageTransition names={names}>
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer locale={locale} dict={dict} />
        </PageTransition>
        <Cursor view={dict.common.cursorView} drag={dict.common.cursorDrag} />
        <SmoothScroll />
        <MotionDirector />
      </body>
    </html>
  )
}
