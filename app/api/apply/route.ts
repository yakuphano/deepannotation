export const runtime = "nodejs"

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

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

    const buffer = Buffer.from(await cv.arrayBuffer())

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false,
      auth: {
        user: process.env.MAIL_USER, // Gmail SMTP
        pass: process.env.MAIL_PASS,
      },
    })

    /* 1️⃣ ŞİRKETE GİDEN MAIL */
    await transporter.sendMail({
      from: `"DeepAnnotation Careers" <info@deepannotation.ai>`,
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

    /* 2️⃣ ADAYA OTOMATİK CEVAP */
    await transporter.sendMail({
      from: `"DeepAnnotation" <info@deepannotation.ai>`,
      to: email,
      replyTo: "info@deepannotation.ai",
      subject: "Your application has been received",
      text: `
Hi ${name},

Thank you for applying to DeepAnnotation.

We have successfully received your application and our team will review it shortly.
If your profile is a good fit, we will contact you.

Best regards,
DeepAnnotation Team
info@deepannotation.ai
`,
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
