"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react" // İkonları ekledik

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false) // Mobil menü durumu

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* BRAND */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <Image
            src="/favicon.svg"
            alt="DeepAnnotation Icon"
            width={32}
            height={32}
            className="drop-shadow-[0_0_10px_rgba(59,130,246,0.9)] group-hover:scale-105 transition w-8 h-8 md:w-10 md:h-10"
            priority
          />
          <span className="text-xl md:text-2xl font-semibold tracking-tight text-white">
            DeepAnnotation
          </span>
        </Link>

        {/* DESKTOP NAV (Mobilde gizle) */}
        <ul className="hidden md:flex gap-12 text-lg font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isActive ? "text-blue-400" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-blue-400 rounded-full shadow-[0_0_14px_rgba(59,130,246,0.9)]" />
                )}
              </li>
            )
          })}
        </ul>

        {/* MOBILE MENU BUTTON (Sadece mobilde göster) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE MENU OVERLAY */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-center space-y-8 md:hidden">
            {navItems.map((item) => {
               const isActive = pathname === item.href
               return(
                <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)} // Tıklayınca menüyü kapat
                className={`text-2xl font-semibold ${
                    isActive ? "text-blue-400" : "text-slate-300"
                  }`}
              >
                {item.label}
              </Link>
               )
            })}
          </div>
        )}
      </nav>
    </header>
  )
}