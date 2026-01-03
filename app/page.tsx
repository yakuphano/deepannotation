"use client"

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Lottie'yi sadece istemci tarafında yüklüyoruz
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  const [animationData, setAnimationData] = useState<any>(null);

  // Animasyon dosyasını güvenli bir şekilde çekiyoruz
  useEffect(() => {
    fetch('/ai-brain.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie yüklenemedi:", err));
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* ARKA PLAN ANIMASYONU */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-50">
        <div className="w-[350px] h-[350px] md:w-[700px] md:h-[700px]">
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
        
        {/* BAŞLIK: Mobilde sığar, bilgisayarda devasa */}
        <h1 
          className="font-black text-white tracking-tighter leading-tight drop-shadow-2xl"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 8rem)' }}
        >
          DeepAnnotation
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-blue-400 font-bold tracking-wide">
          High-Quality Data for Smarter AI
        </p>
        
        <p className="mt-4 text-slate-400 text-sm md:text-lg max-w-[600px] mx-auto leading-relaxed">
          Enterprise-grade data annotation and AI training services for 
          production machine learning systems.
        </p>

        <div className="mt-10">
          <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-full transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>

      </section>

      {/* Alt Karartma */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-0"></div>
    </main>
  );
}