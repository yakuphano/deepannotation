import React from "react"
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/deepannotation", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/DeepAnnotation", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/deepannotation/", label: "Instagram" },
]

export default function Footer() {
  return (
    // z-index 50 yapıldı ki başka elementlerin altında kalmasın
    <footer className="w-full py-6 relative z-50 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Sol Kısım: Telif Hakkı Yazısı */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-white/60 text-xs md:text-sm font-light">
            © {new Date().getFullYear()} DeepAnnotation. All rights reserved.
          </p>
        </div>

        {/* Sağ Kısım: Sosyal Medya İkonları */}
        <div className="flex items-center gap-6 order-1 md:order-2">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
              aria-label={item.label}
            >
              <item.icon size={20} />
            </a>
          ))}
          
          {/* Mail İkonu */}
          <a 
            href="mailto:info@deepannotation.ai" 
            className="text-white/60 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  )
}