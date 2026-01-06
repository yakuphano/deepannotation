import React from 'react';
import Link from 'next/link';
import { Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Quality Data in AI Training",
    excerpt: "Why high-quality annotation is the backbone of successful machine learning models.",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    category: "AI Strategy",
    slug: "quality-data-in-ai", // slug bu olmalı
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    id: 2,
    title: "Understanding Semantic Segmentation",
    excerpt: "A deep dive into pixel-level annotation techniques for autonomous driving.",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    category: "Computer Vision",
    slug: "understanding-semantic-segmentation",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-black mb-12">Blog</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group relative block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition tracking-widest"></div>
              <div className="relative p-6 bg-slate-900/50 border border-white/10 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
                <img src={post.image} alt={post.title} className="w-full md:w-48 h-32 object-cover rounded-xl" />
                <div className="flex-1">
                  <span className="text-blue-400 text-xs font-bold uppercase">{post.category}</span>
                  <h2 className="text-2xl font-bold mt-2 group-hover:text-blue-400 transition">{post.title}</h2>
                  <p className="text-gray-400 mt-2 text-sm">{post.excerpt}</p>
                </div>
                <ChevronRight className="text-blue-500 hidden md:block group-hover:translate-x-2 transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}