const express = require('express');
const { getLoginPage, loginUser } = require('../controllers/authControllers.js');
const { isGuest } = require('../middlewares/authMiddlerwares.js');

const authRouter = express.Router();

authRouter.get('/login', isGuest, getLoginPage);
authRouter.post('/login', isGuest, loginUser);

module.exports = authRouter;