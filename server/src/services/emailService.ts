import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendContactEmail = async (data: EmailData): Promise<void> => {
  try {
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'long',
      timeStyle: 'short',
    });

    const adminMailOptions = {
      from: `"Happy Bar Nutrition" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || 'info@happybarnutrition.org',
      subject: `📬 New Contact Form Submission from ${data.name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);max-width:600px;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#2e7d32,#66bb6a);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:0.5px;">
                🌿 Happy Bar Nutrition
              </h1>
              <p style="margin:8px 0 0;color:#c8e6c9;font-size:14px;">New Contact Form Submission</p>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background:#e8f5e9;padding:14px 40px;border-bottom:1px solid #c8e6c9;">
              <p style="margin:0;color:#2e7d32;font-size:14px;font-weight:600;">
                📥 You have a new message from your website contact form.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 24px;color:#555;font-size:15px;">Here are the details submitted:</p>

              <!-- Info Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
                <tr>
                  <td style="padding:18px 24px;border-bottom:1px solid #e0e0e0;">
                    <p style="margin:0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.8px;font-weight:600;">Full Name</p>
                    <p style="margin:4px 0 0;font-size:16px;color:#1a1a1a;font-weight:600;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 24px;border-bottom:1px solid #e0e0e0;">
                    <p style="margin:0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.8px;font-weight:600;">Email Address</p>
                    <p style="margin:4px 0 0;font-size:16px;color:#1a1a1a;">
                      <a href="mailto:${data.email}" style="color:#2e7d32;text-decoration:none;">${data.email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 24px;border-bottom:1px solid #e0e0e0;">
                    <p style="margin:0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.8px;font-weight:600;">Mobile Number</p>
                    <p style="margin:4px 0 0;font-size:16px;color:#1a1a1a;">
                      <a href="tel:${data.mobile}" style="color:#2e7d32;text-decoration:none;">${data.mobile}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 24px;">
                    <p style="margin:0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.8px;font-weight:600;">Message</p>
                    <p style="margin:8px 0 0;font-size:15px;color:#333;line-height:1.7;white-space:pre-wrap;">${data.message.replace(/\n/g, '<br>')}</p>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${data.email}?subject=Re: Your inquiry - Happy Bar Nutrition"
                       style="display:inline-block;background:linear-gradient(135deg,#2e7d32,#43a047);color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:15px;font-weight:600;letter-spacing:0.3px;">
                      ✉️ Reply to ${data.name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f4f6f8;padding:20px 40px;border-top:1px solid #e0e0e0;text-align:center;">
              <p style="margin:0;color:#999;font-size:13px;">Submitted on ${submittedAt} (IST)</p>
              <p style="margin:6px 0 0;color:#bbb;font-size:12px;">This email was sent from the Happy Bar Nutrition contact form.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    // Send only to admin
    await transporter.sendMail(adminMailOptions);

    console.log('Admin notification email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};