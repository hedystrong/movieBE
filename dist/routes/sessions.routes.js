"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sessions_controller_1 = require("../controller/sessions.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/sessions", sessions_controller_1.getAll).post("/sessions", sessions_controller_1.create);
exports.default = route;
