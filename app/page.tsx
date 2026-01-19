"use client"

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
// 1. Yeni oluşturduğumuz Video Arka Plan bileşenini çağırıyoruz
import VideoBackground from './components/VideoBackground';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Mevcut 'ai-brain' animasyonunu yüklemeye devam ediyoruz
    fetch("/lottie/ai-brain.json")
      .then((res) => {
        if (!res.ok) throw new Error("Dosya bulunamadı");
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Hata:", err));
  }, []);

  return (
    /* Ana kapsayıcı (Main): 
       Video arka planı ve içeriği bir arada tutar. 
    */
    <main className="relative">
      
      {/* 2. VİDEO ARKA PLAN BURAYA EKLENDİ (En arkada duracak) */}
      <VideoBackground />

      {/* 3. MEVCUT İÇERİK (Aynen korundu) */}
      {/* pt-28: Mobilde yazıları navbarın 1 cm altına çekecek şekilde boşluk artırıldı */}
      <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 gap-4 items-center px-6 md:px-24 pt-28 lg:pt-0 relative z-10 overflow-x-hidden">
        
        {/* --- METİN ALANI --- */}
        <div className="text-left space-y-6 md:space-y-8 order-1 lg:order-1 w-full mt-2 lg:mt-0">
          
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-2 opacity-0 animate-[slideInLeft_1s_ease-out_forwards]">
            DeepAnnotation
          </h1>

          <div className="max-w-2xl space-y-4 md:space-y-6 text-base md:text-xl text-white/90 leading-relaxed font-light opacity-0 animate-[slideInLeft_1s_ease-out_0.5s_forwards]">
            <p>
              At DeepAnnotation, we architect the definitive ground truth that powers the world&apos;s most advanced Artificial Intelligence systems. We go beyond simple data labeling to provide a comprehensive, enterprise-grade data infrastructure that transforms raw, unstructured information into high-fidelity training assets.
            </p>
            <p>
              By synthesizing the nuanced understanding of expert human annotators with the efficiency of automated validation pipelines, we deliver the precision-driven datasets necessary to train robust, production-ready machine learning models.
            </p>
          </div>
        </div>

        {/* --- ANİMASYON ALANI (Mevcut Beyin Animasyonu) --- */}
        <div className="flex justify-center items-center w-full order-2 lg:order-2 relative
                      /* MOBİL: mt-4 ile yukarı çektik, translate-x-10 ile sağa ittik */
                      mt-4 -translate-y-4 translate-x-10
                      /* MASAÜSTÜ: Sabit pozisyon */
                      lg:mt-0 lg:translate-x-16 lg:translate-y-12">
          
          <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative w-full max-w-[280px] md:max-w-[550px] z-10">
            {animationData && (
              <Lottie 
                animationData={animationData} 
                loop={true} 
                className="w-full h-full" 
              />
            )}
          </div>
        </div>

      </div>
    </main>
  );
}