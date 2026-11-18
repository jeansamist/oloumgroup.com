import { llmsFullTxt } from "@/lib/llms"

// /llms-full.txt — full text of every page and article, for AI agents. Built at deploy time.
export const dynamic = "force-static"

export function GET() {
  return new Response(llmsFullTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
