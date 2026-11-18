import Marquee from "@/components/ui/Marquee"

/** Activities ticker under the home hero (two rows, opposite directions). */
export default function MarqueeBand({ items }: { items: string[] }) {
  const half = Math.ceil(items.length / 2)
  return (
    <section aria-label={items.join(", ")} className="space-y-1 border-y border-line bg-white py-6">
      <Marquee items={items.slice(0, half).map((w) => <span key={w} className="font-display text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">{w}</span>)} duration={36} separator={<span className="text-amber">✦</span>} />
      <Marquee reverse items={items.slice(half).map((w) => <span key={w} className="font-display text-3xl font-extrabold tracking-[-0.04em] text-transparent [-webkit-text-stroke:1.5px_var(--red)] sm:text-5xl">{w}</span>)} duration={36} separator={<span className="text-red">✦</span>} />
    </section>
  )
}
