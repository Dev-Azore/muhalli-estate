import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, subject, message } = body;

    // Server-side validation
    if (!fullName || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Full name, phone number, subject, and message are required.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    console.log('NEW CONTACT FORM MESSAGE RECEIVED [SERVER]:', {
      fullName,
      phone,
      email,
      subject,
      message,
    });

    if (!resendApiKey) {
      console.warn('WARNING: RESEND_API_KEY is not defined in process.env.');
    } else {
      console.log('RESEND_API_KEY detected. Sending contact message via Resend API...');
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          signal: AbortSignal.timeout(3500),
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: ['kingazore54@gmail.com'],
            subject: `${subject}: ${fullName}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #3A3A4A; padding: 20px; background-color: #1A1A1F; color: #F5F5F0;">
                <h2 style="color: #C49A1A; border-bottom: 2px solid #C49A1A; padding-bottom: 10px;">
                  New Contact Form Message
                </h2>
                <p>You have received a new contact message from Muhalli Estates website.</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px; color: #F5F5F0;">
                  <tr><td style="padding: 8px; border-bottom: 1px solid #3A3A4A; font-weight: bold; color: #C49A1A;">Full Name:</td><td style="padding: 8px; border-bottom: 1px solid #3A3A4A;">${fullName}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #3A3A4A; font-weight: bold; color: #C49A1A;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #3A3A4A;">${phone}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #3A3A4A; font-weight: bold; color: #C49A1A;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #3A3A4A;">${email || 'N/A'}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #3A3A4A; font-weight: bold; color: #C49A1A;">Subject:</td><td style="padding: 8px; border-bottom: 1px solid #3A3A4A;">${subject}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #3A3A4A; font-weight: bold; color: #C49A1A;">Message:</td><td style="padding: 8px; border-bottom: 1px solid #3A3A4A;">${message}</td></tr>
                </table>
              </div>
            `,
          }),
        });

        const responseText = await emailResponse.text();
        if (emailResponse.ok) {
          console.log('Resend Contact Email Sent Successfully! Response:', responseText);
        } else {
          console.error('Resend API Returned Error Status:', emailResponse.status, responseText);
        }
      } catch (emailErr) {
        console.error('Error invoking Resend API for contact form:', emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. Our team will get back to you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form handler error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing contact message.' },
      { status: 500 }
    );
  }
}
