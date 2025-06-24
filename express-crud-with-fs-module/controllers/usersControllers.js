const users = require('../models/usersModel.js');

const getUsers = async (req, res) => {
    const userId = req.params.id;
    if (!userId) return res.status(200).send({ users , message:"Get All Users" });
    const user = users.find((user) => user.id === parseInt(userId));
    if (!user) return res.status(404).send({ message: "User Not Found" });
    res.status(200).send({ user, message:"Get User by ID" })
};

const createUser = async (req, res) => {
    const { username, email, password, fullname, age, gender } = req.body;

    if (!username || !email || !password || !fullname || !age || !gender) {
        return res.status(200),send({ message: "All Feilds are Required" });
    }

    const user = users.find(user => user.email === email || user.username === username);
    if (user) return res.status(200).send({ message: "User already exist" });

    const newUser = { id: Date.now(), username, email, password, fullname, age, gender };
    users.push(newUser);

    res.status(201).send({ newUser, message: "User Created" });
};

const updateUser = async (req, res) => {
    const userID = req.params.id;
    if (!userID) return res.status(404).send({ message:"User ID is Required" });

    const userIndex = users.findIndex(user => user.id === parseInt(userID));
    if (!users[userIndex]) return res.status(404).send({ message: "User Not Found" });

    const user = users[userIndex];
    const updateUser = { 
        id:parseInt(userID), 
        username:  req.body.username ? req.body.username : user.username, 
        email: req.body.email ? req.body.email : user.email, 
        password: req.body.password ? req.body. password : user.password,
        fullname: req.body.fullname ? req.body.fullname: user.fullname,
        age: req.body.age ? req.body.age : user.age,
        gender: req.body.gender ? req.body.gender : user.gender
    }

    users.splice(userIndex, 1, updateUser);
    res.status(200).send({ updateUser, message: "User Data Updated" });
};

const deleteUser = async (req , res) => {
    const userID = req.params.id;
    if (!userID) return res.status(200).send({ message: "User ID is Requires" });

    const userIndex = users.findIndex(user => user.id === parseInt(userID));
    if (!users[userIndex]) return res.status(404).send({ message: "User Not Found" });

    users.splice(userIndex, 1);
    res.status(200).send({ message: "User Deleted" });
};

module.exports = { 
    getUsers,
    createUser,
    updateUser,
    deleteUser
};