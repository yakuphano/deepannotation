"use client"

import { Brain, Database, Cpu } from "lucide-react"

const services = [
  {
    title: "Image Annotation",
    context: "Support for training/validation pipelines in computer vision models, including GPU-accelerated model inference validation.",
    description: "Unlock the full potential of computer vision with pixel-perfect labeling. From bounding boxes and polygon segmentation to keypoint annotation, we provide the high-fidelity training data needed for autonomous driving, medical imaging, and facial recognition systems.",
    icon: Database,
  },
  {
    title: "Search Relevance",
    context: "Human-verified relevance scoring used in retrieval systems and LLM evaluation.",
    description: "Optimize your search algorithms with human-verified relevance scoring. We evaluate query-document pairs, analyze user intent, and classify entities to ensure your search engine delivers the most accurate and meaningful results for every user interaction.",
    icon: Brain,
  },
  {
    title: "Video Annotation",
    context: "Temporal data validation for autonomous systems and dynamic scene understanding.",
    description: "Train sophisticated temporal models with frame-by-frame video labeling. We handle complex object tracking, action recognition, and temporal segmentation, ensuring continuity and accuracy across dynamic video sequences for security and autonomous systems.",
    icon: Cpu,
  },
  {
    title: "Speech Transcription",
    context: "Accurate audio-to-text for training speech recognition and conversation models.",
    description: "Convert audio into actionable data with high-accuracy transcription and linguistic validation. Our native speakers handle dialects, nuances, and multi-speaker environments to perfect your speech-to-text models and conversational AI agents.",
    icon: Brain,
  },
  {
    title: "Text Annotation",
    context: "Semantic labeling for NLP tasks including NER, sentiment, and intent classification.",
    description: "Empower your NLP models with deep semantic understanding. We offer granular sentiment analysis, named entity recognition (NER), and intent classification to help your AI grasp the subtleties of human language across diverse domains.",
    icon: Database,
  },
  {
    title: "Other Services",
    context: "Bespoke data collection and moderation for edge cases and custom dataset requirements.",
    description: "Beyond standard labeling, we offer bespoke data solutions tailored to your unique needs. This includes ad-hoc data collection, content moderation, surveys, and information correction services designed to address niche edge cases.",
    icon: Cpu,
  },
  {
    title: "AI Model Training",
    context: "Custom architecture fine-tuning and performance optimization for production deployment.",
    description: "Accelerate your path to production with our custom model training services. We fine-tune state-of-the-art architectures on your proprietary data, optimizing for specific performance metrics to deliver deployment-ready AI solutions.",
    icon: Brain,
  },
  {
    title: "Enterprise AI Solutions",
    context: "End-to-end MLOps integration and scalable infrastructure for mission-critical AI.",
    description: "Scale your AI operations with end-to-end infrastructure support. We design and implement robust MLOps pipelines, manage scalable annotation workflows, and provide the strategic consulting needed to integrate AI into your core business processes.",
    icon: Cpu,
  },
]

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-6 py-20 md:py-32 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Başlık Alanı */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
          Our Services
        </h1>

        <p className="text-center text-white/90 max-w-2xl mx-auto mb-12 md:mb-16 text-sm md:text-base">
          Enterprise-grade AI services trusted by global teams building
          mission-critical machine learning systems.
        </p>

        {/* Hizmet Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="group relative">
                {/* Glow Efekti */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                
                {/* Kart Tasarımı */}
                <div
                  className="
                    relative rounded-2xl border border-white/20 p-6 md:p-8
                    bg-white/10 backdrop-blur-md transition-all duration-300
                    group-hover:border-white/50
                    h-full flex flex-col
                  "
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform" />

                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>

                  {/* YENİ EKLENEN KISIM: AI Workflow Context */}
                  <p className="text-blue-300 text-xs md:text-sm font-medium mb-4 italic border-l-2 border-blue-400 pl-3">
                    {service.context}
                  </p>

                  <p className="text-white/90 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}