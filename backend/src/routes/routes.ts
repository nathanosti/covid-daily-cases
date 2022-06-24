import { Router } from "express";

import multer from "multer";
import converCsv from "src/utils/convertCsv";

const multerConfig = multer();

const routes = Router();

routes.get("/", (request, response) => {
  return response
    .status(200)
    .send("Fullstack Challenge 2021 🏅 - Covid Daily Cases");
});

routes.post(
  "/cases/create",
  multerConfig.single("file"),
  async (request, response) => {
    const { buffer } = request.file;

    const newCases = await converCsv(buffer);

    return response
      .status(200)
      .json({ msg: "New cases registered successfully", newCases })
      .send();
  }
);

export default routes;
