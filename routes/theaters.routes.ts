import { create, getAll } from "../controller/theaters.controller";

import { Router } from "express";

const route = Router();

route.get("/theaters", getAll).post("/theaters", create);

export default route;