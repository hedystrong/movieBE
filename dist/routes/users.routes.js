"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = require("../controller/users.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/users", users_controller_1.getAll).post("/users", users_controller_1.create);
exports.default = route;
