import express from "express";
import routes from "../routes";
import { renderUserDetail, renderEditProfile, renderChangePassword } from "../controllers/userController"
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), renderUserDetail);
userRouter.get(routes.editProfile, onlyPrivate, renderEditProfile);
userRouter.get(routes.changePassword, onlyPrivate, renderChangePassword);

export default userRouter;
