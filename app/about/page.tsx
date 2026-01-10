import React from 'react';
import { Users, Target, Zap, Maximize, ShieldCheck, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    /* pt-32 yerine pt-48 yapılarak içerik aşağı indirildi */
    <div className="min-h-screen bg-transparent text-white pt-48 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            Shaping the Future of Data
          </h1>
        </div>

        <div className="grid gap-16">
          
          <section className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              {/* İkon koyu yapıldı */}
              <Users className="w-6 h-6 md:w-8 md:h-8 text-slate-900" />
              Who We Are
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed py-2">
              DeepAnnotation is a young and passionate technology venture that believes in the power of data in the world of Artificial Intelligence and Machine Learning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              {/* İkon koyu yapıldı */}
              <Target className="w-6 h-6 md:w-8 md:h-8 text-slate-900" />
              Why We Are Here (Our Mission)
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-white/90 leading-relaxed">
                We transform complex datasets into meaningful and actionable insights for your AI models.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              {/* İkon koyu yapıldı */}
              <Zap className="w-6 h-6 text-slate-900" />
              What Makes Us Different?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Precision", 
                  icon: <Zap className="w-5 h-5 text-slate-900 mb-4" />, 
                  desc: "A meticulous working principle that does not miss even the smallest detail." 
                },
                { 
                  title: "Scalability", 
                  icon: <Maximize className="w-5 h-5 text-slate-900 mb-4" />, 
                  desc: "The promise of maintaining the same quality standards no matter how large your project is." 
                },
                { 
                  title: "Security", 
                  icon: <ShieldCheck className="w-5 h-5 text-slate-900 mb-4" />, 
                  desc: "The confidentiality and security of your data are our highest priorities." 
                }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                  {/* Kart transparan (bg-white/10) yapıldı */}
                  <div className="relative p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl h-full transition-colors duration-300 group-hover:border-white/50">
                    {item.icon}
                    <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-widest flex items-center justify-center gap-3">
                {/* İkon koyu yapıldı */}
                <Eye className="w-8 h-8 text-slate-900" />
                Our Vision
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed italic">
                To contribute to the potential of Artificial Intelligence to improve the world...
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}