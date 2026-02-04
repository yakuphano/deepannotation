"use client"

import { useState } from "react"

export default function CareersPage() {
  const [fileName, setFileName] = useState("No file chosen")

  return (
    <main className="container mx-auto p-6 pt-32">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">
        Careers
      </h1>

      {/* Job Listings */}
      <p>Current open positions:</p>

      <ul className="mt-4 space-y-3 list-disc list-inside">
        <li>Generative AI Trainer</li>
        <li>Search Relevance</li>
        <li>Image Annotation</li>
        <li>Video Annotation</li>
        <li>Speech Transcription</li>
        <li>Text Annotation</li>
      </ul>

      {/* Application Form */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Apply
        </h2>

        <form
  action="https://formspree.io/f/abcdwxyz"
  method="POST"
  encType="multipart/form-data"
  className="space-y-4 max-w-md"
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

          {/* Custom file input */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="cv"
              className="cursor-pointer bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Choose file
            </label>

            <span className="text-sm text-gray-400">
              {fileName}
            </span>

            <input
              id="cv"
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              required
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFileName(e.target.files[0].name)
                } else {
                  setFileName("No file chosen")
                }
              }}
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Submit Application
          </button>
        </form>
      </div>

    </main>
  )
}
