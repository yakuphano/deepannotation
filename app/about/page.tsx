import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* ANA BAŞLIK */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            Shaping the Future of Data
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
        </div>

        <div className="grid gap-16">
          
          {/* 1. WHO WE ARE - MAVİ ÇİZGİ KALDIRILDI VE HİZALANDI */}
          <section className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-blue-500 text-lg font-black">01.</span> Who We Are
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed py-2">
              "DeepAnnotation is a young and passionate technology venture that believes in the power of data in the world of Artificial Intelligence and Machine Learning. We set out with the awareness that the success of AI models depends on the quality of the data behind them."
            </p>
          </section>

          {/* 2. OUR MISSION - HİZALAMA KONTROL EDİLDİ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-blue-500 text-lg font-black">02.</span> Why We Are Here (Our Mission)
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-400 leading-relaxed">
                We transform complex datasets into meaningful and actionable insights for your AI models.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our goal is to accelerate innovation processes by providing high-precision, human-verified data labeling services to technology teams of all scales.
              </p>
            </div>
          </section>

          {/* 3. CORE VALUES - GLOW EFEKTLİ KUTULAR */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-blue-500 text-lg font-black">03.</span> What Makes Us Different?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Precision", desc: "A meticulous working principle that does not miss even the smallest detail." },
                { title: "Scalability", desc: "The promise of maintaining the same quality standards no matter how large your project is." },
                { title: "Security", desc: "The confidentiality and security of your data are our highest priorities." }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative p-8 bg-slate-950 border border-white/10 rounded-2xl h-full transition-colors duration-300 group-hover:border-blue-500/50">
                    <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. VISION - GLOW EFEKTİ */}
          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative p-10 bg-slate-900/40 border border-white/10 rounded-3xl text-center backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-widest">Our Vision</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed italic">
                "To contribute to the potential of Artificial Intelligence to improve the world and to be the most trusted solution partner that comes to mind when it comes to data annotation."
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}