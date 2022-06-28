import "dotenv/config";
import express from "express";
import routes from "src/routes/index";
import { connectDatabase } from "src/database";

const app = express();

connectDatabase();

app.use(express.json());

app.use(routes);

const PORT = process.env.LOCAL_PORT;

app.listen(PORT, () => console.log(`Server is Running in port ${PORT}`));