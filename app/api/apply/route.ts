export const runtime = "nodejs"

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    // 🔍 ENV KONTROLÜ (GEÇİCİ)

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

    // CV → Buffer
    const arrayBuffer = await cv.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Mail transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    // Mail gönder
    await transporter.sendMail({
      from: `"DeepAnnotation Careers" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Career Application – ${name}`,
      text: `
New career application received.

Name: ${name}
Email: ${email}
`,
      attachments: [
        {
          filename: cv.name,
          content: buffer,
        },
      ],
    })

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error("Apply API error:", error)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
