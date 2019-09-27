import express from "express";
import routes from "../routes";
import { renderHome, renderSearch } from "../controllers/videoController";
import { getLogin, postLogin, renderLogout, getJoin, postJoin } from "../controllers/userController";


const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, renderHome);
globalRouter.get(routes.logout, renderLogout);
globalRouter.get(routes.search, renderSearch);


export default globalRouter;