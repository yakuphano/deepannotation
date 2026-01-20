import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import VideoBackground from "./components/VideoBackground"
import type { Metadata, Viewport } from "next"
import Script from "next/script"

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
  alternates: {
    canonical: "https://www.deepannotation.ai",
  },
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NM1989RPBG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NM1989RPBG');
          `}
        </Script>
      </head>
      
      {/* BU KOD DOĞRUDUR:
          - min-h-screen: Sayfa en az ekran boyu kadar olur ama içerik artarsa uzar.
          - overflow-x-hidden: Sadece yan taşmayı engeller. Dikey scroll çalışır.
      */}
      <body className="min-h-screen flex flex-col text-white bg-transparent overflow-x-hidden">
        
        <VideoBackground />
        
        <Navbar />
        
        <main className="flex-grow flex flex-col justify-center relative z-10 w-full">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  )
}