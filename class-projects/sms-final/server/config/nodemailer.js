// Import Libraries and Dependencies
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// Create Mail Transporter
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

// Export Transporter
module.exports = {transporter}