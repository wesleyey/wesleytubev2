export const renderJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const renderLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const renderLogout = (req, res) => res.render("logout", { pageTitle: "Login" });
export const renderUserDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const renderEditProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const renderChangePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });