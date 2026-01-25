"use client"

import React from 'react';

export default function Home() {
  return (
    // SENİN KODUN: pt-20 ve pb-0 ayarlarıyla
    <div className="w-full flex-1 flex flex-col justify-center items-center px-6 md:px-24 pt-20 pb-0 md:py-0">
      
      {/* Yazı Alanı */}
      <div className="text-center space-y-6 md:space-y-8 w-full max-w-4xl">
        
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-2 opacity-0 animate-[slideInLeft_1s_ease-out_forwards]">
          DeepAnnotation
        </h1>

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 text-base md:text-xl text-white/90 leading-relaxed font-light opacity-0 animate-[slideInLeft_1s_ease-out_0.5s_forwards]">
          <p>
            className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            At DeepAnnotation, we architect the definitive ground truth that powers the world’s most advanced AI systems — from computer vision and NLP to speech and search relevance. We provide high-quality human-verified and AI-assisted training and evaluation data designed for modern AI and LLMs.
          </p>
          <p>
            By synthesizing the nuanced understanding of expert human annotators with the efficiency of automated validation pipelines, we deliver the precision-driven datasets necessary to train robust, production-ready machine learning models.
          </p>
        </div>
      </div>

    </div>
  );
}