import app from "./app";

const PORT = 4000;
const handleListen = () => console.log(`Linsten on ${PORT}`)

app.listen(PORT, handleListen);
