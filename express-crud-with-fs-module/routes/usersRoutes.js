const express = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/usersControllers.js')

const usersRoute = express.Router();

usersRoute.get('/users{/:id}', getUsers);
usersRoute.post('/users', createUser);
usersRoute.patch('/users/:id', updateUser);
usersRoute.delete('/users/:id', deleteUser);

module.exports = usersRoute;