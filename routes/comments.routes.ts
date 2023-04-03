import { create, getAll } from "../controller/comments.controller";

import { Router } from "express";

const route = Router();

route.get("/comments", getAll).post("/comments", create);

export default route;