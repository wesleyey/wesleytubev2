import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT;
const handleListen = () => console.log(`Linsten on ${PORT}`);

app.listen(PORT, handleListen);
