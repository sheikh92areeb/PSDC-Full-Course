const getLoginPage = (req, res) => {
    res.render('login', { title: 'Login |'});
};

const getResetPasswordPage = (req, res) => {
    res.render('reset-account', { title: 'Reset Account |' });
};

module.exports = {
    getLoginPage,
    getResetPasswordPage
}