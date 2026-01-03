"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-[1440px] mx-auto">
        
        {/* ÜST KISIM */}
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          
          {/* LOGO VE PARLAYAN İKON */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              {/* GLOW (PARLAMA) KATMANI: İkonun arkasındaki mavi ışık */}
              <div className="absolute w-8 h-8 bg-blue-500/40 rounded-full blur-xl group-hover:bg-blue-400/60 transition-all duration-500"></div>
              
              <Image 
                src="/favicon.svg" 
                alt="Logo Icon" 
                width={38} 
                height={38} 
                priority
                className="relative z-10 object-contain brightness-110 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            </div>
            <span className="text-xl md:text-2xl font-black text-white tracking-tighter group-hover:text-blue-400 transition-colors duration-300">
              DeepAnnotation
            </span>
          </Link>

          {/* MASAÜSTÜ MENÜ */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-lg font-bold uppercase tracking-wider transition-all hover:text-blue-400 ${
                    pathname === item.href ? "text-blue-400" : "text-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBİL BUTON */}
          <button className="md:hidden text-white z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* MOBİL MENÜ LİNK LİSTESİ */}
        <div className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/5
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}>
          <div className="flex flex-col bg-slate-900/50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-8 py-4 text-xl font-bold uppercase border-b border-white/5 transition-colors ${
                  pathname === item.href ? "text-blue-400 bg-blue-400/10" : "text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}