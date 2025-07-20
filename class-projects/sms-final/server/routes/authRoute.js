// Import Libraries and Dependencies
const express = require('express');
const { getLoginPage, getResetPasswordPage, getSignupPage } = require('../controllers/authController');

// Create Router
const authRouter = express.Router();

// Router Endpoints
authRouter.get('/login', getLoginPage);
authRouter.get('/reset-password', getResetPasswordPage);
authRouter.get('/sign-up', getSignupPage);

// Export Router
module.exports = authRouter