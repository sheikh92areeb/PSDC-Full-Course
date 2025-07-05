const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth-routes.js');
const userRouter = require('./routes/user-routes.js');
const { getSessions } = require('./utils/sessions.js');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended: true}));
app.use(cookieParser());

const isLoggedIn = async (req, res, next) => {
    // Check if sessionId exists in cookies
    const sessionId = req.cookies.sessionId;
    const sessions = await getSessions();

    // If sessionId exists, redirect to dashboard
    const result = (sessionId && sessions[sessionId])? true : false;
    req.isLoggedIn = result;
    next();
}

app.get('/', isLoggedIn, (req, res) => {
  res.render('index', { title: 'Student Management System', isLoggedIn: req.isLoggedIn  });
});

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));