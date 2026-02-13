import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter only when env vars are present
let transporter = null;
if (process.env.EMAIL_ADDRESS && process.env.GMAIL_PASSKEY) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSKEY,
    },
  });
} else {
  console.warn('Email credentials not configured: EMAIL_ADDRESS or GMAIL_PASSKEY missing. Emails will be skipped.');
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

// Helper function to send an email via Nodemailer
async function sendEmail(payload, message) {
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
    return true;
  } catch (error) {
    console.error('Error while sending email:', error?.message || error);
    return false;
  }
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    const summary = [];

    const composedMessage = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    // Try to send Telegram message if configured
    let telegramSuccess = false;
    if (token && chat_id) {
      telegramSuccess = await sendTelegramMessage(token, chat_id, composedMessage);
      summary.push(`telegram:${telegramSuccess}`);
    } else {
      console.info('Telegram not configured; skipping Telegram notification.');
    }

    // Try to send email if transporter is available
    let emailSuccess = false;
    if (transporter) {
      emailSuccess = await sendEmail(payload, composedMessage);
      summary.push(`email:${emailSuccess}`);
    } else {
      console.info('Email transporter not configured; skipping email notification.');
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
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error?.message || error);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
      error: String(error),
    }, { status: 500 });
  }
};