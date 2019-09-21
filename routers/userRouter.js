import express from "express";
import routes from "../routes";
import { renderUsers, renderUserDetail, renderEditProfile, renderChangePassword } from "../controllers/userController"

const userRouter = express.Router();

userRouter.get(routes.home, renderUsers);
userRouter.get(routes.userDetail, renderUserDetail);
userRouter.get(routes.editProfile, renderEditProfile);
userRouter.get(routes.changePassword, renderChangePassword);

export default userRouter;
