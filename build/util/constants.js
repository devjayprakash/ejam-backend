"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__is_prod__ = exports.__port__ = void 0;
exports.__port__ = process.env.PORT || 8080;
exports.__is_prod__ = process.env.NODE_ENV === "production";
