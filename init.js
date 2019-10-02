import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT;
const handleListen = () => console.log(`Linsten on ${PORT}`);

app.listen(PORT, handleListen);
