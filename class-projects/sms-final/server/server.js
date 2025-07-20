const express = require("express");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/authRoute");
const { connectDB } = require("./config/db");


dotenv.config();

const app = express();
const port = 3000;

connectDB();
app.set('view engine', 'ejs');
app.use('/assets', express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => res.send("API is Working"));
app.use('/auth', authRouter);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));