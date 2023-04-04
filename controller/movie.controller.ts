import Movie from "../model/movie.model";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {

    const result = await Movie.create({});

    res.json({ status: true, result });
};

const getAll = async (req: Request, res: Response) => {

    const result = await Movie.find({}).limit(1);


    res.json({ status: true, result });
};

export { create, getAll };