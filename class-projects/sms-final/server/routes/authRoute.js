// Import Libraries and Dependencies
const express = require('express');
const { getLoginPage, getResetPasswordPage, getSignupPage, loginUser, registerUser, logoutUser, sendVerifyOTP, verifyEmail, sendResetOTP, resetPassword } = require('../controllers/authController');
const { userAuth } = require('../middlewares/userAuth');

// Create Router
const authRouter = express.Router();

// Router Endpoints
authRouter.get('/login', getLoginPage);
authRouter.get('/reset-password', getResetPasswordPage);
authRouter.get('/sign-up', getSignupPage);
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.post('/logout', logoutUser);
authRouter.post('/send-verify-otp', userAuth, sendVerifyOTP);
authRouter.post('/verify-email', userAuth, verifyEmail);
authRouter.post('/send-reset-otp', sendResetOTP);
authRouter.post('/reset-password', resetPassword);

// Export Router
module.exports = authRouter