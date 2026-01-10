"use client"

import { Shield, Layers, Users, Lock, Zap } from "lucide-react"

const reasons = [
  {
    title: "Multi-Level Quality Control",
    description: "Quality at DeepAnnotation is not merely a metric; it is a sophisticated engineering discipline. We employ a rigorous, multi-tiered validation architecture that begins with automated programmatic checks to eliminate syntax errors, followed by a consensus-based human review process where multiple expert annotators independently label the same asset to calculate Inter-Annotator Agreement (IAA) scores. Finally, a dedicated layer of 'Super Reviewers'—subject matter experts in specific domains—performs statistical sampling and root-cause analysis on edge cases. This closed-loop quality system ensures that your models are trained on data that meets a 99.8% accuracy threshold, effectively eliminating bias and noise from your ground truth datasets.",
    icon: Shield,
  },
  {
    title: "True Multi-Modal Expertise",
    description: "Modern AI systems require more than just simple image bounding boxes. We have cultivated deep, vertical-specific expertise across the entire spectrum of data modalities. Our specialized teams are trained in complex Computer Vision tasks (including 3D LiDAR point cloud segmentation, cuboid annotation for autonomous driving, and pixel-perfect semantic segmentation for medical imaging), advanced Natural Language Processing (such as hierarchical intent classification, multilingual Named Entity Recognition, and sentiment nuance analysis), and intricate Audio processing tasks like speaker diarization and phoneme-level timestamping. We understand the semantic context behind every data point.",
    icon: Layers,
  },
  {
    title: "Enterprise-Scale Operations",
    description: "We are architected to serve the world's most demanding AI organizations. Our infrastructure is built on an elastic workforce model that allows us to instantly scale from a pilot phase of a few thousand assets to full-scale production pipelines processing millions of data points per week. We operate 24/7 across multiple time zones, ensuring that your data supply chain remains continuous and uninterrupted. Coupled with our robust project management platform, which offers real-time visibility into throughput and quality metrics, we function as a seamless extension of your internal data operations team, capable of absorbing massive spikes in demand without compromising SLA timelines.",
    icon: Users,
  },
  {
    title: "Security & Confidentiality First",
    description: "In an era where data is the new oil, protecting your intellectual property is our absolute priority. We enforce a zero-trust security model characterized by defense-in-depth protocols. This includes strictly isolated annotation environments (VDI) that prevent local data storage, biometric access controls for all workforce members, and military-grade end-to-end encryption for data both in transit and at rest. We are fully compliant with global standards including GDPR, CCPA, and SOC2 Type II, and we offer bespoke deployment options such as on-premise solutions or private cloud instances to ensure your sensitive proprietary information never leaves your controlled perimeter.",
    icon: Lock,
  },
  {
    title: "Fast, Reliable Delivery",
    description: "Time-to-market is the defining factor in the AI race. We accelerate your development lifecycle by integrating advanced 'human-in-the-loop' technologies, such as AI-assisted pre-labeling and active learning workflows, which can reduce manual annotation time by up to 60%. Our API-first approach allows for direct integration into your MLOps pipelines, enabling automated data ingestion and delivery. We provide strict, contractually guaranteed Service Level Agreements (SLAs) regarding turnaround times, ensuring that your data science teams receive the high-fidelity training data they need exactly when they need it, allowing you to iterate on your models faster than the competition.",
    icon: Zap,
  },
]

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Başlık Alanı */}
        <h1 className="text-4xl md:text-6xl font-black text-center mb-8 text-white tracking-tight">
          Why Choose DeepAnnotation
        </h1>

        <p className="text-center text-white/90 max-w-4xl mx-auto mb-16 md:mb-24 text-base md:text-lg leading-relaxed">
          DeepAnnotation partners with forward-thinking AI organizations to deliver
          reliable, secure, and scalable data annotation solutions that power
          the next generation of mission-critical machine learning systems.
        </p>

        {/* Grid Yapısı - Kartlar içeriğe göre uzayacak */}
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="group relative flex">
                {/* Glow Efekti */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                {/* Kart Yapısı: Şeffaf (bg-white/10) ve Beyaz İkonlar */}
                <div
                  className="
                    relative rounded-3xl w-full
                    border border-white/20 bg-white/10 backdrop-blur-md
                    p-8 md:p-12 transition-all duration-300
                    group-hover:border-white/50
                    flex flex-col md:flex-row gap-8 items-start
                  "
                >
                  {/* İkon Alanı */}
                  <div className="flex-shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Icon className="w-12 h-12 md:w-16 md:h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* İçerik Alanı */}
                  <div className="flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">
                      {reason.title}
                    </h3>

                    {/* Yazı alanı - text-lg (büyük) ve leading-relaxed (ferah) */}
                    <p className="text-white/90 leading-relaxed text-base md:text-lg text-justify">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}