import Link from "next/link"

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center text-white pt-32 pb-20 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-white/70 mb-8">This article does not exist or the link is incorrect.</p>
        <Link href="/blog" className="text-blue-400 hover:underline font-bold text-lg">
          Return to Blog
        </Link>
      </div>
    </div>
  )
}
