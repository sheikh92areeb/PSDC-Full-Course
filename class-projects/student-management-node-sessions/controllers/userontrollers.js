const getDashboardPage = (req, res) => {
    res.render('dashboard', { title: 'Dashboard', user: req.user });
}

const getUserProfilePage = (req, res) => {
    res.render('profile', { title: 'Profile', user: req.user });
}

module.exports = {
    getDashboardPage,
    getUserProfilePage
};