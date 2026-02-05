"use client"

import { useState, useRef } from "react"

export default function CareersPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fileName, setFileName] = useState("No file chosen")

  const formRef = useRef<HTMLFormElement | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)
    setError(null)

    const formData = new FormData(formRef.current!)

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || "Submission failed")
      }

      setSuccess(true)
      setError(null)
      setFileName("No file chosen")
      formRef.current?.reset()

    } catch (err: any) {
      setSuccess(false)
      setError(err.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container mx-auto p-6 pt-32 max-w-xl">

      <h1 className="text-3xl font-bold mb-4">Careers</h1>

      <p className="mb-4">Current open positions:</p>

      <ul className="mb-10 space-y-2 list-disc list-inside">
        <li>Generative AI Trainer</li>
        <li>Search Relevance</li>
        <li>Image Annotation</li>
        <li>Video Annotation</li>
        <li>Speech Transcription</li>
        <li>Text Annotation</li>
      </ul>

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

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
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

        {/* CUSTOM FILE UPLOAD */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Upload CV
          </label>

          <div className="flex items-center gap-3">
            <input
              type="file"
              name="cv"
              id="cv"
              accept=".pdf,.doc,.docx"
              required
              className="hidden"
              onChange={(e) =>
                setFileName(
                  e.target.files?.[0]?.name || "No file chosen"
                )
              }
            />

            <label
              htmlFor="cv"
              className="cursor-pointer bg-black/80 hover:bg-black text-white px-4 py-2 rounded transition"
            >
              Choose file
            </label>

            <span className="text-sm text-gray-500 truncate">
              {fileName}
            </span>
          </div>
        </div>

        <button
  type="submit"
  disabled={loading}
  className="
    w-full py-2 rounded
    bg-black text-white
    border border-blue-500
    cursor-pointer
    hover:bg-blue-600
    hover:border-blue-400
    transition
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
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

    </main>
  )
}
