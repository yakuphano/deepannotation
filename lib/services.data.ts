/**
 * Images: remote (Unsplash via `usImage`) **or** local files under `public/services/…`.
 *
 * Folders already exist in the repo (Windows path example):
 *   `deepannotate\public\services\image-annotation\`
 *   `deepannotate\public\services\medical-data-annotation\`
 *   `deepannotate\public\services\lidar-3d-point-cloud\`
 *   …same pattern for: video-annotation, text-nlp-annotation, audio-speech-processing,
 *   search-relevance-rlhf, ai-model-training-mlops
 *
 * Drop `hero.webp` (or .jpg) there, then here set:
 *   `heroImageUrl: "/services/image-annotation/hero.webp"`
 * Bullet images: `imageUrl: "/services/image-annotation/bounding-boxes.webp"` etc.
 * (URL path = no `public` — it maps to `public/services/...`.)
 */

/** Unsplash — https://unsplash.com/license */
export function usImage(photoId: string, w: number, h: number) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&h=${h}&q=80`
}

export type ServiceIconKey =
  | "boxSelect"
  | "stethoscope"
  | "boxes"
  | "video"
  | "fileText"
  | "mic2"
  | "scale"
  | "layers"

export type ServiceBullet = {
  label: string
  detail: string
  /** Detail page section image */
  imageUrl: string
  imageAlt: string
}

export type ServiceDefinition = {
  slug: string
  title: string
  subtitle: string
  description: string
  bullets: ServiceBullet[]
  iconKey: ServiceIconKey
  heroImageUrl: string
  heroImageAlt: string
  visualPreset?: "default" | "medical" | "lidar"
}

export const SERVICES: ServiceDefinition[] = [
  {
    slug: "image-annotation",
    title: "Image Annotation",
    subtitle: "High-precision visual data labeling for next-generation Computer Vision.",
    description:
      "Unlock the full potential of computer vision with pixel-perfect labeling. We provide high-fidelity training data tailored for autonomous driving, medical imaging, and retail analytics. Our specialized techniques include:",
    iconKey: "boxSelect",
    visualPreset: "default",
    heroImageUrl: "/services/image-annotation/hero.jpg",
    heroImageAlt: "Annotated imagery for detection, segmentation, and computer vision training data",
    bullets: [
      {
        label: "Bounding Boxes",
        detail:
          "Precision 2D/3D boxing for object detection.\n\nTight boxes around objects in images and video for reliable detection and localization—built for autonomy, retail, security, and more. Human-in-the-loop QA at scale with rules matched to your specs.\n\n• Multi-class labels (pedestrians, vehicles, obstacles, …)\n• Consistent, tight boxes for training\n• Large batches processed quickly",
        imageUrl: "/services/image-annotation/bounding-boxes.jpg",
        imageAlt: "Bounding box annotation example for object detection",
      },
      {
        label: "Polygon Segmentation",
        detail:
          "Exact contouring for irregular shapes and complex environments.\n\nMulti-vertex polygons trace true object outlines—better than boxes for organic shapes and clean masks. Fits aerial, medical, and driving use cases; human-in-the-loop for sharp boundaries.\n\n• Irregular and curved objects\n• Tight masks, minimal background bleed\n• Semantic and instance segmentation workflows",
        imageUrl: "/services/image-annotation/polygon-segmentation.jpg",
        imageAlt: "Polygon segmentation outlining precise object contours",
      },
      {
        label: "Polyline Annotation",
        detail:
          "Ideal for lane detection, wire recognition, and road markings.\n\nPolylines follow continuous lines—lanes, edges, tracks, wires—with dense vertices for smooth curves. Encode line type, color, and travel direction where you need rules, not just geometry.\n\n• Suited to path planning and HD maps / ADAS\n• Intersections and branches modeled clearly\n• Human-in-the-loop for complex topology",
        imageUrl: "/services/image-annotation/polyline-annotation.jpg",
        imageAlt: "Polyline and lane annotation for roads and linear features",
      },
      {
        label: "Keypoint Labeling",
        detail:
          "Facial landmarks, skeletal tracking, and human pose estimation.\n\nLandmark points capture structure, pose, and motion—body joints, facial features, or custom keypoint sets. Useful for sports, gestures, HCI, and clinical workflows.\n\n• Pose and facial landmark layouts\n• Visibility / occluded / out-of-frame tags\n• Skeleton topology matched to your model",
        imageUrl: "/services/image-annotation/keypoint-labeling.jpg",
        imageAlt: "Keypoint and landmark annotation for pose and facial structure",
      },
      {
        label: "Semantic Segmentation",
        detail:
          "Pixel-level classification for scene understanding.\n\nEvery pixel gets a class label so models see full scene context—not just object boxes. Sharp masks for boundaries and small objects; strong fit for driving, medical, and geospatial stacks.\n\n• Dense maps (road, sky, vegetation, people, …)\n• Full-frame scene parsing\n• Many classes per image, production-grade QA",
        imageUrl: "/services/image-annotation/semantic-segmentation.jpg",
        imageAlt: "Semantic segmentation masks showing per-pixel class labels",
      },
    ],
  },
  {
    slug: "medical-data-annotation",
    title: "Medical Data Annotation",
    subtitle: "HIPAA-compliant precision labeling for healthcare AI and diagnostic imaging.",
    description:
      "Accelerate medical breakthroughs with expert-level annotation of clinical data. We support radiologists and researchers with high-accuracy labeling of complex medical datasets.",
    iconKey: "stethoscope",
    visualPreset: "medical",
    heroImageUrl: usImage("photo-1579684385127-1ef15d508118", 1600, 900),
    heroImageAlt: "Clinical environment and medical imaging technology",
    bullets: [
      {
        label: "Radiology Imaging",
        detail: "Accurate contouring and segmentation for MRI, CT, and X-ray scans.",
        imageUrl: usImage("photo-1631549916768-4119b2e5f946", 1200, 800),
        imageAlt: "MRI imaging environment",
      },
      {
        label: "Pathology Slides",
        detail: "Cell-level classification and tissue segmentation in digital pathology.",
        imageUrl: usImage("photo-1532187863486-abf9dbad1b99", 1200, 800),
        imageAlt: "Microscopy and laboratory research",
      },
      {
        label: "Anatomy Identification",
        detail: "Detailed labeling of organs, lesions, and anomalies.",
        imageUrl: usImage("photo-1579154204601-01588f489e97", 1200, 800),
        imageAlt: "Clinical consultation and healthcare documentation",
      },
      {
        label: "Compliance",
        detail: "Secure workflows designed for sensitive healthcare information.",
        imageUrl: usImage("photo-1563986768609-322da13575f3", 1200, 800),
        imageAlt: "Digital security and data protection concept",
      },
    ],
  },
  {
    slug: "lidar-3d-point-cloud",
    title: "LiDAR & 3D Point Cloud Annotation",
    subtitle: "Advanced spatial data labeling for autonomous navigation and 3D scene reconstruction.",
    description:
      "Power your spatial awareness models with precise 3D sensor fusion data. We provide granular annotation for LiDAR point clouds, enabling robust performance in complex 3D environments.",
    iconKey: "boxes",
    visualPreset: "lidar",
    heroImageUrl: usImage("photo-1506905925346-21bda4d32df4", 1600, 900),
    heroImageAlt: "Open road and landscape representing spatial 3D sensing and navigation",
    bullets: [
      {
        label: "3D Cuboid Labeling",
        detail: "Accurate 3D bounding boxes for vehicles, pedestrians, and obstacles.",
        imageUrl: usImage("photo-1492144534655-ae79c964c9d7", 1200, 800),
        imageAlt: "Vehicle detail for 3D object framing",
      },
      {
        label: "Point Cloud Segmentation",
        detail: "Pixel-perfect classification of 3D points for terrain and obstacle mapping.",
        imageUrl: usImage("photo-1451187580459-43490279c0fa", 1200, 800),
        imageAlt: "Abstract global data visualization",
      },
      {
        label: "Multi-Sensor Fusion",
        detail: "Synchronized annotation between LiDAR and camera feeds for enhanced perception.",
        imageUrl: usImage("photo-1506905925346-21bda4d32df4", 1200, 800),
        imageAlt: "Mountain road representing multi-sensor driving scenarios",
      },
      {
        label: "Lanes & Boundaries",
        detail: "3D polyline labeling for road geometry and infrastructure.",
        imageUrl: usImage("photo-1449824913935-59a10b8d2000", 1200, 800),
        imageAlt: "Urban driving scene for road geometry labeling",
      },
    ],
  },
  {
    slug: "video-annotation",
    title: "Video Annotation & Temporal Tracking",
    subtitle: "Master dynamic scene understanding with frame-by-frame continuity.",
    description:
      "Train sophisticated temporal models with seamless object tracking across video sequences.",
    iconKey: "video",
    heroImageUrl: usImage("photo-1536240478700-b869277f8149", 1600, 900),
    heroImageAlt: "Video production workspace with editing timeline",
    bullets: [
      {
        label: "Object Tracking (Interpolation)",
        detail: "Maintaining unique IDs for objects across multiple frames.",
        imageUrl: usImage("photo-1461896836934-ffe607ba8211", 1200, 800),
        imageAlt: "Athletic motion representing tracked movement over time",
      },
      {
        label: "Action Recognition",
        detail: "Labeling specific human or machine behaviors over time.",
        imageUrl: usImage("photo-1518611012118-696072aa579a", 1200, 800),
        imageAlt: "Group activity and motion for behavioral labeling",
      },
      {
        label: "Event Logging",
        detail: "Identifying precise start and end points for complex activities.",
        imageUrl: usImage("photo-1501139088888-806b3b6764be", 1200, 800),
        imageAlt: "Time and planning concept for event boundaries",
      },
    ],
  },
  {
    slug: "text-nlp-annotation",
    title: "Text & NLP Annotation",
    subtitle: "Semantic labeling to bridge the gap between human language and AI.",
    description:
      "Empower your Large Language Models (LLMs) with deep linguistic understanding.",
    iconKey: "fileText",
    heroImageUrl: usImage("photo-1455390582262-044cdead277a", 1600, 900),
    heroImageAlt: "Desk with notes and writing tools for text-focused work",
    bullets: [
      {
        label: "Named Entity Recognition (NER)",
        detail: "Identifying people, places, organizations, and codes.",
        imageUrl: usImage("photo-1450101499163-c8848c66ca85", 1200, 800),
        imageAlt: "Laptop and workspace for document analysis",
      },
      {
        label: "Sentiment & Intent Analysis",
        detail: "Classifying the emotional tone and purpose of text.",
        imageUrl: usImage("photo-1522071820081-009f0129c71c", 1200, 800),
        imageAlt: "Team collaboration and communication",
      },
      {
        label: "Text Classification",
        detail: "Categorizing documents into granular taxonomies.",
        imageUrl: usImage("photo-1504384308090-c894fdcc538d", 1200, 800),
        imageAlt: "Organized workspace representing structured categories",
      },
    ],
  },
  {
    slug: "audio-speech-processing",
    title: "Audio & Speech Processing",
    subtitle: "Converting human speech into structured, actionable datasets.",
    description:
      "High-accuracy transcription and linguistic validation in multi-speaker environments.",
    iconKey: "mic2",
    heroImageUrl: usImage("photo-1598488035139-bdbb2231ce04", 1600, 900),
    heroImageAlt: "Studio microphone for speech and audio capture",
    bullets: [
      {
        label: "Phonetic Transcription",
        detail: "Capturing nuances in dialect and pronunciation.",
        imageUrl: usImage("photo-1470225620780-dba8ba36b745", 1200, 800),
        imageAlt: "Concert and live audio atmosphere",
      },
      {
        label: "Speaker Diarization",
        detail: "Correctly attributing speech to different participants.",
        imageUrl: usImage("photo-1522202176988-66273c2fd55f", 1200, 800),
        imageAlt: "Small group discussion for multi-speaker audio",
      },
      {
        label: "Audio Classification",
        detail: "Labeling background noise, emotion, and audio events.",
        imageUrl: usImage("photo-1511379938547-c1f69419868d", 1200, 800),
        imageAlt: "Headphones and music production desk",
      },
    ],
  },
  {
    slug: "search-relevance-rlhf",
    title: "Search Relevance & RLHF",
    subtitle: "Human-in-the-loop evaluation for ranking and LLM performance.",
    description:
      "Optimize your algorithms with human-verified scoring and Reinforcement Learning from Human Feedback (RLHF).",
    iconKey: "scale",
    heroImageUrl: usImage("photo-1460925895917-afdab827c52f", 1600, 900),
    heroImageAlt: "Laptop displaying charts and search analytics",
    bullets: [
      {
        label: "Query-Document Pairing",
        detail: "Evaluating the accuracy of search engine results.",
        imageUrl: usImage("photo-1432888498266-38ffec3eaf0a", 1200, 800),
        imageAlt: "Search and discovery on a laptop screen",
      },
      {
        label: "Comparison Ranking",
        detail: "Human preference testing for LLM responses.",
        imageUrl: usImage("photo-1551288049-bebda4e38f71", 1200, 800),
        imageAlt: "Analytics dashboard for comparing results",
      },
      {
        label: "Hallucination Detection",
        detail: "Verifying the factual accuracy of AI-generated content.",
        imageUrl: usImage("photo-1450101499163-c8848c66ca85", 1200, 800),
        imageAlt: "Reviewing documents for factual verification",
      },
    ],
  },
  {
    slug: "ai-model-training-mlops",
    title: "AI Model Training & MLOps",
    subtitle: "Bespoke model fine-tuning and production-ready infrastructure.",
    description:
      "Accelerate your path to deployment with custom fine-tuning and performance optimization.",
    iconKey: "layers",
    heroImageUrl: usImage("photo-1558494949-ef010cbdcc31", 1600, 900),
    heroImageAlt: "Server racks in a data center for MLOps infrastructure",
    bullets: [
      {
        label: "Custom Architecture Fine-tuning",
        detail: "Tailoring SOTA models (YOLO, ResNet, Transformers) to your data.",
        imageUrl: usImage("photo-1555949963-aa79dcee981c", 1200, 800),
        imageAlt: "Code on screen for model development",
      },
      {
        label: "Dataset Curating",
        detail: "Cleaning and balancing datasets to reduce model bias.",
        imageUrl: usImage("photo-1543286386-713bdd548da4", 1200, 800),
        imageAlt: "Spreadsheet and data analysis",
      },
      {
        label: "End-to-End MLOps",
        detail: "Integrating annotation pipelines directly into your CI/CD workflow.",
        imageUrl: usImage("photo-1618401471353-b98afee0b2eb", 1200, 800),
        imageAlt: "Software workflow and pipeline concept",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug)
}
