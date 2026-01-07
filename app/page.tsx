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
    <main className="relative min-h-screen w-full flex items-center bg-slate-950 overflow-hidden">
      
      {/* 1. ARKA PLAN RESMİ (Daha soft hale getirildi) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png" 
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover opacity-40"
        />
        {/* Sol tarafa yazılar için karartma katmanı */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      {/* 2. ANA İÇERİK (İki Sütunlu Yapı) */}
      <section className="container mx-auto px-6 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* SOL SÜTUN: Okunaklı Metinler ve Butonlar */}
          <div className="flex flex-col items-start text-left space-y-8 max-w-2xl">
            
            {/* Küçük Üst Başlık */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase animate-fade-in">
              <Zap size={14} />
              <span>Next-Generation AI Training</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
                Deep<span className="text-blue-500">Annotation</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400 tracking-tight">
                High-Quality Data for Smarter AI
              </h2>
            </div>
            
            <p className="text-white text-lg md:text-xl leading-relaxed font-medium max-w-lg drop-shadow-md">
              Enterprise-grade data annotation and AI training services for 
              production machine learning systems. We transform raw information into structured, intelligent assets.
            </p>

            {/* CTA BUTONLARI */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all flex items-center gap-2 group shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                Get Started 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold transition-all backdrop-blur-sm">
                Our Services
              </Link>
            </div>
          </div>

          {/* SAĞ SÜTUN: Lottie Animasyonu (Yazıdan bağımsız sağ tarafta) */}
          <div className="relative flex justify-center items-center h-[500px] md:h-[700px]">
            <div className="w-full h-full scale-110 md:scale-150 flex items-center justify-center">
              <Lottie 
                animationData={animationData} 
                loop={true} 
                className="w-full h-full opacity-90 drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
              />
            </div>
            {/* Animasyonun arkasına hafif bir parlama efekti */}
            <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
          </div>

        </div>
      </section>

      {/* Alt Karartma Gradyanı */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent z-30 pointer-events-none"></div>
    </main>
  );
}