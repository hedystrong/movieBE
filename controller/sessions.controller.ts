import Sessions from "../model/sessions.model";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {

    const result = await Sessions.create(req.body);

    res.json({ status: true, result });
};

const getAll = async (req: Request, res: Response) => {

    const result = await Sessions.find({}).limit(1);

    res.json({ status: true, result });

};

export { create, getAll };