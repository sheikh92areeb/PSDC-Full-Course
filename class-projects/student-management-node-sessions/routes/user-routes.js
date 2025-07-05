const express = require('express');
const usersSessions = require('../data/users-sessions.js');
const users = require('../data/users-data.js');

const userRouter = express.Router();

userRouter.get('/dashboard', (req, res) => {
    req.cookies.sessionId = req.cookies.sessionId || null;
    if (!req.cookies.sessionId) {
        return res.redirect('/auth/login');
    }
    const user = usersSessions[req.cookies.sessionId];
    console.log('User:', user);
    res.render('dashboard', { title: 'Dashboard', user });
});

module.exports = userRouter;