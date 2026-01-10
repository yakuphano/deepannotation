"use client"

import dynamic from 'next/dynamic';
import { Zap } from 'lucide-react';
// @ts-ignore
import animationData from "@/public/lottie/ai-brain.json"; 

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-transparent overflow-x-hidden">
      
      {/* Üst boşluk pt-28'den pt-40'a çıkarılarak içerik aşağı indirildi */}
      <section className="container mx-auto px-6 relative z-20 w-full pt-40 md:pt-48 lg:pt-56">
        <div className="grid lg:grid-cols-2 gap-4 items-start">
          
          <div className="flex flex-col items-start text-left max-w-2xl animate-fade-in">
            {/* "AI-Powered Data Solutions" - text-blue-400'den text-white'a çevirildi */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">
              <Zap size={14} />
              <span>AI-Powered Data Solutions</span>
            </div>

            <div className="space-y-2">
              {/* "DeepAnnotation" - Beyaz renk korundu */}
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl mt-0">
                DeepAnnotation
              </h1>
              {/* "High-Quality Data for Smarter AI" - text-blue-400'den text-white'a çevirildi */}
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                High-Quality Data for Smarter AI
              </h2>
            </div>
            
            {/* Açıklama Metni - Beyaz renk korundu */}
            <p className="mt-6 text-white text-lg md:text-xl leading-relaxed font-medium max-w-xl drop-shadow-md">
              Enterprise-grade data annotation and AI training services for production machine learning systems. We provide precision-driven data labeling, high-accuracy model training assets, and scalable workforce solutions designed to empower next-generation artificial intelligence.
            </p>
          </div>

          <div className="relative flex items-center justify-end h-[350px] md:h-[600px] -mt-5 md:mt-0">
            <div className="w-full max-w-[750px] transform translate-x-12 md:translate-x-0 lg:translate-x-48 lg:translate-y-24 flex justify-center items-center scale-125 md:scale-150">
              <Lottie 
                animationData={animationData} 
                loop={true} 
                className="w-full h-full opacity-100 drop-shadow-[0_0_80px_rgba(255,255,255,0.2)]"
              />
              <div className="absolute inset-0 bg-white/5 blur-[150px] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/0 to-transparent z-30 pointer-events-none"></div>
    </main>
  );
}