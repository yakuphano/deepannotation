import React from 'react';
import { Users, Target, Zap, Maximize, ShieldCheck, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-black text-center mb-20 text-white">Shaping the Future of Data</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            { title: "Precision", icon: <Zap className="text-white mb-4" />, desc: "Meticulous working principle." },
            { title: "Scalability", icon: <Maximize className="text-white mb-4" />, desc: "Quality standards at any scale." },
            { title: "Security", icon: <ShieldCheck className="text-white mb-4" />, desc: "Confidentiality is our priority." }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 transition duration-500"></div>
              <div className="relative p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl h-full transition-all group-hover:border-white/50">
                {item.icon}
                <h3 className="text-xl font-black text-white mb-4 uppercase">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}