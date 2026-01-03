"use client"

import dynamic from 'next/dynamic';
// @ts-ignore
import animationData from "@/public/lottie/ai-brain.json"; 

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* ARKA PLAN ANIMASYONU */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className={`
          /* MOBİL: Ekranı kaplaması için 600px ve tam merkez */
          /* MASAÜSTÜ: 1200px ve sağa-aşağı kaydırılmış */
          w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] 
          opacity-70 
          md:translate-x-[15%] 
          md:translate-y-[15%]
        `}>
          <Lottie 
            animationData={animationData} 
            loop={true} 
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* İÇERİK KATMANI */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        
        {/* ANA BAŞLIK: Mobilde daha küçük (text-4xl), Masaüstünde orijinal (text-8xl) */}
        <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
          DeepAnnotation
        </h1>
        
        <p className="mt-6 text-lg md:text-2xl text-blue-400 font-bold tracking-wide">
          High-Quality Data for Smarter AI
        </p>
        
        <p className="mt-4 text-slate-400 text-sm md:text-lg max-w-[600px] mx-auto leading-relaxed">
          Enterprise-grade data annotation and AI training services for 
          production machine learning systems.
        </p>

        {/* Get Started butonu tamamen kaldırıldı */}

      </section>

      {/* Alt Karartma */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent z-0"></div>
    </main>
  );
}