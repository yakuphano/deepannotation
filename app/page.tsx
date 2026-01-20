"use client"

import React from 'react';

export default function Home() {
  return (
    // DÜZENLEME:
    // pt-28 -> pt-20: Yazıları biraz daha yukarı çektik (Navbar'a bindirmeden).
    // pb-4 -> pb-0: Alttaki ekstra boşluğu kaldırdık.
    <div className="w-full flex-1 flex flex-col justify-center items-center px-6 md:px-24 pt-20 pb-0 md:py-0">
      
      {/* Yazı Alanı */}
      <div className="text-center space-y-6 md:space-y-8 w-full max-w-4xl">
        
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-2 opacity-0 animate-[slideInLeft_1s_ease-out_forwards]">
          DeepAnnotation
        </h1>

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 text-base md:text-xl text-white/90 leading-relaxed font-light opacity-0 animate-[slideInLeft_1s_ease-out_0.5s_forwards]">
          <p>
            At DeepAnnotation, we architect the definitive ground truth that powers the world&apos;s most advanced Artificial Intelligence systems. We go beyond simple data labeling to provide a comprehensive, enterprise-grade data infrastructure that transforms raw, unstructured information into high-fidelity training assets.
          </p>
          <p>
            By synthesizing the nuanced understanding of expert human annotators with the efficiency of automated validation pipelines, we deliver the precision-driven datasets necessary to train robust, production-ready machine learning models.
          </p>
        </div>
      </div>

    </div>
  );
}