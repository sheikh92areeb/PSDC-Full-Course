const express = require('express');
const { getDashboardPage } = require('../controllers/userontrollers.js');
const { getUserData } = require('../middlewares/userMiddlerwares.js');

const userRouter = express.Router();

userRouter.get('/dashboard', getUserData, getDashboardPage);

module.exports = userRouter;