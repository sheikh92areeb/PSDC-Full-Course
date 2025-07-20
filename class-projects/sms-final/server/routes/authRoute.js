const express = require('express');
const { getLoginPage, getResetPasswordPage, getSignupPage } = require('../controllers/authController');

const authRouter = express.Router();

authRouter.get('/login', getLoginPage);
authRouter.get('/reset-password', getResetPasswordPage);
authRouter.get('/sign-up', getSignupPage);

module.exports = authRouter