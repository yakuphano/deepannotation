"use client"

import { useState } from "react"

export default function CareersPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() // 🚨 KRİTİK: sayfa açılmasını ENGELLER

    setLoading(true)
    setError("")
    setSuccess(false)

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) {
        throw new Error("Submission failed")
      }

      setSuccess(true)
      e.currentTarget.reset()
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container mx-auto p-6 pt-32">

      <h1 className="text-3xl font-bold mb-4">Careers</h1>

      <p>Current open positions:</p>

      <ul className="mt-4 space-y-3 list-disc list-inside">
        <li>Generative AI Trainer</li>
        <li>Search Relevance</li>
        <li>Image Annotation</li>
        <li>Video Annotation</li>
        <li>Speech Transcription</li>
        <li>Text Annotation</li>
      </ul>

      <div className="mt-10 max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Apply</h2>

        {success && (
          <div className="mb-4 p-3 rounded bg-green-100 text-green-800">
            ✅ Thank you! Your application has been received.
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 rounded bg-red-100 text-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border p-2 rounded"
          />

          {/* CV upload button */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Upload CV
            </label>
            <input
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Or send your CV directly to{" "}
          <a
            href="mailto:info@deepannotation.ai"
            className="text-blue-600 underline"
          >
            info@deepannotation.ai
          </a>
        </p>
      </div>

    </main>
  )
}
