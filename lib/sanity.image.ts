import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url"
import { getSanityClient } from "./sanity.client"

let builder: ReturnType<typeof createImageUrlBuilder> | null = null

function getBuilder() {
  if (!builder) {
    builder = createImageUrlBuilder(getSanityClient())
  }
  return builder
}

/**
 * Sanity image references → builder for width/height/quality chaining.
 * Use `.url()` when passing to Next.js <Image src={...} />.
 */
export function urlFor(source: SanityImageSource) {
  return getBuilder().image(source)
}
