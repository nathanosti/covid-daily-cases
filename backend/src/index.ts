import app from "./app";
import "dotenv/config";

const PORT = process.env.LOCAL_PORT;

app.listen(PORT, () => console.log(`Server is Running in port ${PORT}`));
