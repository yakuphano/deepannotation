import "./globals.css"
import Navbar from "./components/Navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DeepAnnotation",
  description: "High-quality data annotation for smarter AI",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white bg-slate-950">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
