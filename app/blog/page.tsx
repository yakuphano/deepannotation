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
    slug: "quality-data-in-ai",
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
  },
  {
    id: 3,
    title: "The Future of NLP: Text Labeling Trends",
    excerpt: "How advanced text annotation is transforming Large Language Models (LLMs).",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    category: "NLP",
    slug: "future-of-nlp-trends",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80"
  },
  {
    id: 4,
    title: "LiDAR Annotation for Robotics",
    excerpt: "Mastering 3D point cloud labeling for the next generation of smart robots.",
    date: "Jan 08, 2026",
    readTime: "7 min read",
    category: "Robotics",
    slug: "lidar-annotation-robotics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">Blog</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group relative block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative p-6 bg-slate-900/40 border border-white/10 rounded-2xl flex flex-col md:flex-row gap-6 items-center transition-all duration-300 group-hover:border-blue-500/50">
                <img src={post.image} alt={post.title} className="w-full md:w-48 h-32 object-cover rounded-xl shadow-lg" />
                <div className="flex-1">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{post.category}</span>
                  <h2 className="text-2xl font-bold mt-2 group-hover:text-blue-400 transition-colors">{post.title}</h2>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="flex items-center text-blue-500 font-bold gap-2 group-hover:translate-x-2 transition-transform">
                   <ChevronRight size={24} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}