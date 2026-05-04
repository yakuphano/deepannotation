import { createClient, type SanityClient } from "next-sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ?? ""
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2025-05-01"

let clientInstance: SanityClient | null = null

export function isSanityConfigured(): boolean {
  return projectId.length > 0
}

/**
 * Returns a singleton Sanity client. Only call when `isSanityConfigured()` is true
 * (otherwise throws so builds work without env vars).
 */
export function getSanityClient(): SanityClient {
  if (!isSanityConfigured()) {
    throw new Error(
      "Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local (see .env.example).",
    )
  }
  if (!clientInstance) {
    clientInstance = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  }
  return clientInstance
}
