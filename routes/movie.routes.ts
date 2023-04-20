import { getOne, getAll, searchTextBy } from "../controller/movie.controller";

import { Router } from "express";

const movieRoute = Router();

movieRoute
    .post("/movie", getAll)
    .get("/movie/:_id", getOne)
    .post("/movie/search", searchTextBy);

export default movieRoute;