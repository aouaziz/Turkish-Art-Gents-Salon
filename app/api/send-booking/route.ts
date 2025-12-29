import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service } = body;

    // Create a transporter using SMTP
    // Configured for cPanel email (contact@turkishartgentssalon.com)
    const smtpPort = parseInt(process.env.SMTP_PORT || '465');
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'server233.web-hosting.com',
      port: smtpPort,
      secure: smtpPort === 465, // true for port 465 (SSL), false for 587 (TLS)
      auth: {
        user: process.env.SMTP_USER, // contact@turkishartgentssalon.com
        pass: process.env.SMTP_PASS, // Your cPanel email password
      },
      tls: {
        rejectUnauthorized: false // Allow self-signed certificates (common with cPanel)
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'contact@turkishartgentssalon.com',
      subject: `New Booking Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #5D1822 0%, #7a1f2d 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #E6D5B8; margin: 0; font-size: 28px;">New Booking Request</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #5D1822; margin-top: 0;">Customer Details</h2>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #E6D5B8; border-radius: 4px;">
              <p style="margin: 10px 0;"><strong style="color: #5D1822;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #5D1822;">Phone:</strong> ${phone}</p>
              <p style="margin: 10px 0;"><strong style="color: #5D1822;">Preferred Service:</strong> ${service || 'Not specified'}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #E6D5B8;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                Please contact the customer as soon as possible to confirm their appointment.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
            <p>Turkish Art Gents Salon -  Al Barsha 1, Ascana 2, Shop 1– Dubai, UAE</p>
            <p>+971 4 339 5088 | info@turkishartgentssalon.com</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Booking email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send booking email' },
      { status: 500 }
    );
  }
}
