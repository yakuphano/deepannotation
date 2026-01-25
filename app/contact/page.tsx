"use client"

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  // --- EMAILJS CONFIGURATION ---
  const SERVICE_ID = "service_9e10v2s"
  const TEMPLATE_ADMIN_ID = "template_xyxmaxt" 
  const TEMPLATE_USER_ID = "template_juw74eq"
  const PUBLIC_KEY = "Hkuk0z3TZ0kNzqJRz"
  // -----------------------------

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    
    // Form verilerini al
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      // 1. ADIM: Size bildirim gönder (Admin Notification)
      await emailjs.send(SERVICE_ID, TEMPLATE_ADMIN_ID, formData, PUBLIC_KEY)

      // 2. ADIM: Müşteriye teşekkür maili gönder (Auto-Reply)
      await emailjs.send(SERVICE_ID, TEMPLATE_USER_ID, formData, PUBLIC_KEY)

      setStatus("success")
      form.reset() // Formu temizle

    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative z-10">
      <div className="w-full max-w-2xl relative z-10">
        
        {/* Ana Başlık */}
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 text-center">
          Contact Us
        </h1>

        {/* --- YENİ EKLENEN KISIM: Direkt İletişim Bilgisi --- */}
        <p className="text-center text-slate-300 mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Interested in partnerships, NVIDIA credits, or custom datasets? <br className="hidden md:block" />
          Contact us directly at{' '}
          <a 
            href="mailto:info@deepannotation.ai" 
            className="text-blue-400 hover:text-blue-300 font-semibold underline transition-colors"
          >
            info@deepannotation.ai
          </a>
        </p>
        {/* --------------------------------------------------- */}

        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-slate-400">Full Name</label>
                <input 
                  name="name" 
                  required
                  type="text" 
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-slate-400">Email Address</label>
                <input 
                  name="email" 
                  required
                  type="email" 
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase text-slate-400">Company Name</label>
              <input 
                name="company" 
                type="text" 
                className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
                placeholder="Enter your company name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase text-slate-400">Message</label>
              <textarea 
                name="message" 
                required
                rows={5}
                className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Bildirim Mesajları */}
            {status === "success" && (
              <div className="bg-green-500/20 border border-green-500 p-4 rounded-lg text-center animate-pulse">
                 <p className="text-green-400 font-bold">Thank you! Your message has been sent successfully.</p>
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-500/20 border border-red-500 p-4 rounded-lg text-center">
                <p className="text-red-400 font-bold">Something went wrong. Please try again later.</p>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  )
}