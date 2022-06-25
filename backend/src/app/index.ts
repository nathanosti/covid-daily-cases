import express from "express";
import { casesRoutes, homeRoute } from "src/routes/index";
import { connectDatabase } from "src/database";

const app = express();

connectDatabase();

app.use(express.json());

app.use(homeRoute);
app.use("/cases", casesRoutes);

export default app;
