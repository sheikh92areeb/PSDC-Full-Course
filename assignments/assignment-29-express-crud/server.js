const express = require('express');
const app = express();
const port = 3000;

const users = [];

app.get('/', (req, res) => {
  console.log(req.path);
  res.send('Hello World!');
});

app.get('/users{/:id}', (req, res) => {
  const userId = req.params.id;
  if (!userId) return res.status(200).send(users);
  const user = users.find(u => u.id === parseInt(userId));
  if (!user) return res.status(404).send('User not found');
  res.status(200).send(user);
});

app.post('/users', (req, res) => {
  const newUser = {
    id: Date.now(),
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    gender:"male"
  };

  users.push(newUser);
  res.send(`User ${newUser.id} is Created`);
});

app.patch('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (!userId) return res.status(400).send('User ID is required');
  const user = users.find(u => u.id === parseInt(userId));
  if (!user) return res.status(404).send('User not found');

  const updatedUser = {
    id: userId,
    name: "Amily Smith",
    email: "amily@example.com",
    age: 25,
    gender:"female"
  };

  const index = users.indexOf(user);
  users[index] = updatedUser;
  res.send(`User ${userId} is Updated`);
});

app.delete('/users/:id', (req, res) => {
  res.send('User Deleted');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});