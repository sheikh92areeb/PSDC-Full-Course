// Import Libraries and Dependencies
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const { transporter } = require('../config/nodemailer.js');
const { EMAIL_VERIFY_TEMPLATE, PASSWORD_RESET_TEMPLATE } = require('../config/emailTemplates.js');

// GET PAGES CONTROLLERS
const getLoginPage = (req,res) => res.send("LOGIN PAGE");
const getResetPasswordPage = (req,res)=>res.send("RESET PASSWORD PAGE");
const getSignupPage = (req, res) => res.send("SIGN UP PAGE");

// AUTHENTICATION CONTROLLERS
// 01- Register
const registerUser = async (req, res) => {
    // extract data from request body
    const { name, email, password } = req.body;

    // validate empty feilds
    if (!name || !email || !password) return res.status(400).json({ success: false, message:"All Feilds are Required" });

    try{
        // check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser)  return res.status(400).json({ success: false, message: "User already exists" });

        // Hashing Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate unique username
        let username = name.toLowerCase().replaceAll(" ", "");
        const usernameExists = await User.findOne({ username });
        if (usernameExists) username += Math.floor(Math.random() * 1000);

        // Saved User in DB
        const user = new User({
            name,
            email,
            username,
            password: hashedPassword,
            role: "student"
        });
        await user.save();

        // Generate Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'Production',
            sameSite: process.env.NODE_ENV === 'Production' ? 'None' : 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days 
        });

        // Send Welcome Email
        const mailOptions = {
            from: process.env.APP_EMAIL,
            to: email,
            subject: "Welcome to Our Student Management System",
            text: `Hello ${name},\n\nThank you for registering with us.\n\nBest Regards,\nTeam`,
        };
        await transporter.sendMail(mailOptions);

        // Send Response
        return res.status(200).json({success: true, message:"User Created Successfully"});

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// 02- Login
const loginUser = async (req, res) => {
    // extract data from request body
    const { username, password } = req.body;

    // validate empty feilds
    if (!username || !password) return res.status(400).json({ success: false, message: "Username and Password are Required" });

    try{
        // Find user by username (convert to lowercase for consistency)
        const user = await User.findOne({ username: username.toLowerCase() });
        if (!user) return res.status(401).json({ success: false, message: "Invalid Username" });

        // check Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ success: false, message: "Invalid Password" });

        // Update last login time
        user.lastLoginAt = new Date();
        await user.save();

        // Generate Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days 
        });

        // Send Response
        return res.status(200).json({success: true, message:"User Logged in Successfully"});

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// 03- Logout
const logoutUser = async (req, res) => {
    try {
        // Clear Cookie
        res.clearCookie('token', { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Strict',
            path: '/',
        });

        // Send Response
        return res.status(200).json({ success: true, message: "Logged out successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// 04- Send Verify OTP
const sendVerifyOTP = async (req, res) => {
    try {
        // Extract User ID from Request Object (Set by Middleware)
        const userID = req.user.id;

        // Find User by ID
        const user = await User.findById(userID);

        // Check User Varification
        if (user.isVerified) return res.status(400).json({ success: false, message: "User already verified" });

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); //Generate 6 digit otp
        user.verifyOtp = otp;
        user.verifyOtpExpiryAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
        await user.save();

        // Send OTP via Email
        const mailOptions = {
            from: process.env.APP_EMAIL,
            to: user.email,
            subject: "Account Verification OTP",            
            html: EMAIL_VERIFY_TEMPLATE.replace('{{otp}}', otp).replace('{{email}}', user.email)
        };
        await transporter.sendMail(mailOptions);

        // Send Response
        return res.status(200).json({ success: true, message: "OTP sent to email" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// 05- Verify Email
const verifyEmail = async (req, res) => {
    // Extract otp and user ID from request object
    const { otp } = req.body;
    const userID = req.user.id;
    
    // Validate Empty Feilds
    if (!otp || !userID) return res.status(400).json({ success: false, message: "Missing Details" });

    try {
        // Find User by ID
        const user = await User.findById(userID);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        // Validate OTP
        if (user.verifyOtp === '' || user.verifyOtp !== otp ) {
            return res.status(400).json({ success: false, message: "Invalid OTP" });
        }

        // Check OTP Expire Date
        if (user.verifyOtpExpiryAt < Date.now()) {
            return res.status(400).json({ success: false, message: "OTP expired" });
        }

        // Set User Varification Data
        user.isVerified = true;
        user.verifyOtp = "";
        user.verifyOtpExpiryAt = 0;
        await user.save();

        // Send Response
        return res.status(200).json({ success: true, message: "Email verified successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// 06- Send Reset OTP
const sendResetOTP = async (req, res) => {
    // Extract email form request body
    const { email } = req.body;

    // Validate empty field
    if (!email) return res.status(400).json({ success: false, message: "Email is required" });

    try {
        // find user by email
        const user = await User.findOne({email});
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        // Generate and set OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit otp
        user.resetOtp = otp;
        user.resetOtpExpiryAt = Date.now() + 15 * 60 * 1000; // 15 minutes
        await user.save();

        // Send otp via email
        const mailOptions = {
            from: process.env.APP_EMAIL,
            to: user.email,
            subject: "Password Reset OTP",            
            html: PASSWORD_RESET_TEMPLATE.replace('{{otp}}', otp).replace('{{email}}', user.email)
        };
        await transporter.sendMail(mailOptions);

        // send response
        return res.status(200).json({ success: true, message: "OTP sent to email" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// 07- Reset Password
const resetPassword = async (req, res) => {
    // Extract data from request body
    const { email, otp, newPassword } = req.body;

    // Validate Empty fields
    if (!email || !otp || !newPassword) return res.status(400).json({ success: false, message: "Missing Details" });

    try {
        // find user by email
        const user = await User.findOne({email});
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        // Validate OTP
        if (user.resetOtp === "" || user.resetOtp !== otp) {
            return res.status(400).json({ success: false, message: "Invalid OTP" });        
        }

        // Check Expire OTP
        if (user.resetOtpExpiryAt < Date.now()) {
            return res.status(400).json({ success: false, message: "OTP expired" });
        }

        // Hashing and Set new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetOtp = "";
        user.resetOtpExpiryAt = 0;
        await user.save();

        // send response
        return res.status(200).json({ success: true, message: "Password reset successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Exports Functions Controller
module.exports = {
    getLoginPage, getResetPasswordPage, getSignupPage,
    registerUser, loginUser, logoutUser,
    sendVerifyOTP, verifyEmail,
    sendResetOTP, resetPassword
}