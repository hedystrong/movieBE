
import { Request, Response } from "express";
import Theaters from "../model/theaters.model";

const create = async (req: Request, res: Response) => {

    const result = await Theaters.create(req.body);

    res.json({ status: true, result });
};

const getAll = async (req: Request, res: Response) => {

    const result = await Theaters.find({}).limit(1);

    res.json({ status: true, result });
};

export { create, getAll };