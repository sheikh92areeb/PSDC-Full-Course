const express = require('express');
const { getDashboardPage, getUserProfilePage } = require('../controllers/userontrollers.js');
const { getUserData, isLoggedIn } = require('../middlewares/userMiddlerwares.js');

const userRouter = express.Router();

userRouter.get('/dashboard', isLoggedIn, getUserData, getDashboardPage);
userRouter.get('/profile', isLoggedIn, getUserData, getUserProfilePage);
userRouter.get('/all-students', isLoggedIn, getUserData, (req, res) => {
  res.render('all-students', { isLoggedIn: req.isLoggedIn, user: req.user });
});

module.exports = userRouter;