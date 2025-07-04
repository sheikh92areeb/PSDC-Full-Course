const fs = require('fs');
const { createSession, getSessions } = require("../utils/sessions.js");
const { getUsers } = require("../utils/users.js");

const getLoginPage = (req, res) => {    
   res.render("login", { title: "Login", error: null });
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const users = await getUsers();
    if (!username || !password) {
        return res.status(400).render("login", { title: "Login", error: "Username and password are required" });
    }

    // Find the user in the users array
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) return res.status(401).render("login", { title: "Login", error: "Invalid username or password" });

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


// const data = await fs.promises.readFile("./data/users.json", "utf-8");
// const users = JSON.parse(data);
// const user = { id: 4, name: "Sajid", username: "sajid32", email: "sajid@example.com", password: "sajid32", role: "student" };
// users.push(user);
// await fs.promises.writeFile("./data/users.json", JSON.stringify(users, null, 2));
// res.send(users);