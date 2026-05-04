import type { PortableTextBlock } from "@portabletext/types"

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
