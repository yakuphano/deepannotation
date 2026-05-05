import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CalendarDays } from "lucide-react"
import { getSanityClient, isSanityConfigured } from "@/lib/sanity.client"
import { POSTS_QUERY } from "@/lib/sanity.queries"
import type { SanityBlogPostListItem } from "@/lib/sanity.types"
import { urlFor } from "@/lib/sanity.image"
import { FALLBACK_BLOG_LIST } from "@/lib/blog.fallback"

/** New Sanity posts show on the live site within this window (seconds) without redeploying */
export const revalidate = 120

function formatDate(iso?: string) {
  if (!iso) return ""
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(iso))
  } catch {
    return ""
  }
}

export default async function BlogPage() {
  let sanityPosts: SanityBlogPostListItem[] = []
  if (isSanityConfigured()) {
    try {
      sanityPosts = await getSanityClient().fetch<SanityBlogPostListItem[]>(POSTS_QUERY)
    } catch {
      sanityPosts = []
    }
  }

  const useSanityList = sanityPosts.length > 0
  const showDemoBanner = isSanityConfigured() && !useSanityList

  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter text-center">
          Insights & Research
        </h1>

        {showDemoBanner ? (
          <p className="text-center text-amber-200/90 text-sm max-w-2xl mx-auto mb-8 leading-relaxed border border-amber-500/30 rounded-xl px-4 py-3 bg-amber-950/20">
            No Sanity documents yet — showing sample articles below. Add posts in{" "}
            <a
              href="https://www.sanity.io/manage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline underline-offset-2"
            >
              sanity.io/manage
            </a>{" "}
            (hosted Studio) to replace this list.
          </p>
        ) : null}

        {!isSanityConfigured() ? (
          <p className="text-center text-white/60 text-sm max-w-2xl mx-auto mb-10">
            Sanity env vars are not set — showing sample articles. Configure env, then manage posts at{" "}
            <a
              href="https://www.sanity.io/manage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline underline-offset-2"
            >
              sanity.io/manage
            </a>
            .
          </p>
        ) : null}

        <div className="grid gap-8">
          {useSanityList
            ? sanityPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post._id} className="group relative block">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500" />
                  <div className="relative p-6 bg-white/10 border border-white/20 rounded-2xl flex flex-col md:flex-row gap-6 items-center transition-all duration-300 group-hover:border-white/50 backdrop-blur-md">
                    <div className="w-full md:w-48 h-48 md:h-32 flex-shrink-0 overflow-hidden rounded-xl bg-slate-900/60 relative">
                      {post.mainImage ? (
                        <Image
                          src={urlFor(post.mainImage).width(400).height(300).fit("crop").url()}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 192px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <span className="text-blue-300 text-xs font-bold uppercase tracking-widest bg-blue-900/30 px-2 py-1 rounded border border-blue-500/30">
                        Blog
                      </span>
                      <h2 className="text-2xl font-bold mt-3 group-hover:text-blue-200 transition-colors leading-tight">
                        {post.title}
                      </h2>
                      {post.excerpt ? (
                        <p className="text-white/80 mt-3 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                      ) : null}
                      <div className="mt-3 flex items-center text-xs text-slate-400 gap-2">
                        <CalendarDays size={14} className="shrink-0" />
                        <span>{formatDate(post.publishedAt) || "Draft"}</span>
                      </div>
                    </div>
                    <div className="hidden md:block text-white group-hover:translate-x-2 transition-transform">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                </Link>
              ))
            : FALLBACK_BLOG_LIST.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="group relative block">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500" />
                  <div className="relative p-6 bg-white/10 border border-white/20 rounded-2xl flex flex-col md:flex-row gap-6 items-center transition-all duration-300 group-hover:border-white/50 backdrop-blur-md">
                    <div className="w-full md:w-48 h-48 md:h-32 flex-shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-blue-300 text-xs font-bold uppercase tracking-widest bg-blue-900/30 px-2 py-1 rounded border border-blue-500/30">
                        {post.category}
                      </span>
                      <h2 className="text-2xl font-bold mt-3 group-hover:text-blue-200 transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-white/80 mt-3 text-sm leading-relaxed">{post.excerpt}</p>
                      <div className="mt-3 flex items-center text-xs text-slate-400 space-x-4">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="hidden md:block text-white group-hover:translate-x-2 transition-transform">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  )
}
