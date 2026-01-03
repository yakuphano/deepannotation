"use client"

import Image from 'next/image';
import dynamic from 'next/dynamic';
// @ts-ignore
import animationData from "@/public/lottie/ai-brain.json"; 

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* 1. ANA ARKA PLAN RESMİ (Noise kaldırıldı, artık direkt bu görünecek) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png" 
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover opacity-60" // Görünürlüğü buradan artırabilirsin (örn: opacity-80)
        />
        {/* Opsiyonel: Resmi biraz daha canlandırmak için çok hafif bir karartma */}
        <div className="absolute inset-0 bg-slate-950/20"></div>
      </div>

      {/* 2. ARKA PLAN ANIMASYONU (Resmin önünde) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className={`
          opacity-70 flex items-center justify-center 
          w-[900px] h-[900px] translate-x-[15%] translate-y-0
          md:w-[1200px] md:h-[1200px] md:translate-x-[15%] md:translate-y-[15%]
        `}>
          <Lottie 
            animationData={animationData} 
            loop={true} 
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* 3. İÇERİK KATMANI (En üstte) */}
      <section className="relative z-20 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
          DeepAnnotation
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-blue-400 font-bold tracking-wide">
          High-Quality Data for Smarter AI
        </p>
        
        <p className="mt-4 text-slate-400 text-base md:text-lg max-w-[600px] mx-auto leading-relaxed">
          Enterprise-grade data annotation and AI training services for 
          production machine learning systems.
        </p>
      </section>

      {/* Alt Karartma Gradyanı */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent z-30 pointer-events-none"></div>
    </main>
  );
}