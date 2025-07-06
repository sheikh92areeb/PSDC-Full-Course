const { getSessions, getUsers } = require("../utils/utils.js");

const isLoggedIn = async (req, res, next) => {
    // Check if sessionId exists in cookies
    const sessionId = req.cookies.sessionId;
    const sessions = await getSessions();
    const result = (sessionId && sessions[sessionId])? true : false;
    req.isLoggedIn = result;
    next();
}

const getUserData = async (req, res, next) => {
    const { isLoggedIn } = req;
    // If user is not logged in, skip getting user data
    if (!isLoggedIn) return res.status(403).redirect('/auth/login');
    
    // Get sessionId from cookies
    const sessionId = req.cookies.sessionId;
    const sessions = await getSessions();
    const session = sessions[sessionId];
    if (!session) return res.status(403).redirect('/auth/login');

    // Get user data from session
    const userId = session.id;
    const users = await getUsers();
    const user = users.find(user => user.id === userId);
    if (!user) return res.status(404).send("User not found");

    // Attach user data to request
    req.user = {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role
    };
    next();
}

module.exports = {
    getUserData,
    isLoggedIn
};