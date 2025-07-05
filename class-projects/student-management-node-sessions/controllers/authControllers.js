const users = require("../data/users-data.js");
const usersSessions = require("../data/users-sessions.js");



const getLoginPage = (req, res) => {
    res.render("login", { title: "Login", error: null });
};

const loginUser = (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) return res.status(401).render("login", { title: "Login", error: "Invalid username or password" });

    // If user exists, set session data
    const sessionId = Math.floor(Math.random() * 1000000);
    usersSessions[sessionId] = user;

    // Set a cookie with the session ID
    res.cookie("sessionId", sessionId, { httpOnly: true, maxAge: 60 * 60 * 1000 });

    // Redirect Dashboard
    res.redirect("/user/dashboard");
}


module.exports = {
    getLoginPage, loginUser,
}