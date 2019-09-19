import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const handleListen = () => console.log(`Linsten on ${PORT}`)

const handleHome = (req, res) => res.send("This is Home!");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"))

app.listen(PORT, handleListen);

app.get("/", handleHome);