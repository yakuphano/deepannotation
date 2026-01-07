"use client"

import { Brain, Database, Cpu } from "lucide-react"

const services = [
  {
    title: "Image Annotation",
    description: "Image classification, semantic segmentation, and object detection for computer vision models.",
    icon: Database,
  },
  {
    title: "Search Relevance",
    description: "Query result relevance identification, relevance event validation, and entity classification.",
    icon: Brain,
  },
  {
    title: "Video Annotation",
    description: "Video relevance for search queries, object detection in video, and video tracking.",
    icon: Cpu,
  },
  {
    title: "Speech Transcription",
    description: "Audio to text validation, conversation transcription, and speech relevance accuracy checks.",
    icon: Brain,
  },
  {
    title: "Text Annotation",
    description: "Sentiment analysis for social media, document classification, and content labeling.",
    icon: Database,
  },
  {
    title: "Other Services",
    description: "Ad hoc data collection, information correction, content moderation, surveys, and feedback labeling.",
    icon: Cpu,
  },
  {
    title: "AI Model Training",
    description: "Custom model training and fine-tuning optimized for production scale AI systems.",
    icon: Brain,
  },
  {
    title: "Enterprise AI Solutions",
    description: "End to end AI pipelines, MLOps integration, and scalable infrastructure.",
    icon: Cpu,
  },
]

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-6 py-20 md:py-32 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Our Services
        </h1>

        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12 md:mb-16 text-sm md:text-base">
          Enterprise-grade AI services trusted by global teams building
          mission-critical machine learning systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="group relative">
                {/* GLOW KATMANI */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
                
                <div
                  className="
                    relative rounded-2xl border border-white/10 p-6 md:p-8
                    bg-slate-950 transition-all duration-300
                    group-hover:border-blue-500/50
                    h-full
                  "
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4 md:mb-6 group-hover:scale-110 transition-transform" />

                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12 md:mt-20">
          <a
            href="/contact"
            className="inline-block px-8 py-3 md:px-10 md:py-4 rounded-full bg-blue-500 text-black font-semibold hover:bg-blue-400 transition text-sm md:text-base"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}