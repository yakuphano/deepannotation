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
    <main className="min-h-screen bg-slate-950 text-white px-6 pt-32 pb-20 md:py-40 flex flex-col items-center">
      <div className="w-full max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tighter">
          Contact Us
        </h1>
        <p className="text-slate-400 text-center mb-12 text-lg">
          Let&apos;s build the future of AI together.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6 bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm"
        >
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-400 ml-1 uppercase tracking-widest">Name</label>
            <input
              name="name"
              required
              placeholder="Your Full Name"
              className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition shadow-inner"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-400 ml-1 uppercase tracking-widest">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition shadow-inner"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-400 ml-1 uppercase tracking-widest">Company</label>
            <input
              name="company"
              required
              placeholder="Company Name"
              className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition shadow-inner"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-400 ml-1 uppercase tracking-widest">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="How can we help your AI project?"
              className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition shadow-inner resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-4 rounded-full bg-blue-600 text-white font-black text-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 disabled:opacity-50 active:scale-[0.98]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <div className="bg-green-500/10 border border-green-500/50 p-4 rounded-xl mt-4">
              <p className="text-green-400 text-center font-bold">
                ✅ Message sent successfully!
              </p>
            </div>
          )}
        </form>
      </div>
    </main>
  )
}