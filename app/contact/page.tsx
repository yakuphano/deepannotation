"use client"

import { useState } from "react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // ... fetch işlemleri (aynı kalacak)
    setLoading(false);
    setSuccess(true);
  }

  return (
    // bg-slate-900 ve radial gradient ile zemin aydınlatıldı
    <main className="min-h-screen bg-slate-900 bg-[radial-gradient(circle_at_top,rgba(30,41,59,1)_0%,rgba(15,23,42,1)_100%)] text-white px-6 pt-32 pb-20 md:py-40 flex flex-col items-center overflow-hidden">
      
      <div className="w-full max-w-xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tighter text-white">
          Contact Us
        </h1>
        <p className="text-slate-300 text-center mb-12 text-lg">
          Let&apos;s build the future of AI together.
        </p>

        {/* Formun içindeki bg-black/60 yerine bg-slate-900/80 kullanarak formu da aydınlattık */}
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-slate-800/40 p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-300 ml-1 uppercase tracking-widest">Name</label>
            <input name="name" required placeholder="Your Full Name" className="w-full px-5 py-4 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 transition shadow-inner" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-300 ml-1 uppercase tracking-widest">Email</label>
            <input type="email" name="email" required placeholder="your@email.com" className="w-full px-5 py-4 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 transition shadow-inner" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-300 ml-1 uppercase tracking-widest">Company</label>
            <input name="company" required placeholder="Company Name" className="w-full px-5 py-4 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 transition shadow-inner" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-300 ml-1 uppercase tracking-widest">Message</label>
            <textarea name="message" required rows={5} placeholder="How can we help your AI project?" className="w-full px-5 py-4 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 transition shadow-inner resize-none" />
          </div>

          <button type="submit" disabled={loading} className="w-full py-4 mt-4 rounded-full bg-blue-600 text-white font-black text-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  )
}