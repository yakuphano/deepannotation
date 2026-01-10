"use client"
import { Brain, Database, Cpu } from "lucide-react"

const services = [
  { title: "Image Annotation", description: "Image classification, semantic segmentation...", icon: Database },
  { title: "Search Relevance", description: "Query result relevance identification...", icon: Brain },
  { title: "Video Annotation", description: "Video relevance for search queries...", icon: Cpu },
  { title: "Speech Transcription", description: "Audio to text validation...", icon: Brain },
  { title: "Text Annotation", description: "Sentiment analysis for social media...", icon: Database },
  { title: "Other Services", description: "Ad hoc data collection...", icon: Cpu },
  { title: "AI Model Training", description: "Custom model training...", icon: Brain },
  { title: "Enterprise AI Solutions", description: "End to end AI pipelines...", icon: Cpu },
]

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-6 py-20 md:py-32 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">Our Services</h1>
        <p className="text-center text-white/90 max-w-2xl mx-auto mb-12 md:mb-16">
          Enterprise-grade AI services trusted by global teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                
                {/* Kart bg-white/10 ve ikon text-slate-900 */}
                <div className="relative rounded-2xl border border-white/20 p-6 md:p-8 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-white/50 h-full">
                  <Icon className="w-10 h-10 text-slate-900 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-12 md:mt-20">
          <a href="/contact" className="inline-block px-8 py-3 md:px-10 md:py-4 rounded-full bg-blue-500 text-black font-semibold hover:bg-blue-400 transition">
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}