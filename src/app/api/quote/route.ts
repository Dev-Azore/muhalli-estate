import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, projectType, location, budget, details } = body;

    // Server-side validation
    if (!fullName || !phone || !projectType || !location) {
      return NextResponse.json(
        { success: false, error: 'Full name, phone, project type, and location are required.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    console.log('NEW CONSTRUCTION QUOTE REQUEST RECEIVED [SERVER]:', {
      fullName,
      phone,
      projectType,
      location,
      budget,
      details,
    });

    if (!resendApiKey) {
      console.warn('WARNING: RESEND_API_KEY is not defined in process.env.');
    } else {
      console.log('RESEND_API_KEY detected. Sending email via Resend API...');
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
            subject: `New Construction Quote: ${fullName} - ${projectType}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #3A3A4A; padding: 20px; background-color: #1A1A1F; color: #F5F5F0;">
                <h2 style="color: #C49A1A; border-bottom: 2px solid #C49A1A; padding-bottom: 10px;">
                  New Construction Quote Request
                </h2>
                <p>A new client has requested a construction quote on Muhalli Estates website.</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px; color: #F5F5F0;">
                  <tr><td style="padding: 8px; border-bottom: 1px solid #3A3A4A; font-weight: bold; color: #C49A1A;">Full Name:</td><td style="padding: 8px; border-bottom: 1px solid #3A3A4A;">${fullName}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #3A3A4A; font-weight: bold; color: #C49A1A;">Phone / WhatsApp:</td><td style="padding: 8px; border-bottom: 1px solid #3A3A4A;">${phone}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #3A3A4A; font-weight: bold; color: #C49A1A;">Project Type:</td><td style="padding: 8px; border-bottom: 1px solid #3A3A4A;">${projectType}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #3A3A4A; font-weight: bold; color: #C49A1A;">Location:</td><td style="padding: 8px; border-bottom: 1px solid #3A3A4A;">${location}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #3A3A4A; font-weight: bold; color: #C49A1A;">Estimated Budget:</td><td style="padding: 8px; border-bottom: 1px solid #3A3A4A;">${budget || 'N/A'}</td></tr>
                  <tr><td style="padding: 8px; border-bottom: 1px solid #3A3A4A; font-weight: bold; color: #C49A1A;">Details:</td><td style="padding: 8px; border-bottom: 1px solid #3A3A4A;">${details || 'None provided'}</td></tr>
                </table>
              </div>
            `,
          }),
        });

        const responseText = await emailResponse.text();
        if (emailResponse.ok) {
          console.log('Resend API Email Sent Successfully! Response:', responseText);
        } else {
          console.error('Resend API Returned Error Status:', emailResponse.status, responseText);
        }
      } catch (emailErr) {
        console.error('Error invoking Resend API:', emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request received successfully. Our engineering team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote handler error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing quote request.' },
      { status: 500 }
    );
  }
}
