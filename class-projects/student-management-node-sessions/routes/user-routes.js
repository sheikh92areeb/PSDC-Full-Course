const express = require('express');
const { getDashboardPage, getUserProfilePage } = require('../controllers/userontrollers.js');
const { getUserData, isLoggedIn } = require('../middlewares/userMiddlerwares.js');

const userRouter = express.Router();

userRouter.get('/dashboard', isLoggedIn, getUserData, getDashboardPage);
userRouter.get('/profile', isLoggedIn, getUserData, getUserProfilePage);

module.exports = userRouter;