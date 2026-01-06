import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-32 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          About Us
        </h1>
        
        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl text-white font-semibold mb-4">Empowering AI Innovation through Precision Data</h2>
            <p>
              At DeepAnnotation, we believe that the next generation of Artificial Intelligence is only as good as the data that fuels it. 
              As a forward-thinking data services provider, we bridge the gap between complex raw information and high-performing machine learning models.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm">
              <h3 className="text-blue-400 font-bold text-xl mb-3">Our Mission</h3>
              <p className="text-sm md:text-base">
                To accelerate AI development by providing seamless, scalable, and high-precision data annotation services. 
                We empower AI teams to focus on model architecture while we ensure their training data is accurate.
              </p>
            </div>
            
            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm">
              <h3 className="text-purple-400 font-bold text-xl mb-3">Our Vision</h3>
              <p className="text-sm md:text-base">
                To become the global cornerstone of data integrity in the AI ecosystem, fostering a world where technology 
                understands and interacts with human reality more accurately than ever before.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-white font-semibold mb-6">Why DeepAnnotation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="text-white font-medium">Human-in-the-Loop</h4>
                <p className="text-sm text-gray-400">Meticulous human verification to ensure every data point meets the highest quality standards.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium">Scalability & Agility</h4>
                <p className="text-sm text-gray-400">A dynamic team that scales quickly according to your project's evolving needs.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium">Data Security</h4>
                <p className="text-sm text-gray-400">Rigorous security protocols to protect your proprietary information and intellectual property.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}