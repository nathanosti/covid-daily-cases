import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
  return response
    .status(200)
    .send("Fullstack Challenge 2021 🏅 - Covid Daily Cases");
});

export default routes;
