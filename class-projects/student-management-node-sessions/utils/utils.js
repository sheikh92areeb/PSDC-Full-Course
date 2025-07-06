const fs = require('fs');

const getSessions = async () => {
    const sessionsData = await fs.promises.readFile('./data/sessions.json', "utf-8");
    const sessions = JSON.parse(sessionsData);
    return sessions;
}

const createSession = async (user) => {
    const sessionId = Math.floor(Math.random() * 10000000000); // Generate a random session ID
    const sessions = await getSessions();

    // Store the session data
    sessions[sessionId] = { id: user.id };
    await fs.promises.writeFile('./data/sessions.json', JSON.stringify(sessions, null, 2));
    return sessionId;
}

const getUsers = async () => {
    const usersData = await fs.promises.readFile('./data/users.json', 'utf-8');
    const users = JSON.parse(usersData);
    return users;
}

module.exports = {
    createSession,
    getSessions,
    getUsers,
}