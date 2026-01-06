"use client"

import React from 'react';
import { useParams } from 'next/navigation';
// HATALI SATIR DÜZELTİLDİ: 'lucide-center' yerine 'lucide-react'
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const blogPostsData: Record<string, { title: string; date: string; readTime: string; image: string; content: string[] }> = {
  "quality-data-in-ai": {
    title: "The Strategic Imperative of High-Fidelity Data in AI Training",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    content: [
      "In the contemporary AI landscape, the paradigm has shifted from 'Big Data' to 'Smart Data'. As neural networks become more sophisticated, their performance is increasingly bottlenecked by the quality of the training sets provided.",
      "At DeepAnnotation, we address the 'Garbage In, Garbage Out' challenge by implementing multi-layer verification protocols. Quality data ensures that models learn accurate features rather than noise, significantly reducing the risk of algorithmic bias.",
      "Furthermore, clean data accelerates the convergence of models during training, saving thousands of dollars in compute costs."
    ]
  },
  "understanding-semantic-segmentation": {
    title: "Advancements in Pixel-Level Semantic Segmentation for 2026",
    date: "Jan 12, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Semantic segmentation represents the pinnacle of computer vision complexity, requiring the classification of every individual pixel within an image. For autonomous systems, this provides a granular understanding of the environment.",
      "The year 2026 has brought new challenges with the rise of Level 5 autonomy. Models now require annotation that accounts for weather occlusions, motion blur, and varying light conditions.",
      "This level of detail allows AI to not only recognize objects but to understand their exact spatial occupancy."
    ]
  },
  "future-of-nlp-trends": {
    title: "The Evolution of NLP: From Sentiment to Complex Intent Mapping",
    date: "Jan 10, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Large Language Models (LLMs) have transformed how we interact with technology, but their growth is fueled by increasingly complex text annotation. We are moving beyond basic sentiment analysis.",
      "Modern NLP datasets require annotators who understand linguistic subtleties and industry-specific jargon. DeepAnnotation bridges this gap by employing specialists.",
      "As we look toward 2027, the focus will be on 'Reinforcement Learning from Human Feedback' (RLHF). This process relies on human-ranked responses to fine-tune AI behavior safely."
    ]
  },
  "lidar-annotation-robotics": {
    title: "Neural Robotics: Mastering 3D Point Cloud LiDAR Annotation",
    date: "Jan 08, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200", 
    content: [
      "Robotics is undergoing a neural revolution. To navigate complex 3D spaces, robots rely on LiDAR sensors that generate millions of data points every second.",
      "Unlike 2D images, 3D data requires an understanding of depth, orientation, and velocity. Annotating a moving object in a 3D space involves tracking its trajectory.",
      "From warehouse automation to delivery drones, the safety of robotic systems depends on the precision of their spatial training data. We enable the next generation of robots."
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
          <Link href="/blog" className="text-blue-500 hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link href="/blog" className="flex items-center gap-2 text-blue-400 mb-8 hover:underline group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Blog
        </Link>
        
        <div className="relative w-full h-64 md:h-96 mb-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-slate-900">
           <img 
             src={post.image} 
             alt={post.title} 
             className="w-full h-full object-cover"
             onError={(e) => {
               (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200";
             }}
           />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter text-white">
          {post.title}
        </h1>
        
        <div className="flex gap-6 text-gray-500 text-sm mb-10 border-b border-white/10 pb-6">
          <span className="flex items-center gap-1"><CalendarDays size={16} /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</span>
        </div>

        <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-8">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}