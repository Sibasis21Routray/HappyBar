import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Create SMTP transporter using Brevo
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
    port: parseInt(process.env.BREVO_SMTP_PORT || '587'),
    secure: false, // false for 587, true for 465
    auth: {
      user: process.env.BREVO_SMTP_LOGIN, // Your Brevo SMTP login (email)
      pass: process.env.BREVO_SMTP_KEY,   // Your Brevo SMTP key
    },
  });
};

// Verify Turnstile function
const verifyTurnstile = async (token) => {
  try {
    const params = new URLSearchParams(); 
    params.append('secret', process.env.TURNSTILE_SECRET || '');
    params.append('response', token);

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    return await response.json();
  } catch (error) {
    console.error('Turnstile verification error:', error);
    throw new Error('Turnstile verification failed');
  }
};

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, mobile, message, token } = req.body || {};

    // Validate required fields
    if (!name?.trim()) {
      return res.status(400).json({ error: "Name is required" });
    }
    if (!email?.trim()) {
      return res.status(400).json({ error: "Email is required" });
    }
    if (!message?.trim()) {
      return res.status(400).json({ error: "Message is required" });
    }
    if (!token) {
      return res.status(400).json({ error: "Missing Turnstile token" });
    }

    // Verify Turnstile
    const verifyJson = await verifyTurnstile(token);
    if (!verifyJson.success) {
      return res.status(400).json({ 
        error: "Turnstile verification failed", 
        details: verifyJson 
      });
    }

    // Check SMTP configuration
    if (!process.env.BREVO_SMTP_LOGIN || !process.env.BREVO_SMTP_KEY) {
      return res.status(500).json({ error: "SMTP configuration missing" });
    }

    // Create transporter
    const transporter = createTransporter();

    // Send email using SMTP
    const mailOptions = {
      from: `"Happy Bar Nutrition" <${process.env.BREVO_SENDER_EMAIL || 'info@happybarnutrition.org'}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL || 'info@happybarnutrition.org',
      subject: `Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile || 'Not provided'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile || 'Not provided'}
        
        Message:
        ${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return res.json({ 
      success: true, 
      message: "Email sent successfully",
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: "Failed to send message. Please try again later." 
    });
  }
});

app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    timestamp: new Date().toISOString() 
  });
});

app.listen(PORT, () => {
  console.log(`Contact server listening on port ${PORT}`);
});