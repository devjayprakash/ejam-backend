"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//to provide environment variables globally
var dotenv_1 = __importDefault(require("dotenv")); //should be on the top
dotenv_1.default.config();
//imports
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var errorHandler_1 = require("./middleware/errorHandler");
var constants_1 = require("./util/constants");
var database_1 = require("./database");
var routes_1 = __importDefault(require("./routes"));
//connecting tot the database
(0, database_1.connectToDatabase)();
//init app
var app = (0, express_1.default)();
//all the middlewares
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("common"));
//don't place it below 404 handler and the request will not ever reach this middleware
app.use("/api/v1", routes_1.default);
//404 handler
app.all("*", function (req, res) {
    res.status(404).json({
        msg: "The resourse you are looking for is not available on the server",
        data: {},
        result: false,
    });
});
//error handler
app.use(errorHandler_1.ErrorHandler);
//starting the server
app.listen(constants_1.__port__, function () {
    console.log("Server started on port " + constants_1.__port__);
});
