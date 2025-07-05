const express = require('express');
const { getLoginPage, loginUser } = require('../controllers/authControllers.js');

const authRouter = express.Router();

authRouter.get('/login', getLoginPage);
authRouter.post('/login', loginUser);

authRouter.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

authRouter.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Handle registration logic here
  res.redirect('/');
});

module.exports = authRouter;