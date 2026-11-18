import { Fragment, type ReactNode } from "react"

/**
 * Renders copy strings with light conventions, so the dictionaries stay readable:
 *   *words*   → amber highlighter that draws in (amber text on dark bands)
 *   **words** → bold
 *   [WORDS]   → a visible placeholder chip, to fill before launch
 */
export default function Rich({ text, mark = true }: { text: string; mark?: boolean }) {
  return <>{parse(text, mark)}</>
}

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\])/g

function parse(text: string, mark: boolean): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {parse(part.slice(2, -2), mark)}
        </strong>
      )
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return mark ? (
        <em key={i} className="mark mark-anim not-italic">
          {part.slice(1, -1)}
        </em>
      ) : (
        <Fragment key={i}>{part.slice(1, -1)}</Fragment>
      )
    }
    if (part.startsWith("[") && part.endsWith("]")) {
      return (
        <span key={i} className="ph" title="À compléter">
          {part}
        </span>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}
