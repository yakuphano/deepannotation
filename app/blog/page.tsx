"use client"

import React from 'react';
import Link from 'next/link';
import { ChevronRight, CalendarDays, Clock } from 'lucide-react';

const blogPosts = [
  { 
    id: 1, 
    title: "Why Quality Annotation Improves LLM Training", 
    excerpt: "How high-fidelity, human-verified instruction tuning datasets prevent hallucinations and improve reasoning capabilities in Large Language Models (LLMs).", 
    date: "Feb 12, 2025", 
    readTime: "6 min read", 
    category: "Generative AI", 
    slug: "quality-annotation-llm-training", 
    // YENİ GÖRSEL: Soyut veri ağları ve dil modeli akışı (Mavi/Mor)
    image: "https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "How Human-in-the-Loop Improves Model Reliability", 
    excerpt: "Integrating human feedback (RLHF) directly into MLOps pipelines to handle edge cases and reduce model drift in production environments.", 
    date: "Feb 08, 2025", 
    readTime: "8 min read", 
    category: "MLOps Strategy", 
    slug: "human-in-the-loop-reliability", 
    // YENİ GÖRSEL: Dijital arayüzle insan etkileşimi (HITL)
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    title: "Best Practices for Search Relevance Datasets", 
    excerpt: "Creating ground truth for retrieval-augmented generation (RAG) and semantic search engines using expert-graded query-document pairs.", 
    date: "Feb 01, 2025", 
    readTime: "7 min read", 
    category: "Search & Retrieval", 
    slug: "search-relevance-best-practices", 
    // YENİ GÖRSEL: Veri ağları üzerinde arama/büyüteç konsepti
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    title: "Optimizing 3D Point Cloud Data for GPU Training", 
    excerpt: "Structuring LiDAR and sensor fusion data to maximize throughput in NVIDIA-powered training clusters for autonomous systems.", 
    date: "Jan 28, 2025", 
    readTime: "10 min read", 
    category: "Autonomous Systems", 
    slug: "lidar-gpu-optimization", 
    // YENİ GÖRSEL: Soyut 3D dijital yapı / nokta bulutu
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop" 
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter text-center">
          Insights & Research
        </h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group relative block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative p-6 bg-white/10 border border-white/20 rounded-2xl flex flex-col md:flex-row gap-6 items-center transition-all duration-300 group-hover:border-white/50 backdrop-blur-md">
                
                {/* Görsel */}
                <div className="w-full md:w-48 h-48 md:h-32 flex-shrink-0 overflow-hidden rounded-xl">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                {/* Metinler */}
                <div className="flex-1">
                  <span className="text-blue-300 text-xs font-bold uppercase tracking-widest bg-blue-900/30 px-2 py-1 rounded border border-blue-500/30">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold mt-3 group-hover:text-blue-200 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-white/80 mt-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
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
  );
}