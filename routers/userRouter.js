import express from "express";
import routes from "../routes";
import { renderUserDetail, renderEditProfile, renderChangePassword } from "../controllers/userController"

const userRouter = express.Router();

userRouter.get(routes.userDetail(), renderUserDetail);
userRouter.get(routes.editProfile, renderEditProfile);
userRouter.get(routes.changePassword, renderChangePassword);

export default userRouter;
