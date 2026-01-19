import Link from "next/link"
// 1. Github ikonunu import listesinden kaldırdık
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/110795107/admin/dashboard/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/DeepAnnotation", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/deepannotation/", label: "Instagram" },
  // 2. Buradaki GitHub satırını sildik
]

export default function Footer() {
  return (
    <footer className="w-full py-8 relative z-10 mt-20 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Sol Kısım */}
        <div className="text-center md:text-left">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} DeepAnnotation. All rights reserved.
          </p>
        </div>

        {/* Sağ Kısım */}
        <div className="flex items-center gap-6">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label={item.label}
            >
              <item.icon size={24} />
            </Link>
          ))}
          
          {/* Mail İkonu */}
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