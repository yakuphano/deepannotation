import Link from "next/link"
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

export default function Footer() {
  return (
    // DÜZENLEME: 
    // - mt-20 kaldırıldı (Gereksiz boşluk yapıyordu).
    // - py-8 yerine py-4 (Daha ince bir şerit).
    <footer className="w-full py-4 relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
      
      {/* İçeriği tek bir merkezde topladık (flex justify-center) */}
      <div className="max-w-[1440px] mx-auto px-6 flex justify-center items-center">
        
        <div className="flex items-center gap-8">
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