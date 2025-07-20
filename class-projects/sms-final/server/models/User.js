// Import Libraries and Dependencies
const mongoose = require('mongoose');

// Create User Schema
const userSchema = new mongoose.Schema({
    // Basic Info
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    dob: { type: Date, default: null },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], },
    bio: { type: String, default: '' },
    profile: { type: String, default: '' },

    // Roles
    role: { type: String, enum: ['admin', 'student', 'teacher'], required: true },

    // Verification and Security
    isVerified: { type: Boolean, default: false },
    verifyOtp: { type: String, default: '' },
    resetOtp: { type: String, default: '' },
    verifyOtpExpiryAt: { type: Number, default: 0 },
    resetOtpExpiryAt: { type: Number, default: 0 },
    lastLoginAt: { type: Date },
    passwordChangedAt: { type: Date },    

}, { timestamps: true } );

// Create User Model with Schema
const User = mongoose.models.User || mongoose.model('User', userSchema);

// Export User Model
module.exports = User