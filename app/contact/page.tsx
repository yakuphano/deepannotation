"use client"

import { useState } from "react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error("Failed to send message")
      }

      setSuccess(true)
      form.reset()
    } catch (error) {
      alert("Message could not be sent. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 pt-32 pb-20 md:py-32 flex flex-col items-center">
      <div className="w-full max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
        >
          {/* Honeypot */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* input ve textarea sınıflarına text-slate-300 ve border-white/20 eklendi */}
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition shadow-sm"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition shadow-sm"
          />

          <input
            name="company"
            required
            placeholder="Company Name"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition shadow-sm"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition shadow-sm"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-blue-500 text-black font-semibold hover:bg-blue-400 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center mt-4">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </main>
  )
}