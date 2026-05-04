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
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 transition-colors duration-500">
      <nav className="max-w-[1440px] mx-auto">
        
        {/* ÜST KISIM */}
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          
          <Link
            href="/"
            className="flex items-center group shrink-0 min-w-0"
            aria-label="Deep — Home"
          >
            <Image
              src="/deep-logo.png"
              alt="Deep Logo — High quality data for smarter AI"
              width={1024}
              height={861}
              priority
              className="h-9 w-auto max-w-[min(220px,52vw)] sm:max-w-[260px] md:h-11 md:max-w-[300px] object-contain object-left transition-opacity duration-300 group-hover:opacity-90 drop-shadow-[0_0_14px_rgba(59,130,246,0.2)]"
            />
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
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}>
          <div className="flex flex-col bg-black/60 backdrop-blur-2xl">
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