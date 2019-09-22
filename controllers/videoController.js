export const renderHome = (req, res) => res.render("home", { pageTitle: "Home" });
export const renderSearch = (req, res) => res.render("search", { pageTitle: "Search" });
export const renderUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const renderVideoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const renderEditVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const renderDeleteVideo = (req, res) => res.render("delete Video", { pageTitle: "Delete Video" });
