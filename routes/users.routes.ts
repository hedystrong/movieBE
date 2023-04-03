import { create, getAll } from "../controller/users.controller";

import { Router } from "express";

const route = Router();

route.get("/users", getAll).post("/users", create);

export default route;