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
      secure: process.env.MAIL_PORT === "465", 
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    /* 1️⃣ ŞİRKETE GİDEN MAİL (Başvuru Bildirimi) */
    await transporter.sendMail({
      from: `"DeepAnnotation Careers" <${process.env.MAIL_USER}>`,
      sender: "DeepAnnotation Careers", // Gmail'i ismi basmaya zorlamak için ekledik
      to: "careers@deepannotation.ai",
      replyTo: email, 
      subject: `New Career Application – ${name}`,
      headers: {
        "X-Entity-Ref-ID": Date.now().toString(),
        "Importance": "high",
        "X-Priority": "1 (Highest)"
      },
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

    /* 2️⃣ ADAYA GİDEN OTOMATİK TEŞEKKÜR MAİLİ */
    await transporter.sendMail({
      from: `"DeepAnnotation HR" <${process.env.MAIL_USER}>`,
      sender: "DeepAnnotation HR",
      to: email,
      replyTo: "careers@deepannotation.ai",
      subject: "Thank you for your application - DeepAnnotation",
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

  } catch (error: any) {
    console.error("Apply API error detail:", error.message)
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    )
  }
}