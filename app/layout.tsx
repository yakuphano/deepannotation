import "./globals.css"
import Navbar from "./components/Navbar"
import type { Metadata } from "next"

// Metadata ayarlarını genişletiyoruz
export const metadata: Metadata = {
  metadataBase: new URL("https://deepannotation.ai"), // Tüm göreceli URL'ler için baz alınır
  title: {
    default: "DeepAnnotation — High-Quality Data Annotation for AI",
    template: "%s | DeepAnnotation", // Alt sayfalarda "İletişim | DeepAnnotation" gibi görünür
  },
  description:
    "DeepAnnotation provides scalable, human-verified data annotation for AI, ML, and computer vision applications.",
  keywords: [
    "data annotation",
    "ai labeling",
    "machine learning dataset",
    "image annotation",
    "bounding boxes",
    "deepannotation",
    "computer vision",
    "training data"
  ],
  authors: [{ name: "DeepAnnotation Team", url: "https://deepannotation.ai" }],
  creator: "DeepAnnotation",
  publisher: "DeepAnnotation",
  
  // Arama motoru botları için talimatlar
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL ayarı (Duplicate content'i önler)
  alternates: {
    canonical: "/",
  },

  // Sosyal Medya Paylaşımları (Open Graph)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deepannotation.ai",
    title: "DeepAnnotation — Professional Data Annotation for AI",
    description:
      "Accurate, secure and scalable data annotation services for AI & Machine Learning teams.",
    siteName: "DeepAnnotation",
    images: [
      {
        url: "/og-image.png", // public/og-image.png dosyanızın olduğundan emin olun
        width: 1200,
        height: 630,
        alt: "DeepAnnotation AI Services",
      },
    ],
  },

  // Twitter Kartları (X.com paylaşımları için)
  twitter: {
    card: "summary_large_image",
    title: "DeepAnnotation — High-Quality Data Annotation for AI",
    description: "Scalable data annotation for AI, ML, and computer vision applications.",
    images: ["/og-image.png"],
    creator: "@deepannotation", // Varsa Twitter kullanıcı adınız
  },

  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png", // İsteğe bağlı
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console doğrulama */}
        {/* <meta name="google-site-verification" content="YOUR_TOKEN_HERE" /> */}
      </head>

      <body className="min-h-screen text-white bg-slate-950 antialiased selection:bg-blue-500 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}