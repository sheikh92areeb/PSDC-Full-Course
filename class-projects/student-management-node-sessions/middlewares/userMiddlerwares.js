const { getSessions } = require("../utils/sessions.js");

const getUserData = async (req, res, next) => {
    // Check if sessionId exists in cookies
    const sessionId = req.cookies.sessionId;
    const sessions = await getSessions();

    // If sessionId exists, get user data
    if (sessionId && sessions[sessionId]) {
        req.user = sessions[sessionId];
    }    
    next();
}

const isLoggedIn = async (req, res, next) => {
    // Check if sessionId exists in cookies
    const sessionId = req.cookies.sessionId;
    const sessions = await getSessions();

    // If sessionId exists, redirect to dashboard
    if (!sessionId || !sessions[sessionId]) return res.status(403).redirect('/auth/login');
    next();
}

module.exports = {
    getUserData,
    isLoggedIn
};