"use client"

import LottieBackground from "./components/LottieBackground"

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* LOTTIE BACKGROUND */}
      <LottieBackground />

      {/* OKUNABİLİRLİK İÇİN KARARTMA (Overlay) */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* SAYFA İÇERİĞİ */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-6xl font-bold">
          DeepAnnotation
        </h1>

        <p className="text-xl text-blue-400 mt-6">
          High-Quality Data for Smarter AI
        </p>

        <p className="max-w-2xl mt-6 text-slate-300">
          Enterprise-grade data annotation and AI training services
          for production machine learning systems.
        </p>
      </div>
    </section>
  )
}