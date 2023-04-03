"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comments_controller_1 = require("../controller/comments.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/comments", comments_controller_1.getAll).post("/comments", comments_controller_1.create);
exports.default = route;
