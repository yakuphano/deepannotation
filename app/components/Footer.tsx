import Link from "next/link"
import { Linkedin, Twitter, Instagram, Github, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
]

export default function Footer() {
  return (
    <footer className="w-full py-8 relative z-10 mt-20 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Sol Kısım: Telif Hakkı Yazısı */}
        <div className="text-center md:text-left">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} DeepAnnotation. All rights reserved.
          </p>
        </div>

        {/* Sağ Kısım: Sosyal Medya İkonları */}
        <div className="flex items-center gap-6">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank" // Yeni sekmede açılması için
              rel="noopener noreferrer"
              className="text-white/60 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label={item.label}
            >
              <item.icon size={24} />
            </Link>
          ))}
          
          {/* Mail İkonu (Opsiyonel) */}
          <Link 
            href="mailto:info@deepannotation.ai" 
            className="text-white/60 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </Link>
        </div>

      </div>
    </footer>
  )
}