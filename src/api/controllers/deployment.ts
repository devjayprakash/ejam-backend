import { NextFunction, Request, Response } from "express";
import { validate } from "validate.js";
import { deploymentValidation } from "../../util/validation/deployment";
import {
  createDeployment,
  deleteDeployment,
  getAllDeployments,
} from "../services/deployment.service";

//used to get all the deplument
export let getAllDeploymentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //there is no validation required here
  try {
    let deployments = await getAllDeployments();
    res.send({
      msg: "Fetched all the deployments successfully",
      data: deployments,
      result: true,
    });
  } catch (err) {
    next(err);
  }
};

//used to create a new deployment
export let createDeploymentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let valid = validate(req.body, deploymentValidation);
  if (validate === undefined) {
    //if valid === undefined that means the schema validation does not have any issues
    let new_dep = await createDeployment(req.body);
    res.send({
      msg: "New deployement created successfully",
      data: new_dep,
      result: true,
    });
  } else {
    res.status(401).send({
      msg: "Validation failed",
      data: valid,
      result: false,
    });
  }
};

//used to delete a deployment
export let deleteDeploymentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id: string = req.body.id;
  if (id) {
    let delInfo = await deleteDeployment(id);
    res.send({
      msg: "Deployment deleted successfully",
      result: true,
      data: delInfo,
    });
  } else {
    res.status(401).send({
      msg: "Validation failed",
      data: {
        msg: "No id was found in the request",
      },
      result: false,
    });
  }
};
