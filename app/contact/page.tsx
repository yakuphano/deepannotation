"use client"

import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative z-10">
      
      <div className="w-full max-w-2xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 text-center">
          Contact Us
        </h1>

        {/* Form Konteynerı - Mevcut yapın korundu, sadece border ve bg uyumlandı */}
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl">
          <form className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-blue-400">Full Name</label>
                <input 
                  type="text" 
                  /* Border rengi arka plana uygun şeffaf beyaza çekildi */
                  className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-blue-400">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase text-blue-400">Subject</label>
              <input 
                type="text" 
                className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
                placeholder="Data Annotation Services"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase text-blue-400">Your Message</label>
              <textarea 
                rows={5}
                className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase py-4 rounded-xl transition-all"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}