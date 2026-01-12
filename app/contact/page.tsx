"use client"

import React, { useState } from 'react'

export default function Contact() {
  // Form durumunu takip etmek için state
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      // SendPulse Event Manager'dan alınan POST URL eklendi
      const response = await fetch("https://events.sendpulse.com/events/id/610c08529f23471baa666673cb6c889f/9315062", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus("success")
        ;(e.target as HTMLFormElement).reset() // Formu temizle
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative z-10">
      <div className="w-full max-w-2xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 text-center">
          Contact Us
        </h1>

        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-slate-400">Full Name</label>
                <input 
                  name="name" // SendPulse'taki name değişkeniyle eşleşir
                  required
                  type="text" 
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-slate-400">Email Address</label>
                <input 
                  name="email" // SendPulse'taki email değişkeniyle eşleşir
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
                name="phone" // SendPulse'ta kilitli olan 'phone' alanını Company Name için kullanıyoruz
                type="text" 
                className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
                placeholder="Enter your company name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase text-slate-400">Message</label>
              <textarea 
                name="message" // SendPulse'ta 'Add Variable' ile eklediğin message değişkeniyle eşleşir
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
              <p className="text-green-400 text-center font-bold">Thank you! Your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center font-bold">Something went wrong. Please try again.</p>
            )}

          </form>
        </div>
      </div>
    </div>
  )
}