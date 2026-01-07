"use client"

import { Shield, Layers, Users, Lock, Zap } from "lucide-react"

const reasons = [
  {
    title: "Multi-Level Quality Control",
    description: "Every annotation task at DeepAnnotation passes through multiple layers of quality assurance. We combine expert human reviewers, consensus-based validation, and automated checks to ensure consistently high accuracy at scale.",
    icon: Shield,
  },
  {
    title: "True Multi-Modal Expertise",
    description: "We operate across image, video, text, speech, and search relevance domains. Our teams are trained to handle complex, multi-modal datasets required by modern AI and large language model systems.",
    icon: Layers,
  },
  {
    title: "Enterprise-Scale Operations",
    description: "From pilot projects to millions of data points, DeepAnnotation scales seamlessly. Our global workforce and production-ready workflows are designed for enterprise timelines and volumes.",
    icon: Users,
  },
  {
    title: "Security & Confidentiality First",
    description: "We follow strict enterprise-grade security standards including NDA enforcement, access control, data isolation, and secure infrastructure  protecting your most sensitive datasets.",
    icon: Lock,
  },
  {
    title: "Fast, Reliable Delivery",
    description: "Speed matters in AI development. Our optimized workflows and dedicated project management ensure fast turnaround without compromising data quality or consistency.",
    icon: Zap,
  },
]

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Why Choose DeepAnnotation
        </h1>

        <p className="text-center text-slate-400 max-w-3xl mx-auto mb-12 md:mb-20 text-sm md:text-base">
          DeepAnnotation partners with AI-driven organizations to deliver
          reliable, secure, and scalable data annotation solutions that power
          real-world machine learning systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="group relative">
                {/* GLOW KATMANI */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>

                <div
                  className="
                    relative rounded-2xl
                    border border-white/10 bg-slate-950
                    p-6 md:p-8 transition-all duration-300
                    group-hover:border-blue-500/50
                    h-full
                  "
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4 md:mb-6 group-hover:scale-110 transition-transform" />

                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                    {reason.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}