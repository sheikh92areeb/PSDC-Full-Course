// Import Libraries and Dependencies
const jwt = require('jsonwebtoken');

// User Auth Middleware Function
const userAuth = (req, res, next) => {
    // Extract Token from Request Object
    const { token } = req.cookies;

    // Verify Token
    if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

    try {
        // Token Decode
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        // Extract ID from Token and Set in Request Object
        if (tokenDecode?.id) {
            req.user = { id: tokenDecode.id };
        } else {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        // Call Next Function
        next();

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Export Middleware Function
module.exports = {
    userAuth
};