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
          opacity-70 flex items-center justify-center 
          /* Mobil ve Masaüstü Konum Ayarları (Aynen Korundu) */
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

      {/* İÇERİK KATMANI */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        
        {/* ANA BAŞLIK: md:text-8xl olan boyutu md:text-5xl seviyesine (yaklaşık yarı yarıya) indirdim */}
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

      {/* Alt Karartma */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent z-0"></div>
    </main>
  );
}