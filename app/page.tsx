import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* ARKA PLAN - Animasyonun göründüğü orijinal katman */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/hero-bg.svg" 
          alt="Background Circuit"
          width={1000}
          height={1000}
          className="object-contain opacity-70"
          priority
        />
      </div>

      {/* İÇERİK - Yazı boyutları bilgisayarda normal, mobilde sığacak şekilde */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        
        {/* BAŞLIK: Mobilde sığması için text-5xl, Bilgisayarda orijinal text-8xl */}
        <h1 className="text-[42px] leading-tight sm:text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
          DeepAnnotation
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-blue-400 font-bold tracking-wide">
          High-Quality Data for Smarter AI
        </p>
        
        <p className="mt-4 text-slate-400 text-sm md:text-base max-w-[500px] mx-auto">
          Enterprise-grade data annotation and AI training services for 
          production machine learning systems.
        </p>

        <div className="mt-10">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Get Started
          </button>
        </div>

      </section>

      {/* Alt Karartma */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-0"></div>
    </main>
  );
}