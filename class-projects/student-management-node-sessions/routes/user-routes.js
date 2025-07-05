const express = require('express');
const { getDashboardPage } = require('../controllers/userontrollers.js');
const { getUserData, isLoggedIn } = require('../middlewares/userMiddlerwares.js');

const userRouter = express.Router();

userRouter.get('/dashboard', isLoggedIn, getUserData, getDashboardPage);

module.exports = userRouter;