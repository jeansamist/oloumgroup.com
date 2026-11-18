import type { PageKey } from "@/lib/routes"
import type { PageData } from "../types"
import { articles, forms, projectCategories, projectItems } from "./en/data"
import { global } from "./en/global"
import { home } from "./en/home"
import { bella, catalogue, plans, usine } from "./en/pages-bella"
import { careers, commitments, group, history, leadership, sectors } from "./en/pages-group"
import { contact, faq, legal, news, privacy, projects, quote } from "./en/pages-other"
import { btp, containers, logistics, prefab, shelving, yo } from "./en/pages-yo"
import type { Dictionary } from "./fr"

/** English copy, typed against the French source of truth. */
const en: Dictionary = {
  ...global,
  home,
  pages: {
    group,
    history,
    leadership,
    commitments,
    yo,
    prefab,
    logistics,
    btp,
    shelving,
    containers,
    bella,
    catalogue,
    plans,
    usine,
    sectors,
    projects,
    news,
    careers,
    faq,
    contact,
    quote,
    legal,
    privacy,
  } satisfies Record<PageKey, PageData>,
  projectCategories,
  projectItems,
  articles,
  forms,
}

export default en
