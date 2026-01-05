import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    // 1. SendPulse SMTP Yapılandırması (465 Portu Fix)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp-pulse.com",
      port: 465, // Portu doğrudan 465 olarak sabitledik
      secure: true, // 465 portu kullanıldığı için burası MUTLAKA true olmalı
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 2. Admin Bildirimi
    await transporter.sendMail({
      from: '"DeepAnnotation Web" <info@deepannotation.ai>', // SendPulse'da doğrulanmış adres
      to: "info@deepannotation.ai",
      replyTo: email,
      subject: `New Message from ${name}`,
      html: `<h3>New Contact Submission</h3><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    // 3. Otomatik Yanıt
    await transporter.sendMail({
      from: '"DeepAnnotation" <info@deepannotation.ai>',
      to: email,
      subject: "We received your message",
      html: `<p>Hi ${name}, thank you for contacting DeepAnnotation. We will get back to you soon.</p>`,
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Mail Error Detail:", error.message);
    return NextResponse.json({ error: "Failed to send email", details: error.message }, { status: 500 });
  }
}