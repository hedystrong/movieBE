
import { Request, Response } from "express";
import Comments from "../model/comments.model";

const create = async (req: Request, res: Response) => {
    const result = await Comments.create({});
    res.json({ status: true, result });
};

const getAll = async (req: Request, res: Response) => {

    const result = await Comments.find({}).limit(30);


    res.json({ status: true, result });
};

export { create, getAll };