import Link from "next/link"

export default function Home() {
  return (
    /* İçerik yukarıdan (pt-48) başlatılarak robot görselinin yüzünü kapatmaması sağlandı */
    <div className="flex flex-col items-center justify-start min-h-screen px-6 pt-48 md:pt-64 text-center">
      
      {/* BAŞLIK */}
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-8 pb-2">
        DeepAnnotation
      </h1>

      {/* ZENGİNLEŞTİRİLMİŞ UZUN METİN */}
      <div className="max-w-4xl space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-light">
        <p>
          At DeepAnnotation, we architect the definitive ground truth that powers the world&apos;s most advanced Artificial Intelligence systems. We go beyond simple data labeling to provide a comprehensive, enterprise-grade data infrastructure that transforms raw, unstructured information into high-fidelity training assets.
        </p>
        <p>
          By synthesizing the nuanced understanding of expert human annotators with the efficiency of automated validation pipelines, we deliver the precision-driven datasets necessary to train robust, production-ready machine learning models. Whether you are navigating the complexities of Computer Vision, Natural Language Processing, or Generative AI, our scalable workforce solutions and rigorous quality assurance protocols are designed to accelerate your time-to-market and empower the next generation of intelligent technologies.
        </p>
      </div>

      {/* AKSİYON BUTONLARI */}
      <div className="flex gap-4 mt-12">
        <Link
          href="/services"
          className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          Explore Services
        </Link>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-full border border-white text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
        >
          Contact Us
        </Link>
      </div>
      
    </div>
  )
}