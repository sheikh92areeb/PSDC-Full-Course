const fs = require('fs');

const getSessions = async () => {
    const sessionsData = await fs.promises.readFile('./data/sessions.json', "utf-8");
    const sessions = JSON.parse(sessionsData);
    return sessions;
}

const createSession = async (user) => {
    const sessionId = Math.floor(Math.random() * 1000000); 
    const sessions = await getSessions();

    // Store the session data
    sessions[sessionId] = { id: user.id, name: user.name, username: user.username, email: user.email, role: user.role };
    await fs.promises.writeFile('./data/sessions.json', JSON.stringify(sessions, null, 2));

    return sessionId;
}

module.exports = {
    createSession,
    getSessions,
}