import type { PortableTextBlock } from "next-sanity"

export type SanityBlogPostListItem = {
  _id: string
  title: string
  slug: string
  publishedAt?: string
  mainImage?: Record<string, unknown> | null
  excerpt?: string
}

export type SanityBlogPostDetail = SanityBlogPostListItem & {
  body?: PortableTextBlock[]
  plainText?: string
}
