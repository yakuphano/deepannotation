import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-x-hidden pt-20">
      
      {/* Arka Plan Devre Kartı Görseli */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/hero-bg.svg" // Eğer görsel ismin farklıysa burayı güncelle
          alt="Background Circuit"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Hero İçerik Alanı */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        
        {/* ANA BAŞLIK: Mobilde sığması için text-5xl, Bilgisayarda text-8xl */}
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          DeepAnnotation
        </h1>
        
        {/* ALT BAŞLIK (Mavi Yazı) */}
        <p className="mt-6 text-xl md:text-2xl text-blue-400 font-bold tracking-wide">
          High-Quality Data for Smarter AI
        </p>
        
        {/* AÇIKLAMA METNİ */}
        <p className="mt-6 text-slate-400 text-base md:text-lg max-w-[650px] leading-relaxed">
          Enterprise-grade data annotation and AI training services for 
          production machine learning systems.
        </p>

        {/* OPSİYONEL: İstersen buraya bir buton ekleyebiliriz */}
        <div className="mt-10">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Get Started
          </button>
        </div>

      </section>

      {/* Sayfanın altında hafif bir karartma efekti */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
    </main>
  );
}