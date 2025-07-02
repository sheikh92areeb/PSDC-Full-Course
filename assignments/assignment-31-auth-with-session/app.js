const express = require('express');
const cookieParser = require('cookie-parser');
const { users } = require('./data/users-data.js');

const app = express();
const port = 3000;

const sessions = {};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    const user = users.find(user => user.username === username && user.password === parseInt(password));
    if (!user) return res.status(401).render('login', { error: 'Invalid username or password' });
    const session_id = Date.now()+Math.floor(Math.random() * 1000000);
    sessions[session_id] = user;
    res.setHeader('Set-Cookie', `sessionID=${session_id}; HttpOnly; Path=/`);
    res.status(200).render('dashboard', { user });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
