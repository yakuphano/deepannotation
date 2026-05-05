import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./sanity/schemaTypes"

/** Used by `npm run sanity:schema-deploy` — same types as hosted Studio at sanity.io/manage */
export default defineConfig({
  name: "default",
  title: "DeepAnnotation",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
