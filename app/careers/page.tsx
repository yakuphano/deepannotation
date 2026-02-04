export default function CareersPage() {
  return (
    <main className="container mx-auto p-6">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">
        Careers
      </h1>

      {/* Job Listings */}
      <p>Current open positions:</p>

      <ul className="mt-4 space-y-3 list-disc list-inside">
        <li>Frontend Developer</li>
        <li>Backend Developer</li>
        <li>UI / UX Designer</li>
      </ul>

      {/* Application Form */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Job Application Form
        </h2>

        <form
          action="/api/apply"
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

          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            required
            className="w-full"
          />

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Submit Application
          </button>
        </form>
      </div>

    </main>
  );
}
