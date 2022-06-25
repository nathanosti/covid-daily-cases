import express from "express";
import { casesRoutes, homeRoute } from "src/routes/index";

const app = express();

app.use(express.json());

app.use(homeRoute);
app.use("/cases", casesRoutes);

export default app;
