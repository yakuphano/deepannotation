"use client"

import dynamic from "next/dynamic"

const StudioClient = dynamic(() => import("./StudioClient"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#101112] text-white/80 text-sm">
      Loading Studio…
    </div>
  ),
})

/**
 * Blog: /studio → solda "Blog Post" → Create → Publish
 */
export default function StudioPage() {
  return <StudioClient />
}
