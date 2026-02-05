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
        throw new Error("Submission failed")
      }

      setSuccess(true)
      setFileName("No file chosen")
      formRef.current?.reset()
    } catch (err: any) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative w-full pt-32 pb-20">

      {/* LEFT – CAREERS */}
      <div className="max-w-md px-6">
        <h1 className="text-4xl font-bold mb-6">Careers</h1>

        <p className="mb-6 text-xl text-gray-300">
          Current open positions:
        </p>

        <ul className="space-y-3 text-lg md:text-xl">
          <li>• Generative AI Trainer</li>
          <li>• Search Relevance</li>
          <li>• Image Annotation</li>
          <li>• Video Annotation</li>
          <li>• Speech Transcription</li>
        </ul>
      </div>

      {/* CENTER – APPLY (ABSOLUTE CENTER) */}
      <div className="
        relative mt-20
        md:absolute md:left-1/2 md:top-32 md:-translate-x-1/2
        w-full md:w-auto
        px-6
      ">
        <div className="w-full max-w-md mx-auto">

          <h2 className="text-4xl font-bold mb-6 text-center">
            Apply
          </h2>

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

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Upload CV</label>

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

                <span className="text-sm text-gray-400 truncate">
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
              "
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Or send your CV directly to{" "}
            <a
              href="mailto:info@deepannotation.ai"
              className="text-blue-600 underline"
            >
              info@deepannotation.ai
            </a>
          </p>

        </div>
      </div>
    </main>
  )
}
