"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theaters_controller_1 = require("../controller/theaters.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/theaters", theaters_controller_1.getAll).post("/theaters", theaters_controller_1.create);
exports.default = route;
