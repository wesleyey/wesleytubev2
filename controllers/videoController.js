import routes from "../routes";

export const renderHome = (req, res) =>
  res.render("home", { pageTitle: "Home" });
export const renderSearch = (req, res) => {
  const {
    query: { keyword: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  //to do upload and save video
  res.redirect(routes.videoDetail(222));
};

export const renderVideoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const renderEditVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const renderDeleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
