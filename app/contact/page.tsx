"use client"

import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative z-10">
      
      {/* Arka plan parlama efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-2xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 text-center opacity-0 animate-[slideInLeft_1s_ease-out_forwards]">
          Contact Us
        </h1>

        {/* FORM KONTEYNERI */}
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
          <form className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-blue-400">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-blue-400">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-blue-400">Subject</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                placeholder="Data Annotation Services"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-blue-400">Your Message</label>
              <textarea 
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-600/20"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}