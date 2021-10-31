import { Router } from "express";
import depRouter from "./deployment";

let router = Router();

router.use("/deployment", depRouter);

export default router;
