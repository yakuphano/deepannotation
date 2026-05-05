import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./sanity/schemaTypes"

/** CLI (`sanity schema deploy`) .env.local yüklemediğinde boş kalmasın diye yedek. */
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "avzvbq0e"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production"

export default defineConfig({
  name: "default",
  title: "DeepAnnotation",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
