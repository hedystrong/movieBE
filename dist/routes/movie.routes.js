"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie_controller_1 = require("../controller/movie.controller");
const express_1 = require("express");
const movieRoute = (0, express_1.Router)();
movieRoute
    .post("/movie", movie_controller_1.getAll)
    .get("/movie/:_id", movie_controller_1.getOne)
    .post("/movie/search", movie_controller_1.searchTextBy);
exports.default = movieRoute;
