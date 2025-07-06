const fs = require('fs');
const { getUsers, createSession, getSessions } = require("../utils/utils.js");

const getLoginPage = (req, res) => {    
   res.render("login", { error: null });
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) return res.status(400).render("login", { error: "Username and password are required" });

    // Check if the user exists
    const users = await getUsers();    

    // Find the user in the users array
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) return res.status(401).render("login", { error: "Invalid username or password" });

    // If user exists, set session data
    const sessionId = await createSession(user);

    // Set a cookie with the session ID
    res.cookie("sessionId", sessionId, { httpOnly: true, maxAge: 60 * 60 * 1000 });

    // Redirect Dashboard
    res.redirect("/user/dashboard");    
}

const logoutUser = async (req, res) => {
    
    // Clear the session data from the server
    const sessionId = req.cookies.sessionId;
    const sessions = await getSessions();
    delete sessions[sessionId];
    // Save the updated sessions data
    await fs.promises.writeFile('./data/sessions.json', JSON.stringify(sessions, null, 2));
        
    // Clear the session cookie
    res.clearCookie("sessionId");
    
    // Redirect to login page
    res.redirect("/auth/login");
}

module.exports = {
    getLoginPage, loginUser,
    logoutUser
}