export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-6 pt-48 md:pt-64 text-center">
      
      {/* BAŞLIK - Animasyonlu giriş */}
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-8 pb-2 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
        DeepAnnotation
      </h1>

      {/* ZENGİNLEŞTİRİLMİŞ UZUN METİN - Gecikmeli animasyonlu giriş */}
      <div className="max-w-4xl space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-light opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
        <p>
          At DeepAnnotation, we architect the definitive ground truth that powers the world&apos;s most advanced Artificial Intelligence systems. We go beyond simple data labeling to provide a comprehensive, enterprise-grade data infrastructure that transforms raw, unstructured information into high-fidelity training assets.
        </p>
        <p>
          By synthesizing the nuanced understanding of expert human annotators with the efficiency of automated validation pipelines, we deliver the precision-driven datasets necessary to train robust, production-ready machine learning models. Whether you are navigating the complexities of Computer Vision, Natural Language Processing, or Generative AI, our scalable workforce solutions and rigorous quality assurance protocols are designed to accelerate your time-to-market and empower the next generation of intelligent technologies.
        </p>
      </div>

    </div>
  )
}