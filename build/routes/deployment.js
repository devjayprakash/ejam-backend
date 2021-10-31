"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var deployment_1 = require("../api/controllers/deployment");
var depRouter = (0, express_1.Router)();
depRouter.get("/", deployment_1.getAllDeploymentController);
depRouter.delete("/", deployment_1.deleteDeploymentController);
depRouter.post("/create", deployment_1.createDeploymentController);
exports.default = depRouter;
