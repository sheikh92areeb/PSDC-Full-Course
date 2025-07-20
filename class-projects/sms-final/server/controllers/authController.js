const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const { transporter } = require('../config/nodemailer.js');

// GET PAGES ENDPOINTS
const getLoginPage = (req,res) => res.send("LOGIN PAGE");
const getResetPasswordPage = (req,res)=>res.send("RESET PASSWORD PAGE");
const getSignupPage = (req, res) => res.send("SIGN UP PAGE");

// AUTHENTICATION ENDPOINTS

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
        // find user by username
        const user = await User.findOne({ username });
        if (!user) return res.status(401).json({ success: false, message: "Invalid Username" });

        // check Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ success: false, message: "Invalid Password" });

        // Update Last Login
        const lastLogin = Date.now();
        user.lastLoginAt = lastLogin;
        awaituser.save();

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
const logoutUser = async (req, res) => {}

// 04- Send Verify OTP
const sendVerifyOTP = async (req, res) => {}

// 05- Verify Email
const verifyEmail = async (req, res) => {}

// 06- Send Reset OTP
const sendResetOTP = async (req, res) => {}

// 07- Reset Password
const resetPassword = async (req, res) => {}


module.exports = {
    getLoginPage, getResetPasswordPage, getSignupPage,
    registerUser, loginUser, logoutUser,
    sendVerifyOTP, verifyEmail,
    sendResetOTP, resetPassword
}