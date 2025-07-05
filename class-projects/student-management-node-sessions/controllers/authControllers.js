const users = require("../data/users-data.js");
const fs = require('fs');
const { createSession } = require("../utils/sessions.js");

const getLoginPage = (req, res) => {    
   res.render("login", { title: "Login", error: null });
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) return res.status(401).render("login", { title: "Login", error: "Invalid username or password" });

    // If user exists, set session data
    const sessionId = await createSession(user);

    // Set a cookie with the session ID
    res.cookie("sessionId", sessionId, { httpOnly: true, maxAge: 60 * 60 * 1000 });

    // Redirect Dashboard
    res.redirect("/user/dashboard");    
}


module.exports = {
    getLoginPage, loginUser,
}


// const data = await fs.promises.readFile("./data/users.json", "utf-8");
// const users = JSON.parse(data);
// const user = { id: 4, name: "Sajid", username: "sajid32", email: "sajid@example.com", password: "sajid32", role: "student" };
// users.push(user);
// await fs.promises.writeFile("./data/users.json", JSON.stringify(users, null, 2));
// res.send(users);