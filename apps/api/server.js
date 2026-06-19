require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ─── Environment Variable Guard ─────────────────────────────────────────────
const REQUIRED_ENV_VARS = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];

const getMissingEnvVars = () => {
  return REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
};

// ─── Secure Nodemailer Transporter Factory ───────────────────────────────────
// NOTE: Transporter is created per-request to always use the latest env vars.
// No hardcoded fallbacks — if env vars are missing, the request will fail fast.
const createTransporter = () => {
  const missing = getMissingEnvVars();
  if (missing.length > 0) {
    return null; // Signal to the route handler that config is incomplete
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: parseInt(process.env.SMTP_PORT, 10) === 465, // Use SSL on port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// ─── Main Contact Endpoint ───────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  // 1. Validate environment configuration first
  const missingVars = getMissingEnvVars();
  if (missingVars.length > 0) {
    // Log the specific missing vars on the server for debugging, but NEVER expose them to the client
    console.error(`[CONFIG ERROR] Missing required environment variables: ${missingVars.join(', ')}`);
    return res.status(500).json({
      success: false,
      message: 'Configuration Error', // Sanitized response — no stack traces exposed
    });
  }

  // 2. Validate incoming request body
  const { source, email, name, phone, message } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'A valid email address is required.',
    });
  }

  // 3. Build and send email
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"Amari Capitals IT Solutions EST" <${process.env.SMTP_USER}>`,
      to: process.env.SALES_EMAIL || 'sales@amaricapitals.com',
      subject: `New Lead: ${source || 'Website'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0B0B0B; color: #fff; border-radius: 12px;">
          <h2 style="color: #00E5FF; margin-bottom: 20px;">New Lead Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; color: #A0A0A0;">Source:</td><td style="padding: 8px; color: #fff;">${source || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; color: #A0A0A0;">Name:</td><td style="padding: 8px; color: #fff;">${name || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; color: #A0A0A0;">Email:</td><td style="padding: 8px; color: #fff;">${email}</td></tr>
            <tr><td style="padding: 8px; color: #A0A0A0;">Phone:</td><td style="padding: 8px; color: #fff;">${phone || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; color: #A0A0A0;">Message:</td><td style="padding: 8px; color: #fff;">${message || 'N/A'}</td></tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Your request has been submitted successfully.',
    });

  } catch (error) {
    // Log full error on the server side for debugging, return sanitized response to client
    console.error('[MAILER ERROR]', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to process request. Please try again later.',
    });
  }
});

// ─── Health Check ────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  const missingVars = getMissingEnvVars();
  res.status(missingVars.length === 0 ? 200 : 503).json({
    status: missingVars.length === 0 ? 'OK' : 'DEGRADED',
    // Never expose which variables are missing in a production endpoint
    configured: missingVars.length === 0,
  });
});

app.listen(PORT, () => {
  console.log(`✅ API server running on port ${PORT}`);
  const missing = getMissingEnvVars();
  if (missing.length > 0) {
    console.warn(`⚠️  WARNING: Missing SMTP environment variables: ${missing.join(', ')}`);
    console.warn('   Email delivery will fail. Please configure your .env file.');
  } else {
    console.log('✅ All SMTP environment variables are loaded.');
  }
});
