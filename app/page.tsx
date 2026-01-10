"use client"

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/lottie/ai-brain.json")
      .then((res) => {
        if (!res.ok) throw new Error("Dosya bulunamadı");
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Hata:", err));
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-24 pt-20 lg:pt-0 relative z-10">
      
      {/* SOL SÜTUN - ANİMASYON SADECE BURADA */}
      <div className="text-left space-y-8 order-2 lg:order-1">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-2 opacity-0 animate-[slideInLeft_1s_ease-out_forwards]">
          DeepAnnotation
        </h1>

        <div className="max-w-2xl space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-light opacity-0 animate-[slideInLeft_1s_ease-out_0.5s_forwards]">
          <p>
            At DeepAnnotation, we architect the definitive ground truth that powers the world&apos;s most advanced Artificial Intelligence systems. We go beyond simple data labeling to provide a comprehensive, enterprise-grade data infrastructure that transforms raw, unstructured information into high-fidelity training assets.
          </p>
          <p>
            By synthesizing the nuanced understanding of expert human annotators with the efficiency of automated validation pipelines, we deliver the precision-driven datasets necessary to train robust, production-ready machine learning models.
          </p>
        </div>
      </div>

      {/* SAĞ SÜTUN - LOTTIE */}
      <div className="flex justify-center items-center h-full w-full order-1 lg:order-2">
        <div className="relative w-full max-w-[550px] z-10">
          {animationData && (
            <Lottie animationData={animationData} loop={true} className="w-full h-full" />
          )}
        </div>
      </div>

    </div>
  );
}