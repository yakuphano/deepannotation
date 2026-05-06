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
    slug: "lidar-3d-point-cloud",
    title: "LiDAR & 3D Point Cloud Annotation",
    subtitle: "Advanced spatial data labeling for autonomous navigation and 3D scene reconstruction.",
    description:
      "Power your spatial awareness models with precise 3D sensor fusion data. We provide granular annotation for LiDAR point clouds, enabling robust performance in complex 3D environments.",
    iconKey: "boxes",
    visualPreset: "lidar",
    heroImageUrl: "/services/lidar-3d-point-cloud/lanesboundaries.jpg",
    heroImageAlt:
      "3D lane markings, road edges, and boundaries on LiDAR point cloud for HD mapping",
    bullets: [
      {
        label: "3D Cuboid Labeling",
        detail:
          "Achieve precise volumetric understanding of spatial environments with our high-quality 3D Cuboid Labeling services. Unlike standard 2D bounding boxes that provide only general localization on flat images, our 3D cuboids encapsulate objects within a complex 3D Point Cloud or LiDAR scan. We draw meticulous volumetric boxes that define the exact width, length, and height of vehicles, pedestrians, and obstacles, ensuring pixel-perfect spatial alignment. This is critical for training autonomous driving models to accurately calculate depth, orientation, and occupancy. Whether you are working with complex urban intersections or rural landscapes, we deliver high-density, dimensionally accurate datasets tailored to your project's technical specifications.\n\nKey Features:\n\n• Volumetric Accuracy: Defining exact 3D dimensions (L/W/H).\n\n• Spatial Orientation: Capturing precise depth and orientation for motion planning.\n\n• LiDAR & Radar Integration: Efficiently labeling data from multiple advanced sensors.\n\n• Multi-Class Annotation: Robust handling of diverse categories (Cars, Trucks, Cyclists, Pedestrians).",
        imageUrl: "/services/lidar-3d-point-cloud/3dcuboidlabeling.jpg",
        imageAlt:
          "3D cuboid volumetric boxes on LiDAR point cloud for vehicles, pedestrians, and obstacles",
      },
      {
        label: "Point Cloud Segmentation",
        detail:
          "Achieve an exhaustive, point-wise understanding of your 3D environments with our premium Point Cloud Segmentation services. We categorize every single point in a LiDAR or 3D scan, transforming raw point data into a colorful, semantically segmented map. Our process provides pixel-perfect classification of complex terrain, delineating road surfaces, sidewalks, and vegetation while accurately mapping both static and dynamic obstacles like vehicles and buildings. This enables autonomous systems to interpret the complete spatial context of a scene, crucial for advanced path planning and obstacle avoidance. Whether for urban mapping or infrastructure analysis, we deliver high-density, precisely classified datasets tailored to your specifications.\n\nKey Features:\n\n• Point-Wise Classification: Full semantics applied to every point in the scan.\n\n• Terrain & Obstacle Delineation: Accurate partitioning of road surfaces and surrounding objects.\n\n• Dense Semantic Maps: Ideal for complex environment interpretation and path planning.\n\n• High Confidence Scoring: Rigorous quality control ensuring high overlap accuracy for all classes.",
        imageUrl: "/services/lidar-3d-point-cloud/pointcloudsegmentation.jpg",
        imageAlt:
          "Semantically segmented LiDAR point cloud with terrain, roads, and obstacles classified",
      },
      {
        label: "Multi-Sensor Fusion",
        detail:
          "Elevate your computer vision models with advanced perception through our Multi-Sensor Fusion Annotation services. This complex process involves synchronizing and aligning data from multiple sensors—most commonly LiDAR point clouds and high-resolution camera feeds—into a single, unified annotation space. By leveraging the geometric precision of LiDAR with the rich visual context of images, we provide fused 3D annotations that surpass the capabilities of any single sensor. Our annotators create tight, cross-validated volumetric cuboids and semantic segments that map precisely across 3D point space and 2D pixel space, crucial for robust object detection, tracking, and environmental understanding in autonomous driving and advanced robotics.\n\nKey Features:\n\n• LiDAR & Camera Sync: Precise spatiotemporal alignment of point cloud and video data.\n\n• Volumetric 3D Cuboids: Delineating accurate object dimensions, depth, and orientation.\n\n• Cross-Modal Validation: Strict quality checks ensuring annotations are consistent across all views (e.g., Bird's Eye, Camera).\n\n• Enhanced Spatial Context: Combining visual texture with structural data for reliable obstacle mapping.",
        imageUrl: "/services/lidar-3d-point-cloud/multisensorfusion.jpg",
        imageAlt:
          "Fused LiDAR and camera annotation with aligned 3D cuboids and semantic segments",
      },
      {
        label: "Lanes & Boundaries",
        detail:
          "Enable high-definition (HD) mapping and precise motion planning with our specialized 3D Polyline annotation services. We map detailed road geometry and critical infrastructure by carefully tracing lane markings, road edges, curbs, and barriers within 3D Point Clouds. By capturing the exact curvature and elevation of the road, we provide the foundational data needed for autonomous vehicles to navigate complex intersections and maintain lane discipline with vertex-perfect accuracy.\n\nKey Features:\n\n• 3D Polyline Mapping: Precise delineation of lane dividers, centerlines, and road boundaries.\n\n• Infrastructure Detail: Expert labeling of curbs, guardrails, and traffic barriers.\n\n• HD Map Ready: Generating topological road data for advanced semantic navigation.\n\n• Elevation Accuracy: Capturing Z-axis data for realistic 3D path planning.",
        imageUrl: "/services/lidar-3d-point-cloud/lanesboundaries.jpg",
        imageAlt:
          "3D polylines for lanes, road edges, and infrastructure on LiDAR point cloud",
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
