import { Router } from "express";
import {
  createDeploymentController,
  deleteDeploymentController,
  getAllDeploymentController,
} from "../api/controllers/deployment";

let depRouter = Router();

depRouter.get("/all", getAllDeploymentController);
depRouter.post("/delete", deleteDeploymentController);
depRouter.post("/create", createDeploymentController);

export default depRouter;
