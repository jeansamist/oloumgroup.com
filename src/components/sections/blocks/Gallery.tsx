import Photo from "@/components/ui/Photo"
import Section, { Container, SectionHeading } from "@/components/ui/Section"
import type { ImageKey } from "@/lib/site"
import { cn } from "@/lib/utils"

/** Mosaic of photos revealed by a mask, captions slide in on hover. */
export default function Gallery({ eyebrow, title, items }: { eyebrow?: string; title: string; items: { image: ImageKey; caption: string }[] }) {
  return (
    <Section>
      <Container className="space-y-12">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className="grid auto-rows-[14rem] grid-cols-2 gap-3 md:auto-rows-[18rem] md:grid-cols-4">
          {items.map((item, i) => (
            <li key={item.caption} className={cn("group relative", i % 5 === 0 && "md:col-span-2 md:row-span-2", i % 5 === 3 && "md:col-span-2")}>
              <figure data-reveal="clip" data-cursor="view" className="relative size-full overflow-hidden">
                <Photo image={item.image} alt={item.caption} sizes="(min-width: 768px) 50vw, 50vw" className="size-full" imgClassName="group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-red px-4 py-3 text-sm font-semibold text-white transition-transform duration-500 ease-out-expo group-hover:translate-y-0">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
