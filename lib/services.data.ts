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
    subtitle: "Precise labels for detection, segmentation, and scene parsing.",
    description:
      "Pixel-accurate labels for detection, segmentation, and scene understanding—built for autonomy, retail, medical vision, and security at production scale.",
    iconKey: "boxSelect",
    visualPreset: "default",
    heroImageUrl: "/services/image-annotation/hero.jpg",
    heroImageAlt: "Annotated imagery for detection, segmentation, and computer vision training data",
    bullets: [
      {
        label: "Bounding Boxes",
        detail:
          "Tight 2D/3D boxes for object detection and tracking.\n\nMulti-class boxes for pedestrians, vehicles, and obstacles with QA matched to your IOU rules—fast batches for autonomy, retail, and security.",
        imageUrl: "/services/image-annotation/bounding-boxes.jpg",
        imageAlt: "Bounding box annotation example for object detection",
      },
      {
        label: "Polygon Segmentation",
        detail:
          "Vertex-accurate masks for irregular and organic shapes.\n\nPolygons beat boxes on curved objects—semantic or instance workflows for aerial, medical, and street scenes with tight edges and minimal bleed.",
        imageUrl: "/services/image-annotation/polygon-segmentation.jpg",
        imageAlt: "Polygon segmentation outlining precise object contours",
      },
      {
        label: "Polyline Annotation",
        detail:
          "Lanes, edges, wires, and markings as continuous polylines.\n\nDense vertices for smooth curves; optional type, color, and direction tags for HD maps, ADAS, and path planning with clean intersections.",
        imageUrl: "/services/image-annotation/polyline-annotation.jpg",
        imageAlt: "Polyline and lane annotation for roads and linear features",
      },
      {
        label: "Keypoint Labeling",
        detail:
          "Pose, face, and custom skeletons for motion and HCI.\n\nJoints and landmarks with visibility/occlusion tags—sports, gestures, and clinical layouts aligned to your model topology.",
        imageUrl: "/services/image-annotation/keypoint-labeling.jpg",
        imageAlt: "Keypoint and landmark annotation for pose and facial structure",
      },
      {
        label: "Semantic Segmentation",
        detail:
          "Per-pixel class maps for full-scene context.\n\nDense labels (road, sky, vegetation, people, …) with sharp boundaries—driving, medical, and geospatial QA at many classes per frame.",
        imageUrl: "/services/image-annotation/semantic-segmentation.jpg",
        imageAlt: "Semantic segmentation masks showing per-pixel class labels",
      },
    ],
  },
  {
    slug: "video-annotation",
    title: "Video Annotation & Temporal Tracking",
    subtitle: "Tracks, actions, and timestamped events for video ML.",
    description:
      "Tracks with interpolation, action segments, and frame-accurate events—QA for production video ML.",
    iconKey: "video",
    heroImageUrl: "/services/video-annotation/Actionrecognition.jpg",
    heroImageAlt:
      "Video action recognition labels for human and machine activities over time",
    bullets: [
      {
        label: "Object Tracking (Interpolation)",
        detail:
          "Persistent IDs with smooth paths between keyframes.\n\nHandles occlusion and re-entry; multi-class boxes for people, AMRs, and equipment on high-frame-rate footage for retail, logistics, and security.",
        imageUrl: "/services/video-annotation/objectTrackinginterpolation.png",
        imageAlt:
          "Object tracking with persistent IDs and interpolated paths between video keyframes",
      },
      {
        label: "Action Recognition",
        detail:
          "Time-bounded activity labels for automation and safety.\n\nStart/end windows for assembly, inspection, and machine use—multi-step human–machine behaviors with QC thresholds for reliable models.",
        imageUrl: "/services/video-annotation/Actionrecognition.jpg",
        imageAlt:
          "Video action recognition labels for human and machine activities over time",
      },
      {
        label: "Event Logging",
        detail:
          "Frame-accurate start/stop for named sequences.\n\nCategories for workflows (e.g. line or kitchen tasks), overlapping parallel events, and exports ready for temporal models.",
        imageUrl: "/services/video-annotation/eventlogging.jpg",
        imageAlt:
          "Frame-accurate event logs with start and end timestamps on video timelines",
      },
    ],
  },
  {
    slug: "audio-speech-processing",
    title: "Audio & Speech Processing",
    subtitle: "Phonetics, diarization, and acoustic or scene-level labels.",
    description:
      "IPA-friendly transcripts, diarization with overlaps, and acoustic/event labels—with QA to your spec.",
    iconKey: "mic2",
    heroImageUrl: "/services/audio-speech-processing/speakerdiarization.jpg",
    heroImageAlt:
      "Speaker diarization timeline showing who spoke when on multi-speaker audio",
    bullets: [
      {
        label: "Phonetic Transcription",
        detail:
          "IPA-style phones, stress, and dialect detail—not just words.\n\nWaveform-aligned (incl. multi-channel) for TTS, linguistics, and accent-robust ASR.",
        imageUrl: "/services/audio-speech-processing/phonetictranscription.jpg",
        imageAlt:
          "IPA-style phonetic transcription aligned with speech waveforms for dialect and accent modeling",
      },
      {
        label: "Speaker Diarization",
        detail:
          "Who spoke when—with overlaps and tight boundaries.\n\nStable IDs across long calls and meetings; mono or multi-mic; millisecond-level segments for clean transcripts.",
        imageUrl: "/services/audio-speech-processing/speakerdiarization.jpg",
        imageAlt:
          "Speaker diarization timeline with who-spoke-when labels and overlap segments on multi-speaker audio",
      },
      {
        label: "Audio Classification",
        detail:
          "Events, emotion, noise, and scene labels beyond speech.\n\nDiscrete cues (alarms, glass break, …), stress/tone tags, ambient profiles for denoise, and clip-level context for security and automotive.",
        imageUrl: "/services/audio-speech-processing/audioclassification.jpg",
        imageAlt:
          "Labeled acoustic events, emotions, background noise, and scene classes for audio ML datasets",
      },
    ],
  },
  {
    slug: "lidar-3d-point-cloud",
    title: "LiDAR & 3D Point Cloud Annotation",
    subtitle: "Cuboids, segmentation, fusion, and lane geometry in 3D.",
    description:
      "Cuboids, dense segmentation, sensor fusion, and lane/boundary lines—aligned to your autonomy or robotics stack.",
    iconKey: "boxes",
    visualPreset: "lidar",
    heroImageUrl: "/services/lidar-3d-point-cloud/3dcuboidlabeling.jpg",
    heroImageAlt:
      "3D cuboid labels on LiDAR point cloud for autonomous driving perception",
    bullets: [
      {
        label: "3D Cuboid Labeling",
        detail:
          "Full 3D pose and dimensions on point clouds.\n\nVolumetric boxes for vehicles, pedestrians, and obstacles—multi-class L/W/H and orientation for planning beyond flat 2D.",
        imageUrl: "/services/lidar-3d-point-cloud/3dcuboidlabeling.jpg",
        imageAlt:
          "3D cuboid volumetric boxes on LiDAR point cloud for vehicles, pedestrians, and obstacles",
      },
      {
        label: "Point Cloud Segmentation",
        detail:
          "Semantics on every point for full-scene context.\n\nRoad, sidewalk, vegetation, vehicles, buildings—with strict QC so terrain vs. obstacles stays consistent in dense scenes.",
        imageUrl: "/services/lidar-3d-point-cloud/pointcloudsegmentation.jpg",
        imageAlt:
          "Semantically segmented LiDAR point cloud with terrain, roads, and obstacles classified",
      },
      {
        label: "Multi-Sensor Fusion",
        detail:
          "LiDAR + camera aligned in space and time.\n\nCuboids and segments that agree in 3D and image space—cross-view checks (BEV, camera) for stronger detection and tracking.",
        imageUrl: "/services/lidar-3d-point-cloud/multisensorfusion.jpg",
        imageAlt:
          "Fused LiDAR and camera annotation with aligned 3D cuboids and semantic segments",
      },
      {
        label: "Lanes & Boundaries",
        detail:
          "3D polylines for lanes, curbs, and barriers.\n\nCenterlines, dividers, and road limits with elevation—topology-friendly for HD maps and lane-keeping.",
        imageUrl: "/services/lidar-3d-point-cloud/lanesboundaries.jpg",
        imageAlt:
          "3D polylines for lanes, road edges, and infrastructure on LiDAR point cloud",
      },
    ],
  },
  {
    slug: "medical-data-annotation",
    title: "Medical Data Annotation",
    subtitle: "Clinical-grade labels with HIPAA-aware workflows.",
    description:
      "Radiology, pathology, anatomy, and compliant PHI handling for regulated healthcare AI.",
    iconKey: "stethoscope",
    visualPreset: "medical",
    heroImageUrl: "/services/medical-data-annotation/hero.jpg",
    heroImageAlt: "Medical imaging and clinical annotation for healthcare AI datasets",
    bullets: [
      {
        label: "Radiology Imaging",
        detail:
          "Pixel-accurate masks on MRI, CT, X-ray, and ultrasound.\n\nOrgans, lesions, and anomalies on volumetric stacks—multi-modal reads for CAD, triage, and quant with de-identified, secure handoff.",
        imageUrl: "/services/medical-data-annotation/radiology-imaging.jpg",
        imageAlt: "Radiology imaging annotation for MRI, CT, and X-ray workflows",
      },
      {
        label: "Pathology Slides Annotation",
        detail:
          "Whole-slide tissue and cell-level labels.\n\nContouring and semantic segmentation so models learn cell types, tissue regions, and disease markers at diagnostic quality.",
        imageUrl: "/services/medical-data-annotation/pathology-slides.jpg",
        imageAlt: "Digital pathology whole slide image annotation and segmentation",
      },
      {
        label: "Anatomy Identification",
        detail:
          "Organs, skeleton, vessels, lesions, and anomalies.\n\nPoint and region labels on MRI, CT, and 3D volumes for diagnosis and surgical planning workflows.",
        imageUrl: "/services/medical-data-annotation/anatomy-identification.jpg",
        imageAlt: "Anatomical structure labeling on MRI, CT, and 3D medical imaging",
      },
      {
        label: "Compliance",
        detail:
          "HIPAA- and GDPR-aligned handling of PHI.\n\nEncryption, access control, and de-identification from ingest through delivery—privacy and integrity by design.",
        imageUrl: "/services/medical-data-annotation/Compliance.jpg",
        imageAlt: "HIPAA and GDPR compliant secure healthcare data annotation workflows",
      },
    ],
  },
  {
    slug: "text-nlp-annotation",
    title: "Text & NLP Annotation",
    subtitle: "NER, sentiment & intent, and classification for production NLP.",
    description:
      "Entity, tone, intent, and taxonomy labels your LLMs and classifiers can train on.",
    iconKey: "fileText",
    heroImageUrl: usImage("photo-1455390582262-044cdead277a", 1600, 900),
    heroImageAlt: "Desk with notes and writing tools for text-focused work",
    bullets: [
      {
        label: "Named Entity Recognition (NER)",
        detail:
          "Entities for graphs, RAG, and core NLP—people, places, orgs, dates, codes, products.\n\nHigh-fidelity spans including nested/overlapping mentions, technical CODE/PROJECT refs, and cross-document coreference for consistent knowledge modeling.",
        imageUrl: "/services/text-nlp-annotation/namedentityrecognition.jpg",
        imageAlt:
          "Named entity recognition: text annotated with people, places, organizations, and technical references",
      },
      {
        label: "Sentiment & Intent Analysis",
        detail:
          "Nuanced sentiment plus concrete intents from tickets, social, and feedback.\n\nJoy vs. frustration, cancellations, product questions, support—with sarcasm, urgency, and joint sentiment+intent validation for chatbots and research.",
        imageUrl: "/services/text-nlp-annotation/SentimentIntentAnalysis.jpg",
        imageAlt:
          "Sentiment and intent analysis: customer messages labeled with emotion and user goals",
      },
      {
        label: "Text Classification",
        detail:
          "Hierarchical and multi-label taxonomies for legal, clinical, finance, and research.\n\nManual validation into your schema powers retrieval, routing, and moderation—high volume, domain playbooks, multiple tags per document.",
        imageUrl: "/services/text-nlp-annotation/Textclassification.jpg",
        imageAlt:
          "Text classification: documents sorted into hierarchical categories and industry-specific taxonomies",
      },
    ],
  },
  {
    slug: "search-relevance-rlhf",
    title: "Search Relevance & RLHF",
    subtitle: "Human judgments for search quality and LLM alignment.",
    description:
      "Human ratings for ranking, preferences, and factuality checks—RLHF-ready where you need them.",
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
    subtitle: "Fine-tuning, curated data, and MLOps to ship models faster.",
    description:
      "Custom fine-tunes, cleaned datasets, and pipelines wired into your release process.",
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
