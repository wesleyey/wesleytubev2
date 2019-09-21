import express from "express"
import routes from "../routes"
import { renderHome, renderSearch } from "../controllers/videoController"
import { renderLogin, renderLogout, renderJoin } from "../controllers/userController"


const globalRouter = express.Router();

globalRouter.get(routes.home, renderHome);
globalRouter.get(routes.join, renderJoin);
globalRouter.get(routes.login, renderLogin);
globalRouter.get(routes.logout, renderLogout);
globalRouter.get(routes.search, renderSearch);


export default globalRouter