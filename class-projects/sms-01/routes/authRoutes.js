const express = require('express');
const { getLoginPage, getResetPasswordPage } = require('../controllers/authControllers');

const authRouter = express.Router();

authRouter.get('/login', getLoginPage);
authRouter.get('/reset-password', getResetPasswordPage);

module.exports = authRouter;