import React from 'react';
import { notFound } from 'next/navigation';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Veriyi fonksiyonun dışında tutmaya devam ediyoruz ama tipini Record olarak netleştiriyoruz
const blogPostsData: Record<string, { title: string; date: string; readTime: string; image: string; content: string }> = {
  "quality-data-in-ai": {
    title: "The Importance of Quality Data in AI Training",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    content: "High-quality data is the foundation of any successful AI model. Without precise annotation, even the most advanced algorithms fail to deliver results. For machine learning engineers, the challenge often lies not in building the model, but in curating a dataset that accurately reflects the real-world scenarios the AI will encounter."
  },
  "understanding-semantic-segmentation": {
    title: "Understanding Semantic Segmentation",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    content: "Semantic segmentation involves labeling every pixel in an image. This is crucial for self-driving cars to understand where the road ends and the sidewalk begins. Unlike simple object detection, which places a bounding box around an object, semantic segmentation provides a much deeper understanding of the environment."
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug: slug,
  }));
}

// Next.js 15 için en garanti çözüm: params'ı any üzerinden karşılayıp içeride kullanmak
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
           <img 
             src={post.image} 
             alt={post.title} 
             className="w-full h-full object-cover" 
           />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white tracking-tighter">
          {post.title}
        </h1>
        
        <div className="flex gap-6 text-gray-500 text-sm mb-10 border-b border-white/10 pb-6">
          <span className="flex items-center gap-1">
            <CalendarDays size={16} /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} /> {post.readTime}
          </span>
        </div>

        <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
}