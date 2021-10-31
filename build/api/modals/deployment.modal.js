"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DeploymentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    deployedAt: {
        type: Date,
        default: Date.now,
    },
    url: {
        type: String,
        required: true,
    },
    versions: {
        type: [
            {
                type: String,
                unique: true,
            },
        ],
        default: [],
    },
});
var DeploymentModel = (0, mongoose_1.model)("deployment", DeploymentSchema);
exports.default = DeploymentModel;
