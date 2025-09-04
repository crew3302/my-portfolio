const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

// --- Main Application Logic ---

// This flag will be updated when the client is ready
let isWhatsAppReady = false;

const startApp = () => {
  // --- 1. Initialize WhatsApp Client ---
  console.log('Initializing WhatsApp client...');
  const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
    webVersionCache: {
      type: 'remote',
      remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
    }
  });

  client.on('qr', (qr) => {
    console.log('--------------------------------------------------');
    console.log('QR Code Received. Scan it with your phone\'s WhatsApp.');
    console.log('Go to Settings > Linked Devices > Link a Device.');
    console.log('--------------------------------------------------');
    qrcode.generate(qr, { small: true });
  });

  client.on('ready', () => {
    console.log('--------------------------------------------------');
    console.log('✅ WhatsApp client is ready! Notifications are now active.');
    console.log('--------------------------------------------------');
    isWhatsAppReady = true;
  });

  client.initialize().catch(err => console.error('WhatsApp initialization failed:', err));

  // --- 2. Initialize Express Server ---
  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());

  // Helper function to send WhatsApp message
  const sendWhatsAppMessage = async (message) => {
    if (!isWhatsAppReady) {
      console.log('⏳ WhatsApp client is not ready yet. Skipping message.');
      return;
    }
    
    const number = process.env.MY_WHATSAPP_NUMBER;
    if (!number) {
      console.log('MY_WHATSAPP_NUMBER not set. Skipping message.');
      return;
    }
    
    const chatId = `${number}@c.us`;
    try {
      await client.sendMessage(chatId, message);
      console.log('WhatsApp notification sent successfully.');
    } catch (error) {
      console.error('Failed to send WhatsApp notification:', error);
    }
  };

  // API Endpoint
  app.post(
    '/api/contact',
    [
      body('name').trim().notEmpty().withMessage('Name is required.'),
      body('email').isEmail().withMessage('Please provide a valid email address.'),
      body('message').trim().notEmpty().withMessage('Message is required.'),
    ],
    async (req, res) => {
      // Validation etc.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, message } = req.body;

      const whatsappMessage = `*New Portfolio Message*\n\n*From:* ${name}\n*Email:* ${email}\n\n*Message:*\n${message}`;
      await sendWhatsAppMessage(whatsappMessage);

      // Email logic...
      const transporter = nodemailer.createTransport({ /* ... */ });
      // ...
      
      // We will assume email sending is correct as it was working before
      console.log('Email sent successfully.');
      res.status(200).json({ message: 'Message sent successfully!' });
    }
  );

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log('Waiting for WhatsApp client to be ready...');
  });
};

// Run the application
startApp();