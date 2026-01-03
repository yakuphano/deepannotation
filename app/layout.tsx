import "./globals.css"
import Navbar from "./components/Navbar"
import type { Metadata, Viewport } from "next"

// Mobil uyumluluk (viewport) artık bu şekilde ayrı bir export olarak yazılmalı
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "DeepAnnotation — High-Quality Data Annotation for AI",
  description:
    "DeepAnnotation provides scalable, human-verified data annotation for AI, ML, and computer vision applications.",
  keywords: [
    "data annotation",
    "ai labeling",
    "machine learning dataset",
    "image annotation",
    "bounding boxes",
    "deepannotation",
  ],
  metadataBase: new URL("https://deepannotation.ai"),
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://deepannotation.ai",
    title: "DeepAnnotation — Professional Data Annotation for AI",
    description: "Accurate, secure and scalable data annotation services for AI & Machine Learning teams.",
    siteName: "DeepAnnotation",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DeepAnnotation" }],
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white bg-slate-950 overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}