import Movie from "../model/theaters.model";
import { Request, Response } from "express";

const create = (req: Request, res: Response) => {
    res.json({ status: true });
};

const getAll = (req: Request, res: Response) => {
    res.json({ status: true });
};

export { create, getAll };