import { Router } from "express";
import { CreateCases } from "src/controllers/case.controller";

import multer from "multer";

const multerConfig = multer();

const casesRoutes = Router();

casesRoutes.post("/create", multerConfig.single("file"), CreateCases);

export default casesRoutes;
