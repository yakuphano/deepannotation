import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* ARKA PLAN ANIMASYONU - Kesin görünürlük için z-index ve özel kapsayıcı */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
        <Image
          src="/hero-bg.svg" 
          alt="Background Circuit"
          width={1200}
          height={1200}
          className="object-contain opacity-80 select-none"
          priority
        />
      </div>

      {/* İÇERİK KATMANI - Animasyonun üzerinde durması için z-index artırıldı */}
      <section className="relative flex flex-col items-center justify-center px-6 text-center" style={{ zIndex: 10 }}>
        
        {/* BAŞLIK: Mobilde sığar (text-4xl), Bilgisayarda orijinal boyut (md:text-8xl) */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
          DeepAnnotation
        </h1>
        
        {/* ALT BAŞLIK */}
        <p className="mt-6 text-lg md:text-xl text-blue-400 font-bold tracking-wide">
          High-Quality Data for Smarter AI
        </p>
        
        {/* AÇIKLAMA METNİ */}
        <p className="mt-4 text-slate-400 text-sm md:text-base max-w-[500px] mx-auto">
          Enterprise-grade data annotation and AI training services for 
          production machine learning systems.
        </p>

        {/* BUTON */}
        <div className="mt-10">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>

      </section>

      {/* ALT GRADIENT - Sayfanın alt kısmındaki yumuşak geçiş */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" style={{ zIndex: 5 }}></div>
    </main>
  );
}