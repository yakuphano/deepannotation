/** Demo / legacy posts when Sanity is off or has no published documents yet. */

export type FallbackBlogListItem = {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
  image: string
}

export const FALLBACK_BLOG_LIST: FallbackBlogListItem[] = [
  {
    id: 1,
    title: "Why Quality Annotation Improves LLM Training",
    excerpt:
      "How high-fidelity, human-verified instruction tuning datasets prevent hallucinations and improve reasoning capabilities in Large Language Models (LLMs).",
    date: "Feb 12, 2025",
    readTime: "6 min read",
    category: "Generative AI",
    slug: "quality-annotation-llm-training",
    image: "/blog/llm-training.png",
  },
  {
    id: 2,
    title: "How Human-in-the-Loop Improves Model Reliability",
    excerpt:
      "Integrating human feedback (RLHF) directly into MLOps pipelines to handle edge cases and reduce model drift in production environments.",
    date: "Feb 08, 2025",
    readTime: "8 min read",
    category: "MLOps Strategy",
    slug: "human-in-the-loop-reliability",
    image: "/blog/hitl-reliability.png",
  },
  {
    id: 3,
    title: "Best Practices for Search Relevance Datasets",
    excerpt:
      "Creating ground truth for retrieval-augmented generation (RAG) and semantic search engines using expert-graded query-document pairs.",
    date: "Feb 01, 2025",
    readTime: "7 min read",
    category: "Search & Retrieval",
    slug: "search-relevance-best-practices",
    image: "/blog/search-relevance.png",
  },
  {
    id: 4,
    title: "Optimizing 3D Point Cloud Data for GPU Training",
    excerpt:
      "Structuring LiDAR and sensor fusion data to maximize throughput in NVIDIA-powered training clusters for autonomous systems.",
    date: "Jan 28, 2025",
    readTime: "10 min read",
    category: "Autonomous Systems",
    slug: "lidar-gpu-optimization",
    image: "/blog/lidar-gpu.png",
  },
]

export type FallbackBlogDetail = {
  title: string
  date: string
  readTime: string
  image: string
  content: string[]
}

export const FALLBACK_BLOG_BY_SLUG: Record<string, FallbackBlogDetail> = {
  "quality-annotation-llm-training": {
    title: "Why Quality Annotation Improves LLM Training",
    date: "Feb 12, 2025",
    readTime: "6 min read",
    image: "/blog/llm-training.png",
    content: [
      "In the era of Generative AI, the bottleneck has shifted from model architecture to data quality. Large Language Models (LLMs) are prone to hallucinations and reasoning errors when trained on noisy, unverified datasets.",
      "At DeepAnnotation, we focus on 'Ground Truth Engineering'. Unlike basic crowdsourcing, our workflows involve domain experts who verify reasoning chains (CoT) and factual accuracy.",
      "Furthermore, clean, human-verified data significantly accelerates model convergence, saving substantial GPU compute costs.",
    ],
  },
  "human-in-the-loop-reliability": {
    title: "How Human-in-the-Loop Improves Model Reliability",
    date: "Feb 08, 2025",
    readTime: "8 min read",
    image: "/blog/hitl-reliability.png",
    content: [
      "Deploying AI in production is not a one-time event; it is a continuous cycle. Model drift and edge cases inevitably degrade performance over time.",
      "We champion a robust Human-in-the-Loop (HITL) strategy integrated directly into the MLOps pipeline. Low-confidence predictions are routed to human experts.",
      "This creates a virtuous cycle of Active Learning, ensuring your AI remains reliable as real-world conditions evolve.",
    ],
  },
  "search-relevance-best-practices": {
    title: "Best Practices for Search Relevance Datasets",
    date: "Feb 01, 2025",
    readTime: "7 min read",
    image: "/blog/search-relevance.png",
    content: [
      "Retrieval-Augmented Generation (RAG) has made search relevance more critical than ever. An LLM is only as good as the context it retrieves.",
      "We construct 'Golden Datasets' for search evaluation by pairing queries with documents graded by human experts on a multi-point relevance scale.",
      "Our approach focuses on user intent modeling, distinguishing between navigational, informational, and transactional queries.",
    ],
  },
  "lidar-gpu-optimization": {
    title: "Optimizing 3D Point Cloud Data for GPU Training",
    date: "Jan 28, 2025",
    readTime: "10 min read",
    image: "/blog/lidar-gpu.png",
    content: [
      "Autonomous systems rely on LiDAR sensors that generate millions of data points per second. Processing this efficienty requires structured data.",
      "We specialize in optimizing 3D point cloud annotations for high-throughput training pipelines, minimizing data loading bottlenecks.",
      "This ensures your NVIDIA GPU clusters spend cycles learning features, not decoding inefficient data formats.",
    ],
  },
}
