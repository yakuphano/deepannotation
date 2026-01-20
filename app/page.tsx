"use client"

import React from 'react';

export default function Home() {
  return (
    // DÜZENLEME:
    // pt-16: Navbar'ın altından kurtarmak için hafif boşluk.
    // justify-center: Dikeyde tam ortalar.
    <div className="w-full h-full flex flex-col justify-center items-center px-4 md:px-24 pt-16 md:pt-0">
      
      {/* Yazı Alanı */}
      <div className="text-center space-y-4 md:space-y-8 w-full max-w-4xl">
        
        {/* MOBİL AYARI: 
           - text-3xl: Başlığı mobilde küçülttük (eskiden 4xl idi).
           - md:text-7xl: Masaüstünde büyük kalmaya devam ediyor.
        */}
        <h1 className="text-3xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-1 md:pb-2 opacity-0 animate-[slideInLeft_1s_ease-out_forwards]">
          DeepAnnotation
        </h1>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-6 text-sm md:text-xl text-white/90 leading-relaxed font-light opacity-0 animate-[slideInLeft_1s_ease-out_0.5s_forwards]">
          {/* Paragrafları mobilde biraz daha kısa görünecek şekilde ayarladık (text-sm) */}
          <p>
            At DeepAnnotation, we architect the definitive ground truth that powers the world&apos;s most advanced AI systems. We provide enterprise-grade data infrastructure transforming raw info into high-fidelity assets.
          </p>
          {/* İkinci paragraf mobilde çok yer kaplarsa 'hidden md:block' ile mobilde gizleyebiliriz. 
              Ama şimdilik boyut küçülterek sığdırdık. */}
          <p className="hidden xs:block"> 
            By synthesizing expert human annotators with automated validation pipelines, we deliver precision-driven datasets for robust ML models.
          </p>
        </div>
      </div>

    </div>
  );
}