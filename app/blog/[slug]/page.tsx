import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BookOpen, CalendarDays, Clock } from 'lucide-react';

// Örnek Blog Verileri (Blog listesindeki verilerle eşleşmeli ve daha detaylı olmalı)
const blogPosts = [
  {
    id: 1,
    title: "The Importance of Quality Data in AI Training",
    slug: "quality-data-in-ai",
    category: "AI Strategy",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    imageUrl: "https://image.pollinations.ai/prompt/high%20technology,%20data,%20machine%20learning%20and%20the%20future",
    content: `
      <p>In the rapidly evolving landscape of Artificial Intelligence, the phrase "data is the new oil" has become a pervasive truth. However, for AI models, it's not just about the quantity of data, but its inherent quality. High-quality data annotation serves as the backbone for successful machine learning models, directly impacting their accuracy, reliability, and ultimately, their real-world performance.</p>
      
      <h3>Why Quality Trumps Quantity</h3>
      <p>Imagine training a sophisticated language model with a dataset riddled with grammatical errors or irrelevant information. The model, no matter how advanced its architecture, will learn from these flaws, leading to biased, inaccurate, or even harmful outputs. Conversely, even a smaller dataset, meticulously curated and accurately labeled, can yield far superior results.</p>
      <p>Quality data ensures that AI models are not only learning the correct patterns but also doing so efficiently. It reduces the need for extensive post-processing or error correction, saving valuable time and resources during the development cycle. For DeepAnnotation, precision is paramount; we understand that every label contributes to the intelligence of your AI.</p>

      <h3>Impact on Model Accuracy and Performance</h3>
      <p>The direct correlation between data quality and model accuracy cannot be overstated. When data is consistently and correctly labeled, the model can identify features and relationships with higher confidence. This leads to:</p>
      <ul>
        <li><strong>Reduced Bias:</strong> Meticulous data collection and annotation help in mitigating inherent biases that can creep into datasets, ensuring fairer and more equitable AI systems.</li>
        <li><strong>Improved Generalization:</strong> Models trained on diverse and high-quality data are better at generalizing to new, unseen data, making them robust in varied real-world scenarios.</li>
        <li><strong>Faster Iteration:</strong> With reliable training data, developers can iterate on model architectures and hyperparameters more quickly, confident that any performance changes are due to model improvements rather than data anomalies.</li>
      </ul>
      <p>DeepAnnotation’s commitment to precision ensures your AI models are built on a solid foundation, paving the way for groundbreaking innovations.</p>
    `,
  },
  {
    id: 2,
    title: "Understanding Semantic Segmentation in 2026",
    slug: "understanding-semantic-segmentation",
    category: "Computer Vision",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    imageUrl: "https://image.pollinations.ai/prompt/autonomous%20vehicles,%20road,%20people%20and%20trees%20are%20individually%20colored%20pixel%20by%20pixel%20in%20a%20cityscape.%20medical%20imaging",
    content: `
      <p>Semantic segmentation, a cornerstone of modern computer vision, continues to evolve rapidly in 2026. This advanced technique goes beyond simple object detection by classifying each pixel in an image with a corresponding class label, providing a dense, pixel-accurate understanding of the scene.</p>

      <h3>Applications in Autonomous Driving</h3>
      <p>For autonomous vehicles, semantic segmentation is indispensable. It allows the vehicle's AI to precisely distinguish between the road, sidewalks, other vehicles, pedestrians, traffic signs, and even lane markings. This detailed understanding is critical for navigation, obstacle avoidance, and making safe, informed driving decisions in complex urban environments.</p>
      <p>In a bustling city scene, for instance, semantic segmentation can accurately delineate every pedestrian crossing the street, every car parked on the side, and every traffic light, irrespective of lighting conditions or occlusions. This granular data empowers self-driving cars to react intelligently and safely.</p>

      <h3>Advancements in Medical Imaging</h3>
      <p>Beyond automotive, semantic segmentation has revolutionized medical imaging. It enables doctors and AI systems to precisely segment organs, tumors, and other anatomical structures from MRI, CT, and X-ray scans. This level of detail is crucial for:</p>
      <ul>
        <li><strong>Accurate Diagnosis:</strong> Precisely identifying cancerous regions or abnormalities.</li>
        <li><strong>Treatment Planning:</strong> Guiding radiation therapy by segmenting target areas and organs at risk.</li>
        <li><strong>Research:</strong> Quantifying tissue volumes and changes over time for clinical studies.</li>
      </ul>
      <p>DeepAnnotation specializes in high-precision pixel-level annotation, ensuring your computer vision models receive the detailed data they need for these life-critical applications.</p>
    `,
  },
  {
    id: 3,
    title: "The Future of Human-in-the-Loop Annotation",
    slug: "human-in-the-loop-future",
    category: "Industry Trends",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    imageUrl: "https://image.pollinations.ai/prompt/a%20futuristic%20scene%20where%20a%20human%20is%20labeling%20data%20with%20an%20AI-assisted%20interface%20on%20a%20tablet%20or%20computer,%20with%20abstract%20AI%20networks%20emerging%20in%20the%20background",
    content: `
      <p>As Artificial Intelligence models grow in complexity and scope, the concept of Human-in-the-Loop (HITL) annotation is not just a methodology but a crucial element shaping the future of AI development. HITL refers to a system where human intelligence is integrated into a machine learning workflow, especially during the data annotation and validation phases, to achieve optimal accuracy and efficiency.</p>

      <h3>Synergy: AI-Assisted Labeling and Human Expertise</h3>
      <p>The future of annotation lies in the seamless synergy between advanced AI and human discernment. AI can automate repetitive labeling tasks, flag uncertain data points, and even suggest initial annotations, significantly speeding up the process. However, human annotators remain indispensable for:</p>
      <ul>
        <li><strong>Complex Edge Cases:</strong> Handling ambiguous or nuanced data that current AI models struggle to interpret correctly.</li>
        <li><strong>Quality Control:</strong> Validating AI-generated labels to ensure high accuracy and prevent the propagation of errors.</li>
        <li><strong>Bias Detection:</strong> Identifying and correcting biases in datasets that might lead to unfair or inaccurate AI predictions.</li>
      </ul>
      <p>This collaborative approach ensures that while AI handles the bulk work, human intelligence provides the critical judgment and nuance required for high-stakes applications.</p>

      <h3>DeepAnnotation's Approach to HITL</h3>
      <p>At DeepAnnotation, we leverage state-of-the-art HITL strategies to deliver unparalleled data quality. Our platform combines intelligent automation with the expertise of our human annotators, creating a powerful feedback loop:</p>
      <ol>
        <li><strong>AI Pre-labeling:</strong> Initial annotations are generated by AI, drastically reducing manual effort.</li>
        <li><strong>Human Review & Correction:</strong> Expert annotators review, refine, and correct AI labels, especially for challenging cases.</li>
        <li><strong>Model Retraining:</strong> Corrected data is fed back into the AI, continuously improving its labeling accuracy and efficiency over time.</li>
      </ol>
      <p>This iterative process not only optimizes annotation speed but also ensures the highest level of data integrity, enabling your AI to learn from the best possible sources.</p>
    `,
  },
];

// Generates static paths for each blog post
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // 404 sayfasına yönlendirir
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Blog Yazısı Başlığı ve Meta Bilgileri */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex justify-center items-center gap-6 text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <BookOpen size={16} /> {post.category}
            </span>
            <span className="flex items-center gap-1">
              <CalendarDays size={16} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> {post.readTime}
            </span>
          </div>
        </div>

        {/* Blog Görseli */}
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg group">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
        </div>

        {/* Blog İçeriği */}
        <div 
          className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg 
                     prose-h3:text-white prose-h3:font-bold prose-h3:text-3xl prose-h3:mb-6 
                     prose-p:mb-4 prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-2 prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

      </div>
    </div>
  );
}