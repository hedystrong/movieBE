import Movie from "../model/users.model";
import { Request, Response } from "express";

const create = (req: Request, res: Response) => {
    res.json({ status: true });
};

const getAll = (req: Request, res: Response) => {
    res.json({ status: true });
};

export { create, getAll };