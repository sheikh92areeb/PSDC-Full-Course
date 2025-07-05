const fs = require('fs');

const getUsers = async () => {
    const usersData = await fs.promises.readFile('./data/users.json', 'utf-8');
    const users = JSON.parse(usersData);
    return users;
}




module.exports = {
  getUsers
};