"use client"

import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { BoxSelect, Video, FileText, Mic2, Scale, Layers, Stethoscope, Boxes } from "lucide-react"

/** Unsplash — replace with your own assets anytime (https://unsplash.com/license) */
const us = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=800&h=450&q=80`

type ServiceItem = {
  title: string
  subtitle: string
  description: string
  /** Short label + detail (shown as sub-grid / list) */
  bullets?: { label: string; detail: string }[]
  icon: LucideIcon
  imageUrl: string
  imageAlt: string
  /** Subtle overlay tint on the hero photo */
  visualPreset?: "default" | "medical" | "lidar"
}

const services: ServiceItem[] = [
  {
    title: "Image Annotation",
    subtitle: "High-precision visual data labeling for next-generation Computer Vision.",
    description:
      "Unlock the full potential of computer vision with pixel-perfect labeling. We provide high-fidelity training data tailored for autonomous driving, medical imaging, and retail analytics. Our specialized techniques include:",
    bullets: [
      {
        label: "Bounding Boxes",
        detail: "Precision 2D/3D boxing for object detection.",
      },
      {
        label: "Polygon Segmentation",
        detail: "Exact contouring for irregular shapes and complex environments.",
      },
      {
        label: "Polyline Annotation",
        detail: "Ideal for lane detection, wire recognition, and road markings.",
      },
      {
        label: "Keypoint Labeling",
        detail: "Facial landmarks, skeletal tracking, and human pose estimation.",
      },
      {
        label: "Semantic Segmentation",
        detail: "Pixel-level classification for scene understanding.",
      },
    ],
    icon: BoxSelect,
    imageUrl: us("photo-1449965408869-eaa3f61731a7"),
    imageAlt: "Urban street scene representing visual data for detection and segmentation",
  },
  {
    title: "Medical Data Annotation",
    subtitle: "HIPAA-compliant precision labeling for healthcare AI and diagnostic imaging.",
    description:
      "Accelerate medical breakthroughs with expert-level annotation of clinical data. We support radiologists and researchers with high-accuracy labeling of complex medical datasets.",
    bullets: [
      {
        label: "Radiology Imaging",
        detail: "Accurate contouring and segmentation for MRI, CT, and X-ray scans.",
      },
      {
        label: "Pathology Slides",
        detail: "Cell-level classification and tissue segmentation in digital pathology.",
      },
      {
        label: "Anatomy Identification",
        detail: "Detailed labeling of organs, lesions, and anomalies.",
      },
      {
        label: "Compliance",
        detail: "Secure workflows designed for sensitive healthcare information.",
      },
    ],
    icon: Stethoscope,
    visualPreset: "medical",
    imageUrl: us("photo-1579684385127-1ef15d508118"),
    imageAlt: "Clinical environment and medical imaging technology",
  },
  {
    title: "LiDAR & 3D Point Cloud Annotation",
    subtitle: "Advanced spatial data labeling for autonomous navigation and 3D scene reconstruction.",
    description:
      "Power your spatial awareness models with precise 3D sensor fusion data. We provide granular annotation for LiDAR point clouds, enabling robust performance in complex 3D environments.",
    bullets: [
      {
        label: "3D Cuboid Labeling",
        detail: "Accurate 3D bounding boxes for vehicles, pedestrians, and obstacles.",
      },
      {
        label: "Point Cloud Segmentation",
        detail: "Pixel-perfect classification of 3D points for terrain and obstacle mapping.",
      },
      {
        label: "Multi-Sensor Fusion",
        detail: "Synchronized annotation between LiDAR and camera feeds for enhanced perception.",
      },
      {
        label: "Lanes & Boundaries",
        detail: "3D polyline labeling for road geometry and infrastructure.",
      },
    ],
    icon: Boxes,
    visualPreset: "lidar",
    imageUrl: us("photo-1469854523086-cc02fe5d8804"),
    imageAlt: "Highway and landscape representing spatial 3D sensing and navigation",
  },
  {
    title: "Video Annotation & Temporal Tracking",
    subtitle: "Master dynamic scene understanding with frame-by-frame continuity.",
    description:
      "Train sophisticated temporal models with seamless object tracking across video sequences.",
    bullets: [
      {
        label: "Object Tracking (Interpolation)",
        detail: "Maintaining unique IDs for objects across multiple frames.",
      },
      {
        label: "Action Recognition",
        detail: "Labeling specific human or machine behaviors over time.",
      },
      {
        label: "Event Logging",
        detail: "Identifying precise start and end points for complex activities.",
      },
    ],
    icon: Video,
    imageUrl: us("photo-1536240478700-b869277f8149"),
    imageAlt: "Video production workspace with editing timeline",
  },
  {
    title: "Text & NLP Annotation",
    subtitle: "Semantic labeling to bridge the gap between human language and AI.",
    description:
      "Empower your Large Language Models (LLMs) with deep linguistic understanding.",
    bullets: [
      {
        label: "Named Entity Recognition (NER)",
        detail: "Identifying people, places, organizations, and codes.",
      },
      {
        label: "Sentiment & Intent Analysis",
        detail: "Classifying the emotional tone and purpose of text.",
      },
      {
        label: "Text Classification",
        detail: "Categorizing documents into granular taxonomies.",
      },
    ],
    icon: FileText,
    imageUrl: us("photo-1455390582262-044cdead277a"),
    imageAlt: "Desk with notes and writing tools for text-focused work",
  },
  {
    title: "Audio & Speech Processing",
    subtitle: "Converting human speech into structured, actionable datasets.",
    description:
      "High-accuracy transcription and linguistic validation in multi-speaker environments.",
    bullets: [
      {
        label: "Phonetic Transcription",
        detail: "Capturing nuances in dialect and pronunciation.",
      },
      {
        label: "Speaker Diarization",
        detail: "Correctly attributing speech to different participants.",
      },
      {
        label: "Audio Classification",
        detail: "Labeling background noise, emotion, and audio events.",
      },
    ],
    icon: Mic2,
    imageUrl: us("photo-1598488035139-bdbb2231ce04"),
    imageAlt: "Studio microphone for speech and audio capture",
  },
  {
    title: "Search Relevance & RLHF",
    subtitle: "Human-in-the-loop evaluation for ranking and LLM performance.",
    description:
      "Optimize your algorithms with human-verified scoring and Reinforcement Learning from Human Feedback (RLHF).",
    bullets: [
      {
        label: "Query-Document Pairing",
        detail: "Evaluating the accuracy of search engine results.",
      },
      {
        label: "Comparison Ranking",
        detail: "Human preference testing for LLM responses.",
      },
      {
        label: "Hallucination Detection",
        detail: "Verifying the factual accuracy of AI-generated content.",
      },
    ],
    icon: Scale,
    imageUrl: us("photo-1460925895917-afdab827c52f"),
    imageAlt: "Laptop displaying charts and search analytics",
  },
  {
    title: "AI Model Training & MLOps",
    subtitle: "Bespoke model fine-tuning and production-ready infrastructure.",
    description:
      "Accelerate your path to deployment with custom fine-tuning and performance optimization.",
    bullets: [
      {
        label: "Custom Architecture Fine-tuning",
        detail: "Tailoring SOTA models (YOLO, ResNet, Transformers) to your data.",
      },
      {
        label: "Dataset Curating",
        detail: "Cleaning and balancing datasets to reduce model bias.",
      },
      {
        label: "End-to-End MLOps",
        detail: "Integrating annotation pipelines directly into your CI/CD workflow.",
      },
    ],
    icon: Layers,
    imageUrl: us("photo-1558494949-ef010cbdcc31"),
    imageAlt: "Server racks in a data center for MLOps infrastructure",
  },
]

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-6 py-20 md:py-32 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white tracking-tight">
          Our Services
        </h1>

        <p className="text-center text-white/90 max-w-2xl mx-auto mb-12 md:mb-16 text-sm md:text-base leading-relaxed">
          Enterprise-grade AI services trusted by global teams building mission-critical machine learning systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const preset = service.visualPreset ?? "default"
            const overlayTone =
              preset === "medical"
                ? "bg-gradient-to-t from-emerald-950/85 via-slate-950/35 to-transparent"
                : preset === "lidar"
                  ? "bg-gradient-to-t from-violet-950/85 via-slate-950/35 to-transparent"
                  : "bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"
            const bulletGrid = (service.bullets?.length ?? 0) > 3

            return (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-15 group-hover:opacity-35 transition duration-500" />

                <div
                  className="
                    relative rounded-2xl border border-white/20 p-6 md:p-8
                    bg-white/[0.06] backdrop-blur-md transition-all duration-300
                    group-hover:border-white/40
                    h-full flex flex-col
                  "
                >
                  <div className="relative mb-5 h-32 md:h-40 rounded-xl overflow-hidden border border-white/10 bg-slate-900">
                    <Image
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 360px"
                    />
                    <div className={`pointer-events-none absolute inset-0 ${overlayTone}`} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600/15 via-transparent to-purple-700/15" />
                  </div>

                  <Icon
                    className="w-9 h-9 md:w-10 md:h-10 text-blue-300 mb-3 group-hover:scale-105 transition-transform shrink-0"
                    aria-hidden
                  />

                  <h2 className="text-lg md:text-xl font-semibold text-white leading-snug mb-2">{service.title}</h2>

                  <p className="text-blue-200/90 text-xs md:text-sm font-medium mb-3 leading-snug border-l-2 border-blue-400/70 pl-3 italic">
                    {service.subtitle}
                  </p>

                  <p className="text-white/85 leading-relaxed text-sm mb-4 flex-1">{service.description}</p>

                  {service.bullets?.length ? (
                    <div
                      className={
                        bulletGrid
                          ? "grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-auto pt-4 border-t border-white/10"
                          : "space-y-2.5 mt-auto pt-4 border-t border-white/10"
                      }
                    >
                      {service.bullets.map((b) => (
                        <div
                          key={b.label}
                          className="rounded-lg bg-black/25 border border-white/5 px-3 py-2.5 text-left"
                        >
                          <p className="text-blue-200/95 text-xs font-semibold leading-tight mb-0.5">{b.label}</p>
                          <p className="text-white/70 text-[11px] md:text-xs leading-relaxed">{b.detail}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
