"use client"
import { Brain, Database, Cpu } from "lucide-react"

const services = [
  { title: "Image Annotation", description: "Image classification, semantic segmentation, and object detection for computer vision models.", icon: Database },
  { title: "Search Relevance", description: "Query result relevance identification, relevance event validation, and entity classification.", icon: Brain },
  { title: "Video Annotation", description: "Video relevance for search queries, object detection in video, and video tracking.", icon: Cpu },
  { title: "Speech Transcription", description: "Audio to text validation, conversation transcription, and speech relevance accuracy checks.", icon: Brain },
  { title: "Text Annotation", description: "Sentiment analysis for social media, document classification, and content labeling.", icon: Database },
  { title: "Other Services", description: "Ad hoc data collection, information correction, content moderation, surveys, and feedback labeling.", icon: Cpu },
  { title: "AI Model Training", description: "Custom model training and fine-tuning optimized for production scale AI systems.", icon: Brain },
  { title: "Enterprise AI Solutions", description: "End to end AI pipelines, MLOps integration, and scalable infrastructure.", icon: Cpu }
]

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-6 py-20 md:py-32 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">Our Services</h1>
        <p className="text-center text-white max-w-2xl mx-auto mb-12 md:mb-16">Enterprise-grade AI services trusted by global teams.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative rounded-2xl border border-white/20 p-6 md:p-8 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-white/50 h-full">
                  <Icon className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}