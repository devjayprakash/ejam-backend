"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploymentValidation = void 0;
exports.deploymentValidation = {
    name: {
        type: "string",
        presence: true,
    },
    deployedAt: {
        type: "date",
        presence: true,
    },
    url: {
        type: "string",
        persence: true,
        url: true,
    },
    versions: {
        type: "array",
    },
};
