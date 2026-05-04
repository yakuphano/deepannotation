import groq from "groq"

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    "excerpt": string::trim(string::slice(coalesce(pt::text(body), ""), 0, 220))
  }
`

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    body,
    "excerpt": string::trim(string::slice(coalesce(pt::text(body), ""), 0, 200)),
    "plainText": pt::text(body)
  }
`

export const POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`
