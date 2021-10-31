//to provide environment variables globally
import dotenv from "dotenv"; //should be on the top
dotenv.config();

//imports
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { ErrorHandler } from "./middleware/errorHandler";
import { __port__ } from "./util/constants";
import { connectToDatabase } from "./database";
import routes from "./routes";

//connecting tot the database
connectToDatabase();

//init app
let app = express();

//all the middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//don't place it below 404 handler and the request will not ever reach this middleware
app.use("/api/v1", routes);

//404 handler
app.all("*", (req, res) => {
  res.status(404).json({
    msg: "The resourse you are looking for is not available on the server",
    data: {},
    result: false,
  });
});

//error handler
app.use(ErrorHandler);

//starting the server
app.listen(__port__, () => {
  console.log(`Server started on port ${__port__}`);
});
