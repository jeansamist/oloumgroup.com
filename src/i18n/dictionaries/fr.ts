import type { PageKey } from "@/lib/routes"
import type { PageData } from "../types"
import { articles, forms, projectCategories, projectItems } from "./fr/data"
import { global } from "./fr/global"
import { home } from "./fr/home"
import { bella, catalogue, plans, usine } from "./fr/pages-bella"
import { careers, commitments, group, history, leadership, sectors } from "./fr/pages-group"
import { contact, faq, legal, news, privacy, projects, quote } from "./fr/pages-other"
import { btp, containers, logistics, prefab, shelving, yo } from "./fr/pages-yo"

/** French copy: the source of truth. `en.ts` is typed against it. */
const fr = {
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

export type Dictionary = typeof fr
export default fr
