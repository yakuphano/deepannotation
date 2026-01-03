import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden pt-20">
      
      {/* ARKA PLAN ANIMASYONU / GÖRSELİ - ESKİ HALİNE GETİRİLDİ */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/hero-bg.svg" // Görsel isminin doğruluğundan emin ol (farklıysa düzelt)
          alt="Background Circuit"
          width={1200}
          height={1200}
          className="object-contain opacity-60 md:opacity-80"
          priority
        />
      </div>

      {/* HERO İÇERİK - ÖN PLANDA */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        
        {/* BAŞLIK: Mobilde sığar (text-4xl/5xl), Bilgisayarda ideal boyutta (md:text-7xl) */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] drop-shadow-2xl">
          DeepAnnotation
        </h1>
        
        {/* ALT BAŞLIK */}
        <p className="mt-4 md:mt-6 text-lg md:text-2xl text-blue-400 font-bold tracking-wide">
          High-Quality Data for Smarter AI
        </p>
        
        {/* AÇIKLAMA */}
        <p className="mt-4 md:mt-6 text-slate-400 text-sm md:text-lg max-w-[650px] leading-relaxed mx-auto">
          Enterprise-grade data annotation and AI training services for 
          production machine learning systems.
        </p>

        {/* BUTON */}
        <div className="mt-8 md:mt-12">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            Get Started
          </button>
        </div>

      </section>

      {/* ALT GEÇİŞ EFEKTİ */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
    </main>
  );
}