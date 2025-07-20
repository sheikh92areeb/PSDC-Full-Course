// Import Libraries and Dependencies
const mongoose = require('mongoose');

// Create Connection
const connectDB = async () => {
    mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/teck-park-DB`);
};

// Export Connection Function
module.exports = { connectDB };