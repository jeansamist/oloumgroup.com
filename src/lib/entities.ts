import type { RouteKey } from "./routes"

/** The group and its entities. Labels live in the dictionaries (`entities`). */
export type EntityKey = "group" | "yo" | "prefab" | "logistics" | "bella" | "usine"

/** Visual marker of each entity (pastille, filet, badge — never a full background). */
export const entityStyle: Record<EntityKey, { color: string; ink: string; initials: string; route: RouteKey; dashed?: boolean }> = {
  group: { color: "#920f15", ink: "#ffffff", initials: "OG", route: "home" },
  yo: { color: "#6e0b10", ink: "#fcae42", initials: "YO", route: "yo" },
  prefab: { color: "#6e0b10", ink: "#fcae42", initials: "YO", route: "prefab" },
  logistics: { color: "#6e0b10", ink: "#fcae42", initials: "YO", route: "logistics" },
  bella: { color: "#fcae42", ink: "#6e0b10", initials: "BL", route: "bella" },
  usine: { color: "#1a1a1a", ink: "#fcae42", initials: "U", route: "usine", dashed: true },
}
