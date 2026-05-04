import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"
import { getSanityClient, isSanityConfigured } from "@/lib/sanity.client"
import { POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from "@/lib/sanity.queries"
import type { SanityBlogPostDetail } from "@/lib/sanity.types"
import { urlFor } from "@/lib/sanity.image"
import { BlogPortableText } from "@/app/components/BlogPortableText"

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

function estimateReadMinutes(plainText?: string) {
  const words = (plainText ?? "").split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  if (!isSanityConfigured()) return []
  try {
    const slugs = await getSanityClient().fetch<string[]>(POST_SLUGS_QUERY)
    return (slugs ?? []).filter(Boolean).map((slug) => ({ slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  if (!isSanityConfigured()) {
    return { title: "Blog | DeepAnnotation" }
  }
  const post = await getSanityClient()
    .fetch<SanityBlogPostDetail | null>(POST_BY_SLUG_QUERY, { slug })
    .catch(() => null)
  if (!post) {
    return { title: "Post not found | DeepAnnotation" }
  }
  return {
    title: `${post.title} | DeepAnnotation`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  if (!isSanityConfigured()) {
    return (
      <div className="min-h-screen bg-transparent text-white pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl text-center text-white/80">
          <p className="mb-6">Sanity is not configured. Add environment variables to load this post.</p>
          <Link href="/blog" className="text-blue-400 font-semibold hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const post = await getSanityClient()
    .fetch<SanityBlogPostDetail | null>(POST_BY_SLUG_QUERY, { slug })
    .catch(() => null)

  if (!post) {
    notFound()
  }

  const readMins = estimateReadMinutes(post.plainText)

  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 mb-8 hover:underline group font-bold italic"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <div className="relative w-full h-64 md:h-96 mb-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-slate-900/60">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).fit("crop").url()}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          ) : null}
        </div>

        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter text-white">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-gray-500 text-sm mb-10 border-b border-white/10 pb-6">
          <span className="flex items-center gap-1">
            <CalendarDays size={16} /> {formatDate(post.publishedAt) || "Draft"}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} /> {readMins} min read
          </span>
        </div>

        {post.body?.length ? (
          <article className="text-lg md:text-xl leading-relaxed font-light">
            <BlogPortableText value={post.body} />
          </article>
        ) : (
          <p className="text-white/60">This post has no body content yet.</p>
        )}
      </div>
    </div>
  )
}
