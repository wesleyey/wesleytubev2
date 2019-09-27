import express from "express";
import routes from "../routes";
import { getUpload, postUpload, renderVideoDetail, renderEditVideo, renderDeleteVideo } from "../controllers/videoController"

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.videoDetail(), renderVideoDetail);
videoRouter.get(routes.editVideo, renderEditVideo);
videoRouter.get(routes.deleteVideo, renderDeleteVideo);

export default videoRouter;