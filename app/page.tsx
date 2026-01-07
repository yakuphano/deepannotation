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
    <main className="relative min-h-screen w-full flex items-start bg-slate-950 overflow-hidden">
      
      {/* 1. ARKA PLAN KATMANI */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png" 
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
      </div>

      {/* 2. ANA İÇERİK YAPISI */}
      {/* pt-20 ile yazıları hem mobilde hem masaüstünde Navbar'ın hemen altına taşıdık */}
      <section className="container mx-auto px-6 relative z-20 w-full pt-20 md:pt-24">
        <div className="grid lg:grid-cols-2 gap-4 items-start">
          
          {/* SOL TARAF: Navbar'ın hemen altından başlayan metinler */}
          <div className="flex flex-col items-start text-left space-y-6 md:space-y-8 max-w-2xl animate-fade-in">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
              <Zap size={14} />
              <span>AI-Powered Data Solutions</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
                DeepAnnotation
              </h1>
              <h2 className="text-xl md:text-3xl font-bold text-blue-400 tracking-tight">
                High-Quality Data for Smarter AI
              </h2>
            </div>
            
            <p className="text-white text-lg md:text-xl leading-relaxed font-medium max-w-lg drop-shadow-md">
              Enterprise-grade data annotation and AI training services for 
              production machine learning systems.
            </p>

            {/* BUTONLAR (Our Services kaldırıldı) */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all flex items-center gap-2 group shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                Get Started 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* SAĞ TARAF: Konumu korunan animasyon */}
          <div className="relative flex items-center justify-end h-[350px] md:h-[600px] -mt-10 md:mt-0">
            <div className="w-full max-w-[750px] transform lg:translate-x-48 lg:translate-y-24 flex justify-center items-center scale-110 md:scale-150">
              <Lottie 
                animationData={animationData} 
                loop={true} 
                className="w-full h-full opacity-100 drop-shadow-[0_0_80px_rgba(59,130,246,0.4)]"
              />
              <div className="absolute inset-0 bg-blue-500/10 blur-[150px] rounded-full -z-10"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Alt Karartma */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent z-30 pointer-events-none"></div>
    </main>
  );
}