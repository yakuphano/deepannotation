"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const blogPostsData: Record<string, { title: string; date: string; readTime: string; image: string; content: string[] }> = {
  "quality-annotation-llm-training": {
    title: "Why Quality Annotation Improves LLM Training",
    date: "Feb 12, 2025",
    readTime: "6 min read",
    image: "/blog/llm-training.png",
    content: [
      "In the era of Generative AI, the bottleneck has shifted from model architecture to data quality. Large Language Models (LLMs) are prone to hallucinations and reasoning errors when trained on noisy, unverified datasets.",
      "At DeepAnnotation, we focus on 'Ground Truth Engineering'. Unlike basic crowdsourcing, our workflows involve domain experts who verify reasoning chains (CoT) and factual accuracy.",
      "Furthermore, clean, human-verified data significantly accelerates model convergence, saving substantial GPU compute costs."
    ]
  },
  "human-in-the-loop-reliability": {
    title: "How Human-in-the-Loop Improves Model Reliability",
    date: "Feb 08, 2025",
    readTime: "8 min read",
    image: "/blog/hitl-reliability.png",
    content: [
      "Deploying AI in production is not a one-time event; it is a continuous cycle. Model drift and edge cases inevitably degrade performance over time.",
      "We champion a robust Human-in-the-Loop (HITL) strategy integrated directly into the MLOps pipeline. Low-confidence predictions are routed to human experts.",
      "This creates a virtuous cycle of Active Learning, ensuring your AI remains reliable as real-world conditions evolve."
    ]
  },
  "search-relevance-best-practices": {
    title: "Best Practices for Search Relevance Datasets",
    date: "Feb 01, 2025",
    readTime: "7 min read",
    image: "/blog/search-relevance.png",
    content: [
      "Retrieval-Augmented Generation (RAG) has made search relevance more critical than ever. An LLM is only as good as the context it retrieves.",
      "We construct 'Golden Datasets' for search evaluation by pairing queries with documents graded by human experts on a multi-point relevance scale.",
      "Our approach focuses on user intent modeling, distinguishing between navigational, informational, and transactional queries."
    ]
  },
  "lidar-gpu-optimization": {
    title: "Optimizing 3D Point Cloud Data for GPU Training",
    date: "Jan 28, 2025",
    readTime: "10 min read",
    image: "/blog/lidar-gpu.png",
    content: [
      "Autonomous systems rely on LiDAR sensors that generate millions of data points per second. Processing this efficienty requires structured data.",
      "We specialize in optimizing 3D point cloud annotations for high-throughput training pipelines, minimizing data loading bottlenecks.",
      "This ensures your NVIDIA GPU clusters spend cycles learning features, not decoding inefficient data formats."
    ]
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-500 hover:underline font-bold text-lg italic">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link href="/blog" className="flex items-center gap-2 text-blue-400 mb-8 hover:underline group font-bold italic">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Blog
        </Link>
        
        <div className="relative w-full h-64 md:h-96 mb-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-slate-900">
           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter text-white">
          {post.title}
        </h1>
        
        <div className="flex gap-6 text-gray-500 text-sm mb-10 border-b border-white/10 pb-6">
          <span className="flex items-center gap-1"><CalendarDays size={16} /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</span>
        </div>

        <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-8 font-light">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}