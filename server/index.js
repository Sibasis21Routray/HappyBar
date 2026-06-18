import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.post("/api/contact", async (req, res) => {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  try {
    const { name, email, mobile, message, token } = req.body || {};
    if (!token) return res.status(400).json({ error: "Missing Turnstile token" });

    // Verify Turnstile
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET || "", response: token }),
    });
    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) return res.status(400).json({ error: "Turnstile verification failed", details: verifyJson });

    // Send email via Brevo (SMTP transactional API)
    const brevoKey = process.env.BREVO_API_KEY;
    if (!brevoKey) return res.status(500).json({ error: "Brevo API key not configured" });

    const emailPayload = {
      sender: { name: "Happy Bar Website", email: "borntoreigns234@gmail.com" },
      to: [{ email: "tusar00005@gmail.com", name: "Happy Bar" }],
      subject: `Contact Form Submission from ${name}`,
      htmlContent: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mobile:</strong> ${mobile}</p><p><strong>Message:</strong><br/>${message}</p>`,
    };

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": brevoKey },
      body: JSON.stringify(emailPayload),
    });
    const brevoJson = await brevoRes.json();
    if (!brevoRes.ok) return res.status(500).json({ error: "Brevo error", details: brevoJson });

    return res.json({ success: true, result: brevoJson });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Contact server listening on ${PORT}`);
});
