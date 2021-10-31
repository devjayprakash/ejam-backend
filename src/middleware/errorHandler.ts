import { ErrorRequestHandler, NextFunction, Response } from "express";
import { __is_prod__ } from "../util/constants";

//error handler
export let ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).send({
    msg: "Internal server error",
    result: false,
    data: {},
    error: __is_prod__ ? "Contact developer" : err,
  });
};
