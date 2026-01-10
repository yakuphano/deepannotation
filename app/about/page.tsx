import React from 'react';
import { Users, Target, Zap, Maximize, ShieldCheck, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-48 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Başlık */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            Shaping the Future of Data
          </h1>
        </div>

        <div className="grid gap-16">
          
          {/* 1. WHO WE ARE (Önceki zenginleştirilmiş hali korundu) */}
          <section className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
              Who We Are
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-white/90 leading-relaxed">
              <p>
                DeepAnnotation is not just a technology provider; we are a strategic partner dedicated to bridging the gap between raw, chaotic data and intelligent algorithms. Born from a deep passion for Artificial Intelligence, we operate at the intersection of human expertise and machine precision.
              </p>
              <p>
                We serve as the architects of the datasets that power the world&apos;s most advanced machine learning models. By combining a global workforce of expert annotators with cutting-edge quality control tools, we ensure that every pixel, text, and audio clip contributes to a smarter, more efficient future.
              </p>
            </div>
          </section>

          {/* 2. OUR MISSION (Önceki zenginleştirilmiş hali korundu) */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
              Why We Are Here (Our Mission)
            </h2>
            <div className="space-y-4 text-lg text-white/90 leading-relaxed">
              <p>
                Our mission is to accelerate the global adoption of AI by solving its most critical bottleneck: high-quality data. We exist to transform complex, unstructured information into precise, actionable insights that drive model performance to new heights.
              </p>
              <p>
                Whether it is for autonomous systems, natural language processing, or computer vision, we are committed to delivering the &quot;ground truth&quot; that empowers enterprises to build reliable, ethical, and scalable AI solutions with absolute confidence.
              </p>
            </div>
          </section>

          {/* 3. CORE VALUES (YENİ VE ZENGİNLEŞTİRİLMİŞ İÇERİK) */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-white" />
              What Makes Us Different?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Precision", 
                  icon: <Zap className="w-5 h-5 text-white mb-4" />, 
                  desc: "We define precision not just as correctness, but as the absolute truth. Our rigorous, multi-tiered quality control process involves expert human annotators and automated validation layers working in unison to capture every nuance, ensuring your models are trained on data that is free from ambiguity." 
                },
                { 
                  title: "Scalability", 
                  icon: <Maximize className="w-5 h-5 text-white mb-4" />, 
                  desc: "Whether you need a thousand labeled images or a billion data points, our infrastructure adapts instantly. We offer an elastic, global workforce and high-throughput pipelines that guarantee rapid delivery without ever compromising the gold-standard quality that defines our brand." 
                },
                { 
                  title: "Security", 
                  icon: <ShieldCheck className="w-5 h-5 text-white mb-4" />, 
                  desc: "In an era of sensitive information, trust is paramount. We implement defense-in-depth security measures, including strictly isolated environments, encrypted data transfer protocols, and comprehensive non-disclosure agreements, ensuring that your proprietary assets remain completely confidential." 
                }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
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

          {/* 4. VISION (YENİ VE ZENGİNLEŞTİRİLMİŞ İÇERİK) */}
          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-widest flex items-center justify-center gap-3">
                <Eye className="w-8 h-8 text-white" />
                Our Vision
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed italic">
                &quot;We envision a future where Artificial Intelligence acts as a seamless extension of human capability, solving the world&apos;s most complex challenges. Our goal is to be the cornerstone of this revolution by providing the high-fidelity &apos;ground truth&apos; that allows AI to perceive, understand, and interact with the world ethically, accurately, and effectively.&quot;
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}