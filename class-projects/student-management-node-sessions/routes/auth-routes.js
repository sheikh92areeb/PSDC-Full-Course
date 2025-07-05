const express = require('express');
const { getLoginPage, loginUser, logoutUser } = require('../controllers/authControllers.js');
const { isGuest } = require('../middlewares/authMiddlerwares.js');

const authRouter = express.Router();

authRouter.get('/login', isGuest, getLoginPage);
authRouter.post('/login', isGuest, loginUser);
authRouter.post('/logout', logoutUser);

module.exports = authRouter;