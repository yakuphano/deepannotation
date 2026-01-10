"use client"

import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";

export default function Home() {
  const [animationData, setAnimationData] = useState<any>(null);

  // Animasyon dosyasını public klasöründen güvenli bir şekilde çeker
  useEffect(() => {
    fetch("/ai-brain.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie yüklenirken hata oluştu:", err));
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-24 pt-20 lg:pt-0 relative z-10">
      
      {/* --- SOL SÜTUN: YAZI ALANI --- */}
      <div className="text-left space-y-8 order-2 lg:order-1">
        
        {/* BAŞLIK */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-2 opacity-0 animate-[slideInLeft_1s_ease-out_forwards]">
          DeepAnnotation
        </h1>

        {/* UZUN METİN */}
        <div className="max-w-2xl space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-light opacity-0 animate-[slideInLeft_1s_ease-out_0.5s_forwards]">
          <p>
            At DeepAnnotation, we architect the definitive ground truth that powers the world&apos;s most advanced Artificial Intelligence systems. We go beyond simple data labeling to provide a comprehensive, enterprise-grade data infrastructure that transforms raw, unstructured information into high-fidelity training assets.
          </p>
          <p>
            By synthesizing the nuanced understanding of expert human annotators with the efficiency of automated validation pipelines, we deliver the precision-driven datasets necessary to train robust, production-ready machine learning models. Whether you are navigating the complexities of Computer Vision, Natural Language Processing, or Generative AI, our scalable workforce solutions and rigorous quality assurance protocols are designed to accelerate your time-to-market and empower the next generation of intelligent technologies.
          </p>
        </div>
      </div>

      {/* --- SAĞ SÜTUN: LOTTIE ANİMASYON ALANI --- */}
      <div className="flex justify-center items-center h-full w-full order-1 lg:order-2 relative">
        
        {/* Arka plan glow efekti */}
        <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        {/* LOTTIE BİLEŞENİ - Sadece veri yüklendiğinde render edilir */}
        <div className="relative w-full max-w-[600px] h-auto z-10">
          {animationData ? (
            <Lottie 
              animationData={animationData} 
              loop={true} 
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center text-white/20">
              Loading Animation...
            </div>
          )}
        </div>

      </div>

    </div>
  )
}