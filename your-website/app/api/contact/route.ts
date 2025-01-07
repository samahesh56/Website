import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.YOUR_EMAIL as string,
      subject: `New Contact Form Message: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Log the error for debugging
    console.error('Email sending error:', error);
    
    // Type check the error and return appropriate message
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}