import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Get request body
    const { name, email, subject, message } = await request.json();
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' }, 
        { status: 400 }
      );
    }

    // Send email
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
    
    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' }, 
          { status: 429 }
        );
      } else if (error.message.includes('invalid email')) {
        return NextResponse.json(
          { error: 'Invalid email address provided.' }, 
          { status: 400 }
        );
      } else {
        return NextResponse.json(
          { error: error.message }, 
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'An unknown error occurred' }, 
      { status: 500 }
    );
  }
}