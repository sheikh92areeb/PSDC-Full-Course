const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));