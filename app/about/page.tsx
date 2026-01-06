import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* ANA BAŞLIK */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-blue-100 via-white to-blue-100 bg-clip-text text-transparent">
            Shaping the Future of Data
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
        </div>

        <div className="grid gap-16">
          
          {/* 1. WHO WE ARE */}
          <section className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-blue-500 text-lg font-black">01.</span> Who We Are
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed border-l-4 border-blue-600 pl-6 bg-white/5 py-4 rounded-r-xl">
              "DeepAnnotation is a young and passionate technology venture that believes in the power of data in the world of Artificial Intelligence and Machine Learning. We set out with the awareness that the success of AI models depends on the quality of the data behind them."
            </p>
          </section>

          {/* 2. OUR MISSION */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-blue-500 text-lg font-black">02.</span> Why We Are Here (Our Mission)
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-white leading-relaxed">
                We transform complex datasets into meaningful and actionable insights for your AI models.
              </p>
              <p className="text-lg text-white leading-relaxed opacity-90">
                Our goal is to accelerate innovation processes by providing high-precision, human-verified data labeling services to technology teams of all scales.
              </p>
            </div>
          </section>

          {/* 3. CORE VALUES */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-blue-500 text-lg font-black">03.</span> What Makes Us Different?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 bg-slate-900 border border-white/20 rounded-2xl hover:bg-slate-800 transition-all duration-300">
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Precision</h3>
                <p className="text-white/80 text-sm leading-relaxed">A meticulous working principle that does not miss even the smallest detail.</p>
              </div>
              <div className="p-8 bg-slate-900 border border-white/20 rounded-2xl hover:bg-slate-800 transition-all duration-300">
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Scalability</h3>
                <p className="text-white/80 text-sm leading-relaxed">The promise of maintaining the same quality standards no matter how large your project is.</p>
              </div>
              <div className="p-8 bg-slate-900 border border-white/20 rounded-2xl hover:bg-slate-800 transition-all duration-300">
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Security</h3>
                <p className="text-white/80 text-sm leading-relaxed">The confidentiality and security of your data are our highest priorities.</p>
              </div>
            </div>
          </section>

          {/* 4. VISION */}
          <section className="p-10 bg-white/10 border-2 border-white/20 rounded-3xl text-center backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-widest">Our Vision</h2>
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-medium">
              "To contribute to the potential of Artificial Intelligence to improve the world and to be the most trusted solution partner that comes to mind when it comes to data annotation."
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}