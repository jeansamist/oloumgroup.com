import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { Block } from "@/i18n/types"
import Cards from "./blocks/Cards"
import Chips from "./blocks/Chips"
import Contact from "./blocks/Contact"
import EntityScroller from "./blocks/EntityScroller"
import Faq from "./blocks/Faq"
import Gallery from "./blocks/Gallery"
import GroupTree from "./blocks/GroupTree"
import IndexList from "./blocks/IndexList"
import Intro from "./blocks/Intro"
import Jobs from "./blocks/Jobs"
import Legal from "./blocks/Legal"
import MarqueeBand from "./blocks/MarqueeBand"
import ModelPillars from "./blocks/ModelPillars"
import News from "./blocks/News"
import People from "./blocks/People"
import Projects from "./blocks/Projects"
import Quote from "./blocks/Quote"
import Quotes from "./blocks/Quotes"
import Sister from "./blocks/Sister"
import Specs from "./blocks/Specs"
import Split from "./blocks/Split"
import Stats from "./blocks/Stats"
import Steps from "./blocks/Steps"
import Table from "./blocks/Table"
import Teaser from "./blocks/Teaser"
import Timeline from "./blocks/Timeline"
import Toggle from "./blocks/Toggle"

/** Renders the content blocks of a page, as declared in the dictionaries. */
export default function Blocks({ blocks, locale, dict }: { blocks: Block[]; locale: Locale; dict: Dictionary }) {
  return blocks.map((b, i) => {
    switch (b.type) {
      case "intro":
        return <Intro key={i} {...b} />
      case "cards":
        return <Cards key={i} {...b} locale={locale} />
      case "split":
        return <Split key={i} {...b} locale={locale} />
      case "steps":
        return <Steps key={i} {...b} locale={locale} />
      case "toggle":
        return <Toggle key={i} {...b} locale={locale} entities={dict.entities} />
      case "buyOrRent":
        return <Toggle key={i} {...dict.buyOrRent} locale={locale} entities={dict.entities} />
      case "index":
        return <IndexList key={i} {...b} />
      case "stats":
        return <Stats key={i} {...b} />
      case "faq":
        return <Faq key={i} {...b} />
      case "quotes":
        return <Quotes key={i} {...b} mockNote={dict.common.mockNote} />
      case "timeline":
        return <Timeline key={i} {...b} />
      case "table":
        return <Table key={i} {...b} />
      case "gallery":
        return <Gallery key={i} {...b} />
      case "sister":
        return <Sister key={i} {...b} locale={locale} entities={dict.entities} />
      case "people":
        return <People key={i} {...b} entities={dict.entities} mockNote={dict.common.mockNote} />
      case "jobs":
        return <Jobs key={i} {...b} locale={locale} entities={dict.entities} />
      case "chips":
        return <Chips key={i} {...b} />
      case "specs":
        return <Specs key={i} {...b} />
      case "marquee":
        return <MarqueeBand key={i} items={b.items} />
      case "tree":
        return <GroupTree key={i} t={dict.tree} entities={dict.entities} locale={locale} soon={dict.common.soon} />
      case "entities":
        return <EntityScroller key={i} t={dict.entityCards} entities={dict.entities} locale={locale} />
      case "pillars":
        return <ModelPillars key={i} t={dict.pillars} entities={dict.entities} locale={locale} includes={dict.common.includes} />
      case "projects":
        return <Projects key={i} dict={dict} locale={locale} limit={b.limit} filters={b.filters} />
      case "news":
        return <News key={i} {...b} title={b.title} locale={locale} dict={dict} />
      case "teaser":
        return <Teaser key={i} {...b} locale={locale} soon={dict.common.soon} />
      case "legal":
        return <Legal key={i} {...b} />
      case "contact":
        return <Contact key={i} dict={dict} locale={locale} />
      case "quote":
        return <Quote key={i} dict={dict} />
    }
  })
}
