import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Wesley Tube";
    res.locals.routes = routes;
    next()
}