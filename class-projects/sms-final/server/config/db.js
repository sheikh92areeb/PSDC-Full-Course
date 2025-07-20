const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/teck-park-DB`);
};

module.exports = { connectDB };