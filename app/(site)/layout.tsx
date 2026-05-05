import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import VideoBackground from "../components/VideoBackground"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col text-white bg-transparent overflow-x-hidden">
      <VideoBackground />
      <Navbar />
      <main className="flex-grow flex flex-col justify-center relative z-10 w-full">{children}</main>
      <Footer />
    </div>
  )
}
