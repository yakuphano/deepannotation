import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* ANA BAŞLIK */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Shaping the Future of Data
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-16">
          
          {/* 1. WHO WE ARE */}
          <section className="relative group">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <span className="text-slate-500 text-lg">01.</span> Who We Are
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed border-l-2 border-blue-500/30 pl-6 italic">
              "DeepAnnotation is a young and passionate technology venture that believes in the power of data in the world of Artificial Intelligence and Machine Learning. We set out with the awareness that the success of AI models depends on the quality of the data behind them."
            </p>
          </section>

          {/* 2. OUR MISSION */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <span className="text-slate-500 text-lg">02.</span> Why We Are Here (Our Mission)
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              We transform complex datasets into meaningful and actionable insights for your AI models.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our goal is to accelerate innovation processes by providing high-precision, human-verified data labeling services to technology teams of all scales.
            </p>
          </section>

          {/* 3. CORE VALUES (KUTUCUKLU TASARIM) */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3">
              <span className="text-slate-500 text-lg">03.</span> What Makes Us Different?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Precision</h3>
                <p className="text-slate-400 text-sm">A meticulous working principle that does not miss even the smallest detail.</p>
              </div>
              <div className="p-8 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Scalability</h3>
                <p className="text-slate-400 text-sm">The promise of maintaining the same quality standards no matter how large your project is.</p>
              </div>
              <div className="p-8 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Security</h3>
                <p className="text-slate-400 text-sm">The confidentiality and security of your data are our highest priorities.</p>
              </div>
            </div>
          </section>

          {/* 4. VISION */}
          <section className="p-10 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              "To contribute to the potential of Artificial Intelligence to improve the world and to be the most trusted solution partner that comes to mind when it comes to data annotation."
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}