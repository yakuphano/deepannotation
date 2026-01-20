import Link from "next/link"
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

export default function Footer() {
  return (
    <footer className="w-full py-6 relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Sol Kısım: Telif Hakkı Yazısı (Tekrar Eklendi) */}
        {/* order-2 md:order-1 -> Mobilde altta, masaüstünde solda durur */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-white/60 text-xs md:text-sm font-light">
            © {new Date().getFullYear()} DeepAnnotation. All rights reserved.
          </p>
        </div>

        {/* Sağ Kısım: Sosyal Medya İkonları */}
        {/* order-1 md:order-2 -> Mobilde üstte, masaüstünde sağda durur */}
        <div className="flex items-center gap-6 order-1 md:order-2">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label={item.label}
            >
              <item.icon size={20} />
            </Link>
          ))}
          
          {/* Mail İkonu */}
          <Link 
            href="mailto:info@deepannotation.ai" 
            className="text-white/60 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={20} />
          </Link>
        </div>

      </div>
    </footer>
  )
}