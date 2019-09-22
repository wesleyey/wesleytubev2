import express from "express";
import routes from "../routes";
import { renderUpload, renderVideoDetail, renderEditVideo, renderDeleteVideo } from "../controllers/videoController"

const videoRouter = express.Router();

videoRouter.get(routes.upload, renderUpload);
videoRouter.get(routes.videoDetail, renderVideoDetail);
videoRouter.get(routes.editVideo, renderEditVideo);
videoRouter.get(routes.deleteVideo, renderDeleteVideo);

export default videoRouter;