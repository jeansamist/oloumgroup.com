import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Oloum Group — Construire, louer, produire",
    short_name: "Oloum Group",
    description: "Groupe camerounais du bâtiment préfabriqué : Yves Oloume SARL, Bella Location et l'Usine.",
    start_url: "/fr",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#920f15",
    lang: "fr",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  }
}
