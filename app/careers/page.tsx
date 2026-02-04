"use client"

export default function CareersPage() {
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
          action="https://formspree.io/f/xpqjazyw"
          method="POST"
          encType="multipart/form-data"
          className="space-y-4 max-w-md"
        >
          {/* Redirect after submit */}
          <input
            type="hidden"
            name="_redirect"
            value="http://localhost:3000/careers?success=true"
          />

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

          {/* CV Link */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              CV Link
            </label>

            <input
              type="url"
              name="cv_link"
              placeholder="https://drive.google.com/..."
              required
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-xs text-gray-500">
              Upload your CV to Google Drive or Dropbox and paste the link here.
            </p>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Submit Application
          </button>
        </form>

        {/* Alternative contact */}
        <p className="mt-6 text-sm text-gray-600">
          Alternatively, you can send your CV directly to{" "}
          <a
            href="mailto:info@deepannotation.ai"
            className="text-blue-600 underline hover:text-blue-800"
          >
            info@deepannotation.ai
          </a>
        </p>
      </div>

    </main>
  )
}
