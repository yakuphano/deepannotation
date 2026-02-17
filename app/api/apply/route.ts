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

    // 16 haneli kodu .env dosyanızda MAIL_PASS kısmına eklediğinizden emin olun
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_PORT === "465", // 465 ise true, 587 ise false (Gmail genelde 587 kullanılır)
      auth: {
        user: process.env.MAIL_USER, // info@deepannotation.ai
        pass: process.env.MAIL_PASS, // Aldığınız 16 haneli uygulama şifresi
      },
      // Sertifika ve bağlantı hatalarını minimize etmek için eklendi
      tls: {
        rejectUnauthorized: false
      }
    })

    /* 1️⃣ ŞİRKETE GİDEN MAIL */
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

    /* 2️⃣ ADAYA OTOMATİK CEVAP */
    await transporter.sendMail({
      // 'from' kısmı mutlaka yetkili olan MAIL_USER ile aynı veya bağlantılı olmalı
      from: `"DeepAnnotation" <${process.env.MAIL_USER}>`,
      to: email,
      replyTo: "careers@deepannotation.ai",
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

  } catch (error: any) {
    console.error("Apply API error detail:", error.message)
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    )
  }
}