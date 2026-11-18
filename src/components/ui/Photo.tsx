import Image from "next/image"
import { images, type ImageKey } from "@/lib/site"
import { cn } from "@/lib/utils"

/** Statically imported photo with blur placeholder, cover fit and the site's photo treatment. */
export default function Photo({
  image,
  alt,
  sizes = "100vw",
  className,
  imgClassName,
  priority,
  fx = true,
}: {
  image: ImageKey
  alt: string
  sizes?: string
  className?: string
  imgClassName?: string
  priority?: boolean
  fx?: boolean
}) {
  return (
    <div className={cn(!/\babsolute\b/.test(className ?? "") && "relative", "overflow-hidden", fx && "photo-fx", className)}>
      <Image src={images[image]} alt={alt} fill sizes={sizes} placeholder="blur" priority={priority} className={cn("object-cover", imgClassName)} />
    </div>
  )
}
