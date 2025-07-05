const fs = require("fs");
const { getSessions } = require("../utils/sessions.js");

const isGuest = async (req, res, next) => {
    // Check if sessionId exists in cookies
    const sessionId = req.cookies.sessionId;    
    const sessions = await getSessions();

    console.log('Session ID:', sessionId);
    console.log('Sessions:', sessions);
    // If sessionId exists, redirect to dashboard
    if (sessionId && sessions[sessionId]) return res.status(403).redirect('/user/dashboard');
    next();
}

module.exports = {    
    isGuest
};