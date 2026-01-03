import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    console.log("FORM EMAIL VALUE:", email);

    // 1. SendPulse SMTP Ayarlarını Tanımla
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp-pulse.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // 587 portu için false, 465 ise true olmalı
      auth: {
        user: process.env.SMTP_USER, // Vercel'e kaydettiğin email (örn: yakup...gmail)
        pass: process.env.SMTP_PASSWORD, // Vercel'e kaydettiğin uzun şifre
      },
    });

    // 2. SANA GELEN BİLDİRİM MAİLİ (Admin Notification)
    await transporter.sendMail({
      from: '"DeepAnnotation Web" <info@deepannotation.ai>', // Gönderen hep senin kurumsal mailin olmalı
      to: "info@deepannotation.ai", // Mesaj kime gidecek? (Sana)
      replyTo: email, // Yanıtla deyince formu dolduran kişinin maili çıksın
      subject: "New Contact Message - DeepAnnotation",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not Provided"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // 3. ZİYARETÇİYE GİDEN OTOMATİK TEŞEKKÜR MAİLİ (Auto-Reply)
    await transporter.sendMail({
      from: '"DeepAnnotation" <info@deepannotation.ai>',
      to: email, // Ziyaretçinin mail adresi
      subject: "Thanks for contacting DeepAnnotation",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color: #333;">
          <h2>Hi ${name}, 👋</h2>
          <p>
            Thank you for reaching out to <strong>DeepAnnotation</strong>.
            We have successfully received your message.
          </p>
          <p>
            Our team will review your inquiry regarding <strong>${company || "your project"}</strong> and get back to you shortly.
          </p>
          <hr style="border:none; border-top:1px solid #eee; margin: 20px 0;">
          <p style="font-size: 14px; color: #666;">
            Best regards,<br/>
            <strong>DeepAnnotation Team</strong><br/>
            <a href="https://deepannotation.ai" style="color: #0070f3; text-decoration: none;">www.deepannotation.ai</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Mail Gönderme Hatası:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}