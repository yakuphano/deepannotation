"use client"

import React from 'react';

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center px-6 md:px-24 pt-20 pb-0 md:py-0">
      
      {/* Yazı Alanı */}
      <div className="text-center space-y-6 md:space-y-8 w-full max-w-4xl">
        
        {/* Ana Başlık */}
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-2 opacity-0 animate-[slideInLeft_1s_ease-out_forwards]">
          DeepAnnotation
        </h1>

        {/* --- EKLENEN SLOGAN --- */}
        {/* Başlık ile Açıklama arasına, modern bir gradient ve animasyonla eklendi */}
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 animate-[slideInLeft_1s_ease-out_0.3s_forwards]">
          High-quality data for smarter AI
        </h2>
        {/* ---------------------- */}

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 text-base md:text-xl text-white/90 leading-relaxed font-light opacity-0 animate-[slideInLeft_1s_ease-out_0.5s_forwards]">
          <p>
            At DeepAnnotation, we architect the definitive ground truth that powers the world’s most advanced AI systems — from computer vision and NLP to speech and search relevance. We provide high-quality human-verified and AI-assisted training and evaluation data designed for modern AI and LLMs.
          </p>
        </div>
      </div>

    </div>
  );
}