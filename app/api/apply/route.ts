export const runtime = "nodejs"

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get("name")
    const email = formData.get("email")
    const cv = formData.get("cv")

    // Form validation
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

    // CV buffer
    const buffer = Buffer.from(await cv.arrayBuffer())

    // Gmail / Google Workspace SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: Number(process.env.MAIL_PORT) === 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    /* ===============================
       1️⃣ ŞİRKETE GİDEN MAIL
       =============================== */
    await transporter.sendMail({
      from: `"DeepAnnotation Careers" <${process.env.MAIL_USER}>`,
      to: "careers@deepannotation.ai",
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

    /* ===============================
       2️⃣ ADAYA OTOMATİK CEVAP
       =============================== */
    await transporter.sendMail({
      from: `"DeepAnnotation" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Your application has been received",
      text: `
Hi ${name},

Thank you for applying to DeepAnnotation.

We have successfully received your application and our team will review it shortly.
If your profile is a good fit, we will contact you.

Best regards,
DeepAnnotation Team
careers@deepannotation.ai
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
