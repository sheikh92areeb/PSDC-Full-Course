const express = require('express');
const usersRoute = require('./routes/usersRoutes.js');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use('/', usersRoute);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});