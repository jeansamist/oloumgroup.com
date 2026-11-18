import { llmsTxt } from "@/lib/llms"

// /llms.txt — guide for AI agents and LLM crawlers (https://llmstxt.org), built at deploy time.
export const dynamic = "force-static"

export function GET() {
  return new Response(llmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
