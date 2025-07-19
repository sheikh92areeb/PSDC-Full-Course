
const getLoginPage = (req,res) => {
    res.render('login', { title:"Login" });
}

const getResetPasswordPage = (req,res)=>{
    res.render('reset-pass', { title: "Reset Password" });
}

module.exports = {
    getLoginPage, getResetPasswordPage
}