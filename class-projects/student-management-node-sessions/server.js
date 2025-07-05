const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth-routes.js');
const userRouter = require('./routes/user-routes.js');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index', { title: 'Student Management System' });
});

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));