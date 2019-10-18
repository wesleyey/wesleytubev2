import express from "express";
import routes from "../routes";
import { renderHome, renderSearch } from "../controllers/videoController";
import { getLogin, postLogin, renderLogout, getJoin, postJoin, getMe } from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";


const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, renderHome);
globalRouter.get(routes.logout, onlyPrivate, renderLogout);
globalRouter.get(routes.search, renderSearch);

globalRouter.get(routes.me, getMe);

export default globalRouter;