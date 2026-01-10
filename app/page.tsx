export default function Home() {
  return (
    /* items-start: İçeriği sola yaslar
       text-left: Metni sola hizalar
       md:px-20: Soldan boşluk bırakır
       justify-center: Dikeyde ortalar (ekranın tam ortasında durur)
    */
    <div className="flex flex-col items-start justify-center min-h-screen px-6 md:px-24 text-left">
      
      {/* BAŞLIK - Soldan gelen animasyon */}
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-8 pb-2 opacity-0 animate-[slideInLeft_1s_ease-out_forwards]">
        DeepAnnotation
      </h1>

      {/* UZUN METİN - Gecikmeli soldan gelen animasyon */}
      <div className="max-w-3xl space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-light opacity-0 animate-[slideInLeft_1s_ease-out_0.5s_forwards]">
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