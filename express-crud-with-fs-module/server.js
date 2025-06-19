const express = require('express');
const usersRoute = require('./routes/usersRoutes.js');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello! World.');
});

app.use('/', usersRoute);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});