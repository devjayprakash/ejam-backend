"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
var constants_1 = require("../util/constants");
//error handler
var ErrorHandler = function (err, req, res, next) {
    res.status(500).send({
        msg: "Internal server error",
        result: false,
        data: {},
        error: constants_1.__is_prod__ ? "Contact developer" : err,
    });
};
exports.ErrorHandler = ErrorHandler;
