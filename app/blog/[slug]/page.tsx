"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const blogPostsData: Record<string, { title: string; date: string; readTime: string; image: string; content: string[] }> = {
  "quality-data-in-ai": {
    title: "The Strategic Imperative of High-Fidelity Data in AI Training",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    content: [
      "In the contemporary AI landscape, the paradigm has shifted from 'Big Data' to 'Smart Data'. As neural networks become more sophisticated, their performance is increasingly bottlenecked by the quality of the training sets provided. High-fidelity data annotation is no longer just a task; it is a strategic imperative.",
      "At DeepAnnotation, we address the 'Garbage In, Garbage Out' challenge by implementing multi-layer verification protocols. Quality data ensures that models learn accurate features rather than noise, significantly reducing the risk of algorithmic bias. This is critical in sectors like medical diagnostics and finance.",
      "Furthermore, clean data accelerates the convergence of models during training, saving significant compute costs. By prioritizing precision over mere volume, teams can build robust AI systems that generalize better to real-world scenarios."
    ]
  },
  "understanding-semantic-segmentation": {
    title: "Advancements in Pixel-Level Semantic Segmentation for 2026",
    date: "Jan 12, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Semantic segmentation represents the pinnacle of computer vision complexity, requiring the classification of every individual pixel. For autonomous systems, this provides a granular understanding of the environment that bounding boxes cannot match.",
      "The year 2026 has brought new challenges with Level 5 autonomy. Models now require annotation that accounts for weather occlusions, motion blur, and varying light conditions. Our approach utilizes advanced edge-detection combined with human expertise.",
      "This level of detail allows AI to understand exact spatial occupancy—the difference between a self-driving car knowing there is a pedestrian nearby and knowing exactly where the pedestrian's footprint ends."
    ]
  },
  "future-of-nlp-trends": {
    title: "The Evolution of NLP: From Sentiment to Complex Intent Mapping",
    date: "Jan 10, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Large Language Models (LLMs) have transformed technology, but their growth is fueled by complex text annotation. We are moving beyond basic sentiment analysis into the realm of 'Intent Mapping' and 'Nuance Categorization'.",
      "Modern NLP datasets require annotators who understand linguistic subtleties and industry-specific jargon. DeepAnnotation bridges this gap by employing specialists who ensure contextually rich data.",
      "Looking toward 2027, the focus is on RLHF (Reinforcement Learning from Human Feedback). This process relies on human-ranked responses to fine-tune AI behavior safely and ethically."
    ]
  },
  "lidar-annotation-robotics": {
    title: "Neural Robotics: Mastering 3D Point Cloud LiDAR Annotation",
    date: "Jan 08, 2026",
    readTime: "12 min read",
    // YENİ NEURAL ROBOT GÖRSELİ
    image: "https://images.unsplash.com/photo-1555255707-c07966488bc7?auto=format&fit=crop&q=80&w=1200", 
    content: [
      "Robotics is undergoing a neural revolution. To navigate complex 3D spaces, robots rely on LiDAR sensors generating millions of data points per second. Translating this 'Point Cloud' into intelligence requires sophisticated 3D cuboid annotation.",
      "Unlike 2D images, 3D data requires an understanding of depth, orientation, and velocity. Annotating a moving object in 3D involves tracking its trajectory across frames, ensuring temporal consistency.",
      "From warehouse automation to delivery drones, the safety of robotic systems depends on spatial training data. We enable the next generation of robots to interact with the physical world as safely as humans do."
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
        <Link href="/blog" className="flex items-center gap-2 text-blue-400 mb-8 hover:underline group font-bold">
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
        
        <div className="flex gap-6 text-gray-500 text-sm mb-10 border-b border-white/10 pb-6 font-medium">
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