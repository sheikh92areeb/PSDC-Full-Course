const getDashboardPage = (req, res) => {
    res.render('dashboard', { user: req.user });
}

const getUserProfilePage = (req, res) => {
    res.render('profile', { user: req.user });
}

module.exports = {
    getDashboardPage,
    getUserProfilePage
};