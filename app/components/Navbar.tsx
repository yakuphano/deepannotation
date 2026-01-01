"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* BRAND */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/favicon.svg"
            alt="DeepAnnotation Icon"
            width={40}
            height={40}
            className="drop-shadow-[0_0_10px_rgba(59,130,246,0.9)] group-hover:scale-105 transition"
            priority
          />
          <span className="text-2xl font-semibold tracking-tight text-white">
            DeepAnnotation
          </span>
        </Link>

        {/* NAV */}
        <ul className="flex gap-12 text-lg font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>

                {/* ACTIVE GLOW UNDERLINE */}
                {isActive && (
                  <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-blue-400 rounded-full shadow-[0_0_14px_rgba(59,130,246,0.9)]" />
                )}
              </li>
            )
          })}
        </ul>

      </nav>
    </header>
  )
}
