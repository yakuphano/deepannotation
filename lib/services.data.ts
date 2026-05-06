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
    slug: "video-annotation",
    title: "Video Annotation & Temporal Tracking",
    subtitle: "Tracking, actions, and timestamped events for video ML pipelines.",
    description:
      "Temporal labels for video: persistent tracks with interpolation, behavioral action windows, and frame-accurate event logs—with QA suited to production training.",
    iconKey: "video",
    heroImageUrl: "/services/video-annotation/Actionrecognition.jpg",
    heroImageAlt:
      "Video action recognition labels for human and machine activities over time",
    bullets: [
      {
        label: "Object Tracking (Interpolation)",
        detail:
          "Stable object IDs across the full clip, with paths interpolated between keyframes so you label faster without sacrificing smooth trajectories—ideal for warehouses, retail, and security.\n\nKey features:\n\n• IDs through occlusion and re-entry\n\n• Interpolation between keyframes\n\n• Workers, AMRs, equipment (multi-class)\n\n• Precise boxes on high-frame-rate footage",
        imageUrl: "/services/video-annotation/objectTrackinginterpolation.png",
        imageAlt:
          "Object tracking with persistent IDs and interpolated paths between video keyframes",
      },
      {
        label: "Action Recognition",
        detail:
          "What objects do over time: clear start/end windows for activities like assembly, inspection, or machine operation—powering automation, safety, and operations analytics.\n\nKey features:\n\n• Frame-range action segments\n\n• Multi-step and human–machine behaviors\n\n• Triggers for alerts and workflows\n\n• QC thresholds for reliable training data",
        imageUrl: "/services/video-annotation/Actionrecognition.jpg",
        imageAlt:
          "Video action recognition labels for human and machine activities over time",
      },
      {
        label: "Event Logging",
        detail:
          "Exact begin/end of named sequences (e.g. kitchen workflows or plant line events) so models learn duration, frequency, and structure from long recordings.\n\nKey features:\n\n• Frame-accurate start and stop\n\n• Sequence categories (e.g. cooking, cleaning)\n\n• Overlapping and parallel events in one scene\n\n• Exports ready for temporal and deep-learning models",
        imageUrl: "/services/video-annotation/eventlogging.jpg",
        imageAlt:
          "Frame-accurate event logs with start and end timestamps on video timelines",
      },
    ],
  },
  {
    slug: "audio-speech-processing",
    title: "Audio & Speech Processing",
    subtitle: "IPA phonetics, who-spoke-when diarization, and acoustic or scene-level labels.",
    description:
      "Speech and sound datasets for production ML: phonetic transcripts (including IPA), speaker diarization with overlaps and tight timestamps, plus event, emotion, noise, and scene classification—with QA matched to your specs.",
    iconKey: "mic2",
    heroImageUrl: "/services/audio-speech-processing/speakerdiarization.jpg",
    heroImageAlt:
      "Speaker diarization timeline showing who spoke when on multi-speaker audio",
    bullets: [
      {
        label: "Phonetic Transcription",
        detail:
          "Beyond word logs: IPA-style notation captures phones, stress, and dialect so synthesis, linguistics, and accent-robust ASR get structured ground truth.\n\nKey features:\n\n• IPA-level phones and articulation detail\n\n• Regional and speaker-specific nuance\n\n• Alignment to waveforms (incl. multi-channel)\n\n• Datasets for TTS, research, and accent coverage",
        imageUrl: "/services/audio-speech-processing/phonetictranscription.jpg",
        imageAlt:
          "IPA-style phonetic transcription aligned with speech waveforms for dialect and accent modeling",
      },
      {
        label: "Speaker Diarization",
        detail:
          "Partition streams into who spoke when—stable speaker IDs, overlap regions, and precise in/out times for meetings, calls, and long-form transcription.\n\nKey features:\n\n• Track the same speaker across the file\n\n• Overlapping speech labeled cleanly\n\n• Millisecond-level segment boundaries\n\n• Mono or multi-track / multi-mic setups",
        imageUrl: "/services/audio-speech-processing/speakerdiarization.jpg",
        imageAlt:
          "Speaker diarization timeline with who-spoke-when labels and overlap segments on multi-speaker audio",
      },
      {
        label: "Audio Classification",
        detail:
          "Label non-speech and paralinguistic cues—events, emotions, ambient scenes—so models hear context, not just words (security, automotive, assistants).\n\nKey features:\n\n• Discrete acoustic events (alarms, glass break, …)\n\n• Vocal emotion / stress / tone tags\n\n• Ambient noise profiles for denoise training\n\n• Whole-clip scene labels for context",
        imageUrl: "/services/audio-speech-processing/audioclassification.jpg",
        imageAlt:
          "Labeled acoustic events, emotions, background noise, and scene classes for audio ML datasets",
      },
    ],
  },
  {
    slug: "lidar-3d-point-cloud",
    title: "LiDAR & 3D Point Cloud Annotation",
    subtitle: "Cuboids, segmentation, sensor fusion, and road geometry for autonomy and 3D scenes.",
    description:
      "LiDAR and 3D point cloud labeling for robust perception: volumetric cuboids, dense semantic segmentation, camera–LiDAR fusion, and lane or boundary polylines—matched to your pipeline and QA rules.",
    iconKey: "boxes",
    visualPreset: "lidar",
    heroImageUrl: "/services/lidar-3d-point-cloud/3dcuboidlabeling.jpg",
    heroImageAlt:
      "3D cuboid labels on LiDAR point cloud for autonomous driving perception",
    bullets: [
      {
        label: "3D Cuboid Labeling",
        detail:
          "Volumetric boxes on point clouds capture width, length, height, depth, and orientation for vehicles, pedestrians, and obstacles—beyond flat 2D boxes for autonomy and robotics.\n\nKey features:\n\n• Exact L/W/H (volumetric accuracy)\n\n• Pose and depth for motion planning\n\n• LiDAR and radar-friendly workflows\n\n• Multi-class: cars, trucks, cyclists, pedestrians",
        imageUrl: "/services/lidar-3d-point-cloud/3dcuboidlabeling.jpg",
        imageAlt:
          "3D cuboid volumetric boxes on LiDAR point cloud for vehicles, pedestrians, and obstacles",
      },
      {
        label: "Point Cloud Segmentation",
        detail:
          "Per-point semantic labels turn scans into class maps—roads, sidewalks, vegetation, vehicles, buildings—so systems get full scene context for planning and avoidance.\n\nKey features:\n\n• Semantics on every point\n\n• Terrain vs. obstacles split cleanly\n\n• Dense maps for complex scenes\n\n• Strict QC and class consistency",
        imageUrl: "/services/lidar-3d-point-cloud/pointcloudsegmentation.jpg",
        imageAlt:
          "Semantically segmented LiDAR point cloud with terrain, roads, and obstacles classified",
      },
      {
        label: "Multi-Sensor Fusion",
        detail:
          "Time- and space-aligned LiDAR plus camera (and related feeds) so cuboids and segments stay consistent in 3D and on images—stronger detection, tracking, and scene understanding.\n\nKey features:\n\n• Spatiotemporal sync of cloud and video\n\n• Accurate 3D cuboids and segments\n\n• Cross-view checks (e.g. BEV, camera)\n\n• Geometry plus visual texture for obstacles",
        imageUrl: "/services/lidar-3d-point-cloud/multisensorfusion.jpg",
        imageAlt:
          "Fused LiDAR and camera annotation with aligned 3D cuboids and semantic segments",
      },
      {
        label: "Lanes & Boundaries",
        detail:
          "3D polylines trace lanes, road edges, curbs, and barriers with curvature and elevation for HD maps, intersections, and lane-keeping.\n\nKey features:\n\n• Dividers, centerlines, road limits\n\n• Curbs, guardrails, barriers\n\n• Topology-ready for navigation stacks\n\n• Reliable Z for 3D routing",
        imageUrl: "/services/lidar-3d-point-cloud/lanesboundaries.jpg",
        imageAlt:
          "3D polylines for lanes, road edges, and infrastructure on LiDAR point cloud",
      },
    ],
  },
  {
    slug: "medical-data-annotation",
    title: "Medical Data Annotation",
    subtitle: "HIPAA-compliant precision labeling for healthcare AI and diagnostic imaging.",
    description:
      "Radiology, digital pathology, anatomy mapping, and compliance-first workflows for regulated healthcare AI. Expert contouring and segmentation on MRI, CT, X-ray, and whole slide images—with HIPAA/GDPR-aligned handling of PHI from annotation through delivery.",
    iconKey: "stethoscope",
    visualPreset: "medical",
    heroImageUrl: "/services/medical-data-annotation/hero.jpg",
    heroImageAlt: "Medical imaging and clinical annotation for healthcare AI datasets",
    bullets: [
      {
        label: "Radiology Imaging",
        detail:
          "Accurate contouring and segmentation for MRI, CT, and X-ray scans.\n\nExpert contouring and pixel-accurate masks on MRI, CT, X-ray, and ultrasound so models learn clear organ boundaries, lesions, and anomalies—not loose boxes. We cover volumetric stacks and multi-modal reads for CAD, triage, and quant workflows.\n\n• Organ and tumor delineation with overlap-focused QA\n• Secure, de-identified handoff aligned to clinical expectations",
        imageUrl: "/services/medical-data-annotation/radiology-imaging.jpg",
        imageAlt: "Radiology imaging annotation for MRI, CT, and X-ray workflows",
      },
      {
        label: "Pathology Slides Annotation",
        detail:
          "Cell-level classification and tissue segmentation in digital pathology.\n\nEnsure precise and reliable medical diagnoses with our expert pathology slide annotation services. We provide accurate contouring and semantic segmentation for whole slide images, enabling AI models to identify cell types, tissues, and disease markers with clinical accuracy.",
        imageUrl: "/services/medical-data-annotation/pathology-slides.jpg",
        imageAlt: "Digital pathology whole slide image annotation and segmentation",
      },
      {
        label: "Anatomy Identification",
        detail:
          "Detailed labeling of organs, lesions, and anomalies.\n\nPower your medical AI with expert anatomical mapping. We provide precise point and area labeling for organs, skeletal structures, and vascular systems across MRI, CT, and 3D scans. Our high-fidelity annotations ensure clinical-grade accuracy for automated diagnosis and surgical planning.",
        imageUrl: "/services/medical-data-annotation/anatomy-identification.jpg",
        imageAlt: "Anatomical structure labeling on MRI, CT, and 3D medical imaging",
      },
      {
        label: "Compliance",
        detail:
          "Secure workflows designed for sensitive healthcare information.\n\nTrust your most sensitive healthcare data to our secure, industry-standard workflows. Our annotation processes are fully HIPAA and GDPR compliant, ensuring that Protected Health Information (PHI) is handled with end-to-end encryption, strict access controls, and de-identification protocols. We prioritize data integrity and patient privacy at every step of the labeling cycle.",
        imageUrl: "/services/medical-data-annotation/Compliance.jpg",
        imageAlt: "HIPAA and GDPR compliant secure healthcare data annotation workflows",
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
