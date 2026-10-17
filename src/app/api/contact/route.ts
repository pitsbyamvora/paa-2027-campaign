import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 1. Save message to Supabase
    if (supabase) {
      const { error: dbError } = await supabase.from("contact_messages").insert({
        name,
        email,
        phone: phone || null,
        subject: subject || "General Inquiry",
        message
      });

      if (dbError) {
        console.warn("Supabase contact_messages error:", dbError);
      }
    }

    // 2. Forward email notification via Formspree or custom Webhook if configured
    // Or you can configure RESEND_API_KEY / FORMSPREE_ENDPOINT
    const emailEndpoint = process.env.CONTACT_EMAIL_WEBHOOK;
    if (emailEndpoint) {
      await fetch(emailEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "farewell2poverty@gmail.com",
          fromName: name,
          fromEmail: email,
          phone,
          subject: `[PAA Campaign] ${subject}`,
          message
        })
      }).catch(err => console.warn("Email webhook dispatch failed:", err));
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to process message." },
      { status: 500 }
    );
  }
}
