"use client"
import { Shield, Layers, Users, Lock, Zap } from "lucide-react"

const reasons = [
  { title: "Multi-Level Quality Control", description: "Every annotation task passes through multiple layers...", icon: Shield },
  { title: "True Multi-Modal Expertise", description: "We operate across image, video, text, speech...", icon: Layers },
  { title: "Enterprise-Scale Operations", description: "From pilot projects to millions of data points...", icon: Users },
  { title: "Security & Confidentiality First", description: "We follow strict enterprise-grade security standards...", icon: Lock },
  { title: "Fast, Reliable Delivery", description: "Speed matters in AI development...", icon: Zap }
]

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">Why Choose DeepAnnotation</h1>
        
        <p className="text-center text-white/90 max-w-3xl mx-auto mb-12 md:mb-20 text-sm md:text-base">
          DeepAnnotation partners with AI-driven organizations to deliver reliable solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                {/* Kart bg-white/10 ve ikon text-slate-900 */}
                <div className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-8 transition-all duration-300 group-hover:border-white/50 h-full">
                  <Icon className="w-10 h-10 text-slate-900 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{reason.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}