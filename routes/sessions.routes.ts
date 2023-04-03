import { create, getAll } from "../controller/sessions.controller";

import { Router } from "express";

const route = Router();

route.get("/sessions", getAll).post("/sessions", create);

export default route;