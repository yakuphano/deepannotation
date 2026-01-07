"use client"

import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
// @ts-ignore
import animationData from "@/public/lottie/ai-brain.json"; 

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-slate-900 overflow-x-hidden">
      
      {/* Arka Plan Katmanı */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png" 
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/40 to-slate-900/90"></div>
      </div>

      <section className="container mx-auto px-6 relative z-20 w-full pt-28 md:pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-4 items-start">
          
          {/* SOL TARAF */}
          <div className="flex flex-col items-start text-left max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">
              <Zap size={14} />
              <span>AI-Powered Data Solutions</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl mt-0">
                DeepAnnotation
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-blue-300 tracking-tight">
                High-Quality Data for Smarter AI
              </h2>
            </div>
            
            <p className="mt-6 text-slate-100 text-lg md:text-xl leading-relaxed font-medium max-w-xl drop-shadow-md">
              Enterprise-grade data annotation and AI training services for production machine learning systems. We provide precision-driven data labeling, high-accuracy model training assets, and scalable workforce solutions designed to empower next-generation artificial intelligence.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all flex items-center gap-2 group shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                Get Started 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* SAĞ TARAF */}
          <div className="relative flex items-center justify-end h-[350px] md:h-[600px] -mt-5 md:mt-0">
            <div className="w-full max-w-[750px] transform translate-x-12 md:translate-x-0 lg:translate-x-48 lg:translate-y-24 flex justify-center items-center scale-125 md:scale-150">
              <Lottie 
                animationData={animationData} 
                loop={true} 
                className="w-full h-full opacity-100 drop-shadow-[0_0_80px_rgba(59,130,246,0.5)]"
              />
              <div className="absolute inset-0 bg-blue-400/20 blur-[150px] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}