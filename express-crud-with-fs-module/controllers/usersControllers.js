const users = require('../models/usersModel.js');

const getUsers = async (req, res) => {
    const userId = req.params.id;
    if (!userId) return res.status(200).send({ users , message:"Get All Users" });
    const user = users.find((user) => user.id === parseInt(userId));
    if (!user) return res.status(404).send({ message: "User Not Found" });
    res.status(200).send({ user, message:"Get User by ID" })
};

const createUser = async (req, res) => {

};

const updateUser = async (req, res) => {

};

const deleteUser = async (req , res) => {

};

module.exports = { 
    getUsers,
    createUser,
    updateUser,
    deleteUser
};