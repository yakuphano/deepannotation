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
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        
        {/* LOGO VE İKON */}
        <Link href="/" className="flex items-center gap-3 z-50">
          {/* İkonun görünmesi için width/height değerlerini sabitledik */}
          <div className="relative w-10 h-10 md:w-12 md:h-12">
             <Image 
                src="/favicon.svg" 
                alt="Logo Icon" 
                fill
                className="object-contain"
             />
          </div>
          <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">
            DeepAnnotation
          </span>
        </Link>

        {/* MASAÜSTÜ MENÜ (Bilgisayarda büyük, mobilde gizli) */}
        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-xl lg:text-2xl font-bold uppercase tracking-wide transition-all hover:text-blue-400 ${
                  pathname === item.href ? "text-blue-400" : "text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBİL BUTON (Sadece telefonda görünür) */}
        <button className="md:hidden text-white z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* MOBİL PANEL (Telefonda açılan menü) */}
        <div className={`
          fixed inset-0 bg-slate-950 flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-in-out md:hidden
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-black uppercase text-white`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}