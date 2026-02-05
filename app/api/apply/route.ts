export const runtime = "nodejs"

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get("name")
    const email = formData.get("email")
    const cv = formData.get("cv")

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      !(cv instanceof File)
    ) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      )
    }

    // Debug – canlıda da log düşer (Vercel logs)
    console.log("New application:")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("CV:", cv.name, cv.size)

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error("Apply API error:", error)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
