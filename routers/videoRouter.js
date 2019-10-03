import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  renderVideoDetail,
  renderEditVideo,
  renderDeleteVideo,
  postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), renderVideoDetail);

videoRouter.get(routes.editVideo(), renderEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo, renderDeleteVideo);

export default videoRouter;
