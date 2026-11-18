export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

/** Splits "A · B · C" into ["A", "B", "C"]. */
export function dotList(value: string) {
  return value
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean)
}

/** Removes the `*emphasis*` markers of the copy (for plain-text uses: metadata, OG images, aria). */
export function plain(value: string) {
  return value.replace(/\*+/g, "")
}
