import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';

// Örnek Blog Verileri
const blogPosts = [
  {
    id: 1,
    title: "The Importance of Quality Data in AI Training",
    excerpt: "Why high-quality annotation is the backbone of successful machine learning models and how it impacts accuracy.",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    category: "AI Strategy",
    slug: "quality-data-in-ai"
  },
  {
    id: 2,
    title: "Understanding Semantic Segmentation in 2026",
    excerpt: "A deep dive into pixel-level annotation techniques for autonomous driving and medical imaging projects.",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    category: "Computer Vision",
    slug: "understanding-semantic-segmentation"
  },
  {
    id: 3,
    title: "The Future of Human-in-the-Loop Annotation",
    excerpt: "Exploring the synergy between AI-assisted labeling and human expertise for complex dataset creation.",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    category: "Industry Trends",
    slug: "human-in-the-loop-future"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* BAŞLIK BÖLÜMÜ */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Insights & <span className="text-blue-500">Innovation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Explore the latest trends in data annotation, artificial intelligence, and machine learning.
          </p>
        </div>

        {/* BLOG LİSTESİ */}
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group relative">
              {/* Glow Efekti */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
              
              <div className="relative p-8 bg-slate-900/40 border border-white/10 rounded-2xl transition-all duration-300 group-hover:border-blue-500/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-0">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center text-blue-500 font-bold gap-2 group-hover:translate-x-2 transition-transform">
                  Read More <ChevronRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}