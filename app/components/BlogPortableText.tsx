"use client"

import Image from "next/image"
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity"
import { urlFor } from "@/lib/sanity.image"

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 text-white/90 leading-relaxed">{children}</p>,
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl md:text-3xl font-bold tracking-tight text-white">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl md:text-2xl font-semibold text-white">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-blue-500/70 pl-5 italic text-white/80">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 list-disc space-y-2 pl-6 text-white/90">{children}</ul>,
    number: ({ children }) => <ol className="mb-6 list-decimal space-y-2 pl-6 text-white/90">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-white/95">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-blue-200">{children}</code>
    ),
    link: ({ children, value }) => {
      const href = value?.href as string | undefined
      if (!href) return <span>{children}</span>
      const external = href.startsWith("http")
      return (
        <a
          href={href}
          className="text-blue-400 underline decoration-blue-400/50 underline-offset-2 hover:text-blue-300"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      const src = urlFor(value).width(1100).quality(85).url()
      const alt = (value.alt as string | undefined) ?? ""
      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={alt}
            width={1100}
            height={620}
            className="w-full max-h-[70vh] rounded-xl border border-white/10 object-contain"
            sizes="(max-width: 768px) 100vw, 720px"
          />
          {value.caption ? (
            <figcaption className="mt-3 text-center text-sm text-white/55">{value.caption}</figcaption>
          ) : null}
        </figure>
      )
    },
  },
}

export function BlogPortableText({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="max-w-none">
      <PortableText value={value} components={components} />
    </div>
  )
}
