"use client"

import React from 'react';
import Lottie from "lottie-react";

// BURADAKİ animData İÇERİSİNE ai-brain.json DOSYASININ İÇİNDEKİ TÜM KODU YAPIŞTIRIN
// Dosyayı VS Code ile açın, CTRL+A ile hepsini seçin, kopyalayın ve aşağıya yapıştırın.
const animData = { 
  /* Buraya ai-brain.json içindeki kod gelecek */ 
};

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-24 pt-20 lg:pt-0 relative z-10">
      
      <div className="text-left space-y-8 order-2 lg:order-1">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-2 opacity-0 animate-[slideInLeft_1s_ease-out_forwards]">
          DeepAnnotation
        </h1>

        <div className="max-w-2xl space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-light opacity-0 animate-[slideInLeft_1s_ease-out_0.5s_forwards]">
          <p>
            At DeepAnnotation, we architect the definitive ground truth that powers the world&apos;s most advanced Artificial Intelligence systems...
          </p>
          <p>
            By synthesizing the nuanced understanding of expert human annotators...
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center h-full w-full order-1 lg:order-2 relative">
        <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative w-full max-w-[600px] h-auto z-10">
          <Lottie 
            animationData={animData} 
            loop={true} 
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}