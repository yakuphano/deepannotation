import React from 'react';
import { notFound } from 'next/navigation';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const blogPostsData: Record<string, { title: string; date: string; readTime: string; image: string; content: string }> = {
  "quality-data-in-ai": {
    title: "The Importance of Quality Data in AI Training",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    content: "Artificial Intelligence is only as good as the data it's trained on. In 2026, the focus has shifted from big data to 'good data'. High-quality annotation ensures that models don't just learn patterns, but understand context. This prevents bias and significantly increases the accuracy of predictions in critical sectors like healthcare and finance."
  },
  "understanding-semantic-segmentation": {
    title: "Understanding Semantic Segmentation",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    content: "Semantic segmentation is the process of partitioning a digital image into multiple segments. For autonomous vehicles, this means identifying every pixel—whether it belongs to a pedestrian, a lane marking, or a traffic light. At DeepAnnotation, we use multi-layer validation to ensure 99.9% pixel accuracy for our global automotive partners."
  },
  "future-of-nlp-trends": {
    title: "The Future of NLP: Text Labeling Trends",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=80",
    content: "Natural Language Processing (NLP) is moving beyond simple sentiment analysis. Today, we label datasets for intent recognition, entity extraction, and complex emotional mapping. As LLMs become more integrated into daily life, the need for human-verified, culturally nuanced text data has never been higher."
  },
  "lidar-annotation-robotics": {
    title: "LiDAR Annotation for Robotics",
    date: "Jan 08, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    content: "LiDAR (Light Detection and Ranging) provides robots with a 3D view of the world. Annotating point cloud data requires specialized tools and expertise to define 3D bounding boxes around objects. This blog explores how high-precision LiDAR labeling is enabling warehouse robots and delivery drones to navigate complex, changing environments safely."
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost(props: any) {
  const params = await props.params;
  const slug = params.slug;
  const post = blogPostsData[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link href="/blog" className="flex items-center gap-2 text-blue-400 mb-8 hover:underline group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Blog
        </Link>
        
        <div className="relative w-full h-64 md:h-96 mb-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter">{post.title}</h1>
        
        <div className="flex gap-6 text-gray-500 text-sm mb-10 border-b border-white/10 pb-6">
          <span className="flex items-center gap-1"><CalendarDays size={16} /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</span>
        </div>

        <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
}