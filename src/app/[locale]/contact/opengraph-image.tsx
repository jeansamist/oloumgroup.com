import { pageOg } from "@/lib/og"

export const alt = "Oloum Group"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  return pageOg(params, "contact")
}
