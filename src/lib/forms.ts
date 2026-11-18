import { companies, group } from "./site"

/** Where each need is routed (mailbox) until the client picks a form backend. */
export function recipientFor(entity: string) {
  if (entity === "prefab" || entity === "logistics" || entity === "yo") return companies.yo.email
  return group.email
}

/** Opens the visitor's mail client with a pre-filled message. */
export function openMail(to: string, subject: string, body: string) {
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/** Opens WhatsApp with a pre-filled message to the group number. */
export function openWhatsapp(body: string) {
  window.open(`${group.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener")
}

export function formToText(entries: [string, string][]) {
  return entries
    .filter(([, v]) => v.trim())
    .map(([k, v]) => `${k} : ${v}`)
    .join("\n")
}
