import Users from "../model/users.model";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {

    const result = await Users.create(req.body);

    res.json({ status: true, result });
};

const getAll = (req: Request, res: Response) => {
    res.json({ status: true });
};

export { create, getAll };