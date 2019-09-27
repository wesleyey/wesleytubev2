import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
}

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        //to do register user, login
        res.redirect(routes.home);
    }
}
export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => res.redirect(routes.home);

export const renderLogout = (req, res) => {
    //to do logout
    res.redirect(routes.home);
}
export const renderUserDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const renderEditProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const renderChangePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });