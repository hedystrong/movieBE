import Movie from "../model/movie.model";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {


    const result = await Movie.create(req.body);

    res.json({ status: true, result });
};

const getAll = async (req: Request, res: Response) => {

    const result = await Movie.find({}).limit(30);


    res.json({ status: true, result });
};

export { create, getAll };