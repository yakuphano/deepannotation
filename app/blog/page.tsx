"use client"

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// NVIDIA & Enterprise Odaklı Blog İçerikleri
const blogPosts = [
  { 
    id: 1, 
    title: "Why Quality Annotation Improves LLM Training", 
    excerpt: "How high-fidelity, human-verified instruction tuning datasets prevent hallucinations and improve reasoning capabilities in Large Language Models (LLMs).", 
    date: "Jan 24, 2026", 
    readTime: "6 min read", 
    category: "Generative AI", 
    slug: "quality-annotation-llm-training", 
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 2, 
    title: "How Human-in-the-Loop Improves Model Reliability", 
    excerpt: "Integrating human feedback (RLHF) directly into MLOps pipelines to handle edge cases and reduce model drift in production environments.", 
    date: "Jan 20, 2026", 
    readTime: "8 min read", 
    category: "MLOps Strategy", 
    slug: "human-in-the-loop-reliability", 
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee481c?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    title: "Best Practices for Search Relevance Datasets", 
    excerpt: "Creating ground truth for retrieval-augmented generation (RAG) and semantic search engines using expert-graded query-document pairs.", 
    date: "Jan 15, 2026", 
    readTime: "7 min read", 
    category: "Search & Retrieval", 
    slug: "search-relevance-best-practices", 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    title: "Optimizing 3D Point Cloud Data for GPU Training", 
    excerpt: "Structuring LiDAR and sensor fusion data to maximize throughput in NVIDIA-powered training clusters for autonomous systems.", 
    date: "Jan 10, 2026", 
    readTime: "10 min read", 
    category: "Autonomous Systems", 
    slug: "lidar-gpu-optimization", 
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" 
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
                <img src={post.image} alt={post.title} className="w-full md:w-48 h-32 object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500" />
                
                {/* Metinler */}
                <div className="flex-1">
                  <span className="text-blue-300 text-xs font-bold uppercase tracking-widest bg-blue-900/30 px-2 py-1 rounded border border-blue-500/30">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold mt-2 group-hover:text-blue-200 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/80 mt-2 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                {/* İkon */}
                <div className="text-white group-hover:translate-x-2 transition-transform hidden md:block">
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