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
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <Image src="/favicon.svg" alt="Icon" width={32} height={32} />
          <span className="text-xl font-bold text-white">DeepAnnotation</span>
        </Link>

        {/* MASAÜSTÜ MENÜ */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href ? "text-blue-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBİL HAMBURGER BUTONU */}
        <button 
          className="md:hidden text-white z-50 p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBİL MENÜ PANELİ */}
        <div className={`
          fixed inset-0 bg-slate-950 flex flex-col items-center pt-32 gap-8 transition-transform duration-300 md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)} // Linke tıklayınca menü kapansın
              className={`text-2xl font-semibold transition-colors ${
                pathname === item.href ? "text-blue-400" : "text-white hover:text-blue-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}