"use client"

import dynamic from 'next/dynamic';
// Lottie'yi istemci tarafında yüklüyoruz
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  // JSON dosyasını TypeScript hatası almadan güvenli bir şekilde çekiyoruz
  const animationData = require("../public/ai-brain.json");

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* ARKA PLAN ANIMASYONU */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60" style={{ zIndex: 0 }}>
        <div className="w-[300px] h-[300px] md:w-[650px] md:h-[650px]">
          {animationData && (
            <Lottie 
              animationData={animationData} 
              loop={true} 
            />
          )}
        </div>
      </div>

      {/* İÇERİK KATMANI */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        
        {/* BAŞLIK: Mobilde sığar (text-4xl), Bilgisayarda orijinal devasa (md:text-8xl) */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
          DeepAnnotation
        </h1>
        
        {/* ALT BAŞLIK */}
        <p className="mt-6 text-lg md:text-xl text-blue-400 font-bold tracking-wide">
          High-Quality Data for Smarter AI
        </p>
        
        {/* AÇIKLAMA */}
        <p className="mt-4 text-slate-400 text-sm md:text-base max-w-[500px] mx-auto">
          Enterprise-grade data annotation and AI training services for 
          production machine learning systems.
        </p>

        {/* BUTON */}
        <div className="mt-10">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>

      </section>

      {/* Sayfa Altı Karartma */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-0"></div>
    </main>
  );
}