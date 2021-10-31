"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var deployment_1 = __importDefault(require("./deployment"));
var router = (0, express_1.Router)();
router.use("/deployment", deployment_1.default);
exports.default = router;
