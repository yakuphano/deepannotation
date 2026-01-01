"use client"

import { Shield, Layers, Users, Lock, Zap } from "lucide-react"

const reasons = [
  {
    title: "Multi-Level Quality Control",
    description:
      "Every annotation task at DeepAnnotation passes through multiple layers of quality assurance. We combine expert human reviewers, consensus-based validation, and automated checks to ensure consistently high accuracy at scale.",
    icon: Shield,
  },
  {
    title: "True Multi-Modal Expertise",
    description:
      "We operate across image, video, text, speech, and search relevance domains. Our teams are trained to handle complex, multi-modal datasets required by modern AI and large language model systems.",
    icon: Layers,
  },
  {
    title: "Enterprise-Scale Operations",
    description:
      "From pilot projects to millions of data points, DeepAnnotation scales seamlessly. Our global workforce and production-ready workflows are designed for enterprise timelines and volumes.",
    icon: Users,
  },
  {
    title: "Security & Confidentiality First",
    description:
      "We follow strict enterprise-grade security standards including NDA enforcement, access control, data isolation, and secure infrastructure — protecting your most sensitive datasets.",
    icon: Lock,
  },
  {
    title: "Fast, Reliable Delivery",
    description:
      "Speed matters in AI development. Our optimized workflows and dedicated project management ensure fast turnaround without compromising data quality or consistency.",
    icon: Zap,
  },
]

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">
          Why Choose DeepAnnotation
        </h1>

        <p className="text-center text-slate-400 max-w-3xl mx-auto mb-20">
          DeepAnnotation partners with AI-driven organizations to deliver
          reliable, secure, and scalable data annotation solutions that power
          real-world machine learning systems.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="
                  group relative rounded-2xl
                  border border-white/10 bg-white/5
                  p-8 transition-all duration-300
                  hover:bg-white/10
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                "
              >
                <Icon className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />

                <h3 className="text-2xl font-semibold mb-4">
                  {reason.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
