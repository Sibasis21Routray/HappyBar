import { Request, Response } from 'express';
import { sendContactEmail } from '../services/emailService.js';

interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhoneNumber = (mobile: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(mobile);
};

export const sendEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, mobile, message }: ContactFormData = req.body;

    // Validation
    if (!name || name.trim() === '') {
      res.status(400).json({ error: 'Name is required' });
      return;
    }

    if (!email || !validateEmail(email)) {
      res.status(400).json({ error: 'Valid email is required' });
      return;
    }

    if (!mobile || !validatePhoneNumber(mobile)) {
      res.status(400).json({ error: 'Valid phone number is required' });
      return;
    }

    if (!message || message.trim() === '') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // Send email
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      message: message.trim(),
    });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully! We will get back to you soon.',
    });
  } catch (error) {
    console.log('Error in sendEmail controller:', error);
    res.status(500).json({
    
      error: error instanceof Error ? error.message : 'An unexpected error occurred while sending the email.',
    });
  }
};