import { Router } from "express";
import {
  createDeploymentController,
  deleteDeploymentController,
  getAllDeploymentController,
} from "../api/controllers/deployment";

let depRouter = Router();

depRouter.get("/", getAllDeploymentController);
depRouter.delete("/", deleteDeploymentController);
depRouter.post("/create", createDeploymentController);

export default depRouter;
