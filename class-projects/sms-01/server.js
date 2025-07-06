const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => res.render('index', { title: null }));
app.use('/auth', authRouter);

app.get('/user/dashboard', (req, res) => {
    res.render('dashboard');
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));