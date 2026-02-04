import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get("name")
    const email = formData.get("email")
    const cvFile = formData.get("cv") as File | null

    if (!name || !email || !cvFile) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // TEST AMAÇLI LOG
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("CV file name:", cvFile.name)
    console.log("CV file size:", cvFile.size)

    return NextResponse.json({
      success: true,
      message: "CV received successfully",
    })
  } catch (error) {
    console.error("Apply error:", error)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
