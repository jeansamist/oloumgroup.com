import type { IconName } from "@/components/ui/Icon"
import type { EntityKey } from "@/lib/entities"
import type { ImageKey } from "@/lib/site"

/**
 * Shape of the dictionaries. Copy conventions:
 *   *words*   highlighted words (amber marker), max two per title
 *   **words** bold
 *   href      internal paths are written without locale ("/bella-location") and localized at render
 */

export type Cta = { label: string; href: string; variant?: "primary" | "outline" | "light" }
export type Faq = [question: string, answer: string][]
export type Card = { title: string; text: string; icon?: IconName; tag?: string; meta?: string; image?: ImageKey; href?: string }
export type Tone = "default" | "concrete" | "ink" | "red"

type Heading = { eyebrow?: string; title: string; lead?: string }

export type ToggleOption = {
  key: string
  label: string
  entity?: EntityKey
  title: string
  text: string
  points: string[]
  image: ImageKey
  cta?: Cta
}

export type Block =
  | ({ type: "intro"; text: string; sub?: string } & Partial<Heading>)
  | ({ type: "cards"; items: Card[]; columns?: 2 | 3 | 4; tone?: Tone; numbered?: boolean } & Heading)
  | ({ type: "split"; text: string[]; bullets?: string[]; image: ImageKey; imageAlt: string; reverse?: boolean; cta?: Cta; tone?: Tone } & Heading)
  | ({ type: "steps"; steps: { title: string; text: string }[]; tone?: Tone; cta?: Cta } & Heading)
  | ({ type: "toggle"; options: ToggleOption[] } & Heading)
  | ({ type: "index"; items: { title: string; text: string; tags?: string[] }[]; note?: string; image?: ImageKey } & Heading)
  | { type: "stats"; items: { value: string; label: string }[]; tone?: "red" | "ink"; note?: string }
  | ({ type: "faq"; items: Faq } & Heading)
  | ({ type: "quotes"; items: { quote: string; author: string; role: string }[] } & Heading)
  | ({ type: "timeline"; items: { year: string; title: string; text: string }[] } & Heading)
  | ({ type: "table"; head: string[]; rows: string[][]; note?: string } & Heading)
  | ({ type: "gallery"; items: { image: ImageKey; caption: string }[] } & Heading)
  | { type: "sister"; eyebrow: string; title: string; text: string; cta: Cta; image: ImageKey; entity: EntityKey }
  | ({ type: "people"; items: { name: string; role: string; entity: EntityKey; bio: string }[] } & Heading)
  | ({ type: "jobs"; items: { title: string; entity: EntityKey; place: string; contract: string; text: string }[]; apply: string; spontaneous: Cta } & Heading)
  | ({ type: "chips"; items: { title: string; icon: IconName; text: string }[] } & Heading)
  | ({ type: "specs"; items: [label: string, value: string][]; image: ImageKey; imageAlt: string } & Heading)
  | { type: "marquee"; items: string[] }
  | { type: "tree" }
  | { type: "entities" }
  | { type: "pillars" }
  | { type: "buyOrRent" }
  | { type: "projects"; limit?: number; filters?: boolean }
  | ({ type: "news"; limit?: number } & Partial<Heading>)
  | { type: "teaser"; eyebrow: string; title: string; text: string; cta: Cta; facts: [label: string, value: string][] }
  | { type: "legal"; sections: { title: string; text: string[] }[]; updated: string }
  | { type: "contact" }
  | { type: "quote" }

export type PageHero = {
  eyebrow: string
  badge?: string
  title: string
  text: string
  image: ImageKey
  imageAlt: string
  entity?: EntityKey
  ctas?: Cta[]
}

export type PageData = {
  /** Short name: breadcrumb, page transition, OG image eyebrow. */
  name: string
  metaTitle: string
  metaDescription: string
  /** Parent page for the breadcrumb (route path). */
  parent?: string
  hero: PageHero
  blocks: Block[]
  /** Hide the global CTA band at the bottom (contact and quote pages). */
  noCta?: boolean
}

export type HomeData = {
  name: string
  metaTitle: string
  metaDescription: string
  hero: {
    eyebrow: string
    titleBefore: string
    words: string[]
    titleAfter: string
    text: string
    ctas: Cta[]
    proofs: string[]
    scroll: string
    slides: { image: ImageKey; alt: string; caption: string }[]
  }
  blocks: Block[]
}

export type Project = {
  title: string
  entity: EntityKey
  category: string
  city: string
  year: string
  image: ImageKey
  text: string
}

export type Article = {
  slug: string
  title: string
  date: string
  category: string
  entity: EntityKey
  image: ImageKey
  excerpt: string
  readTime: string
  body: { heading?: string; text: string }[]
}
