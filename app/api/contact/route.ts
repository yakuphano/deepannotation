import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, message } = body

    // 1. Basit Sunucu Tarafı Doğrulama (Validation)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // 2. Kendinize Gelen Bildirim Maili
    await resend.emails.send({
      from: "DeepAnnotation Contact <info@deepannotation.ai>", // Gönderici adını netleştirdik
      to: ["info@deepannotation.ai"],
      replyTo: email, // Yanıtla deyince direkt müşteriye yanıt verir
      subject: `New Contact: ${name} from ${company || "Unknown Company"}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // 3. Kullanıcıya Giden Otomatik Yanıt
    await resend.emails.send({
      from: "DeepAnnotation <info@deepannotation.ai>",
      to: [email],
      subject: "We received your message - DeepAnnotation",
      html: `
        <div style="font-family: sans-serif; line-height:1.6; color: #333;">
          <h2 style="color: #000;">Hi ${name}, 👋</h2>
          <p>
            Thank you for reaching out to <strong>DeepAnnotation</strong>.
            We have successfully received your inquiry.
          </p>
          <p>
            Our team will review your message and get back to you as soon as possible.
          </p>
          <p style="margin-top:24px; color: #666;">
            Best regards,<br/>
            <strong>DeepAnnotation Team</strong>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API Error:", error)
    // Hata objesini string'e çevirip dönmek daha güvenlidir
    return NextResponse.json(
      { error: "Internal Server Error" }, 
      { status: 500 }
    )
  }
}