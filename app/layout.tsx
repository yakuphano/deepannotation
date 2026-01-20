import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import VideoBackground from "./components/VideoBackground"
import type { Metadata, Viewport } from "next"
import Script from "next/script"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Kullanıcının zoom yapmasını da engeller (uygulama hissi verir)
  userScalable: false,
}

export const metadata: Metadata = {
  title: "DeepAnnotation",
  description: "High-Quality Data Annotation for AI",
  icons: { icon: "/favicon.svg" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Analytics kodların burada kalsın */}
      </head>
      
      {/* DEĞİŞİKLİK: 
          - h-[100dvh]: Mobil tarayıcı çubuğunu hesaba katarak tam ekran yapar.
          - overflow-hidden: Kaydırmayı tamamen kapatır.
      */}
      <body className="h-[100dvh] w-screen flex flex-col text-white bg-transparent overflow-hidden">
        
        <VideoBackground />
        
        <Navbar />
        
        {/* Main alanı esnek (flex-grow) bırakıldı */}
        <main className="flex-grow flex flex-col justify-center relative z-10 w-full">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  )
}