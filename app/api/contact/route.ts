import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    // 1. SendPulse SMTP Configuration (Port 465 for SSL)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp-pulse.com",
      port: 465, 
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 2. Admin Notification (To You)
    await transporter.sendMail({
      from: '"DeepAnnotation Web" <info@deepannotation.ai>', 
      to: "info@deepannotation.ai", 
      replyTo: email, 
      subject: `New Contact Message from ${name} - DeepAnnotation`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not Provided"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // 3. Professional English Auto-Reply (To Visitor)
    await transporter.sendMail({
      from: '"DeepAnnotation" <info@deepannotation.ai>',
      to: email, 
      subject: "We have received your inquiry - DeepAnnotation",
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height:1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">DeepAnnotation</h1>
          </div>
          
          <div style="padding: 40px 30px;">
            <h2 style="color: #0f172a; margin-top: 0;">Dear ${name}, 👋</h2>
            
            <p style="font-size: 16px;">
              Thank you for reaching out to <strong>DeepAnnotation</strong>.
            </p>
            
            <p style="font-size: 16px;">
              We have successfully received your inquiry regarding <strong>${company || "your project"}</strong>. Our team of specialists is currently reviewing your message, and we will get back to you with a detailed response as soon as possible.
            </p>
            
            <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 15px; margin: 25px 0;">
              <p style="margin: 0; font-style: italic; color: #475569;">
                "We are dedicated to providing high-quality data solutions for your AI-driven production systems."
              </p>
            </div>

            <p style="font-size: 16px;">
              In the meantime, feel free to explore our website to learn more about our enterprise-grade services.
            </p>
            
            <p style="margin-top: 40px; font-size: 15px; color: #64748b;">
              Best regards,<br/>
              <strong>DeepAnnotation Team</strong>
            </p>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8;">
            <p style="margin: 0;">© 2026 DeepAnnotation. All rights reserved.</p>
            <p style="margin: 5px 0 0 0;"><a href="https://deepannotation.ai" style="color: #3b82f6; text-decoration: none;">www.deepannotation.ai</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Mail Error Detail:", error.message || error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message }, 
      { status: 500 }
    );
  }
}