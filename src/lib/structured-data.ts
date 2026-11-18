import type { Locale } from "@/i18n/config"
import type { Faq } from "@/i18n/types"
import { localizePath, routes } from "./routes"
import { absoluteUrl } from "./seo"
import { companies, group, siteUrl } from "./site"

const groupId = `${siteUrl}/#organization`

export function organizationSchema(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": groupId,
    name: group.name,
    description,
    url: absoluteUrl(localizePath(locale, "/")),
    logo: absoluteUrl("/icon.svg"),
    telephone: group.phone,
    email: group.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${group.street}, ${group.district}`,
      addressLocality: group.city,
      postOfficeBoxNumber: group.postalBox,
      addressCountry: group.country,
    },
    areaServed: [{ "@type": "Country", name: "Cameroon" }, "Central Africa"],
    subOrganization: [
      {
        "@type": "HomeAndConstructionBusiness",
        name: companies.yo.name,
        foundingDate: String(companies.yo.foundingYear),
        email: companies.yo.email,
        telephone: companies.yo.phone,
        url: absoluteUrl(localizePath(locale, routes.yo)),
        address: { "@type": "PostalAddress", streetAddress: `${group.street}, ${group.district}`, addressLocality: group.city, addressCountry: group.country },
      },
      {
        "@type": "LocalBusiness",
        name: companies.bella.name,
        description: "Location de bâtiments préfabriqués",
        url: absoluteUrl(localizePath(locale, routes.bella)),
      },
    ],
    sameAs: [group.whatsapp],
  }
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: absoluteUrl(localizePath(locale, "/")),
    name: group.name,
    inLanguage: locale,
    publisher: { "@id": groupId },
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absoluteUrl(item.path) })),
  }
}

export function faqSchema(items: Faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  }
}

export function articleSchema(a: { title: string; excerpt: string; date: string; path: string; locale: Locale }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    inLanguage: a.locale,
    url: absoluteUrl(a.path),
    publisher: { "@id": groupId },
    image: absoluteUrl(`${a.path}/opengraph-image`),
  }
}
