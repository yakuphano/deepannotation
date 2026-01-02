import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, company, message } = body
console.log("FORM EMAIL VALUE:", email)
  try {
    // SANA GELEN MAIL
    await resend.emails.send({
      from: "DeepAnnotation <info@deepannotation.ai>",
      to: ["info@deepannotation.ai"],
      subject: "New Contact Message - DeepAnnotation",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    //  ZİYARETÇİYE OTOMATİK TEŞEKKÜR MAILİ
    await resend.emails.send({
      from: "DeepAnnotation <info@deepannotation.ai>",
      to: [email],
      subject: "Thanks for contacting DeepAnnotation",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6">
          <h2>Hi ${name}, 👋</h2>
          <p>
            Thank you for reaching out to <strong>DeepAnnotation</strong>.
            We have successfully received your message.
          </p>
          <p>
            Our team will review your inquiry and get back to you shortly.
          </p>
          <p style="margin-top:24px">
            Best regards,<br/>
            <strong>DeepAnnotation Team</strong>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 500 })
  }
}
