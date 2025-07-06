const fs = require("fs");
const { getSessions } = require("../utils/utils.js");

const isGuest = async (req, res, next) => {
    // Check if sessionId exists in cookies
    const sessionId = req.cookies.sessionId;    
    const sessions = await getSessions();
    
    // If sessionId exists, redirect to dashboard
    if (sessionId && sessions[sessionId]) return res.status(403).redirect('/user/dashboard');
    next();
}

module.exports = {    
    isGuest
};