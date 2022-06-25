import casesRoutes from "./cases.routes";
import { Router } from "express";

const homeRoute = Router();

homeRoute.get("/", (request, response) => {
  return response
    .status(200)
    .send("Fullstack Challenge 2021 🏅 - Covid Daily Cases");
});

export { casesRoutes, homeRoute };
