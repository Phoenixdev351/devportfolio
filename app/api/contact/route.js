import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Use Resend for email (free tier, no SMTP issues)
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Create and configure Nodemailer transporter (fallback if Resend not available)
let transporter = null;
if (process.env.EMAIL_ADDRESS && process.env.GMAIL_PASSKEY && !RESEND_API_KEY) {
  transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSKEY,
    },
  });
  console.info('Nodemailer transporter configured for Outlook/Office365 SMTP');
} else if (!RESEND_API_KEY) {
  console.warn('Email credentials not configured: Set RESEND_API_KEY or EMAIL_ADDRESS + GMAIL_PASSKEY');
}

// Helper function to send a message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
};

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send email via Resend API
async function sendEmailResend(payload, message) {
  const { name, email, message: userMessage } = payload;
  
  if (!RESEND_API_KEY) {
    console.warn('Resend API key not configured.');
    return false;
  }

  const htmlContent = generateEmailTemplate(name, email, userMessage);

  try {
    const response = await axios.post(
      'https://api.resend.com/emails',
      {
        from: `Portfolio <onboarding@resend.dev>`,
        to: process.env.EMAIL_ADDRESS || 'delivered@resend.dev',
        replyTo: email,
        subject: `New Message From ${name}`,
        html: htmlContent,
      },
      {
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.info('Email sent via Resend successfully to:', process.env.EMAIL_ADDRESS);
    return true;
  } catch (error) {
    console.error('Error while sending email via Resend:', error?.message || error);
    console.error('Full error:', error?.response?.data || error);
    return false;
  }
}

// Helper function to send an email via Nodemailer (fallback)
async function sendEmailNodemailer(payload, message) {
  const { name, email, message: userMessage } = payload;
  
  if (!transporter) {
    console.warn('sendEmail called but transporter is not configured.');
    return false;
  }

  const mailOptions = {
    from: `${name} via Portfolio <${process.env.EMAIL_ADDRESS || 'no-reply@example.com'}>`, 
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message From ${name}`, 
    text: message, 
    html: generateEmailTemplate(name, email, userMessage), 
    replyTo: email, 
  };
  
  try {
    await transporter.sendMail(mailOptions);
    console.info('Email sent via Nodemailer successfully to:', process.env.EMAIL_ADDRESS);
    return true;
  } catch (error) {
    console.error('Error while sending email via Nodemailer:', error?.message || error);
    console.error('Full error:', error);
    return false;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    const summary = [];
    const errors = [];

    const composedMessage = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    // Try to send Telegram message if configured
    let telegramSuccess = false;
    if (token && chat_id) {
      telegramSuccess = await sendTelegramMessage(token, chat_id, composedMessage);
      summary.push(`telegram:${telegramSuccess}`);
    } else {
      console.info('Telegram not configured; skipping Telegram notification.');
    }

    // Try to send email if Resend or transporter is available
    let emailSuccess = false;
    if (RESEND_API_KEY) {
      try {
        emailSuccess = await sendEmailResend(payload, composedMessage);
        summary.push(`email(resend):${emailSuccess}`);
      } catch (emailError) {
        console.error('Caught Resend email error:', emailError?.message || emailError);
        errors.push(`email(resend): ${emailError?.message || emailError}`);
        summary.push('email(resend):false');
      }
    } else if (transporter) {
      try {
        emailSuccess = await sendEmailNodemailer(payload, composedMessage);
        summary.push(`email(nodemailer):${emailSuccess}`);
      } catch (emailError) {
        console.error('Caught Nodemailer email error:', emailError?.message || emailError);
        errors.push(`email(nodemailer): ${emailError?.message || emailError}`);
        summary.push('email(nodemailer):false');
      }
    } else {
      console.info('Email not configured (no Resend API key or Nodemailer setup); skipping email notification.');
    }

    // Determine overall success: at least one channel should succeed
    const overallSuccess = telegramSuccess || emailSuccess;

    if (overallSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Notification sent (one or more channels succeeded).',
        detail: summary,
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send via any configured channel.',
      detail: summary,
      errors: errors.length > 0 ? errors : 'No detailed errors captured',
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error?.message || error);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
      error: String(error?.message || error),
    }, { status: 500 });
  }
};