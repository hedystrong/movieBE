import Movie from "../model/movie.model";
import { Request, Response } from "express";
import { count } from "console";

const create = (req: Request, res: Response) => {
    const { name, type, price } = req.body;

    res.json({ status: true, message: "Test" });
};


const getAll = async (req: Request, res: Response): Promise<void> => {
    const { pageSize, limit } = req.body;
    console.log(req.body);

    try {
        const rowCount = await Movie.find().count();

        const skips = 28 * (pageSize - 1);

        const result = await Movie.find()
            .select({ title: 1, plot: 1, poster: 1, tomatoes: 1 })
            .sort({ _id: 1 })
            .skip(skips)
            .limit(limit ? limit : 28);

        if (result) {
            res.json({ status: true, result, totalRows: rowCount });
        } else {
            res.json({ status: false, message: "Rows not found" });
        }
    } catch (err) {
        console.log(err);

        res.json({ status: true, message: "Test" });
    }
};

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Movie.findOne({ _id });

        if (result) {
            res.json({ status: true, result });
        } else {
            res.json({ status: false, message: "Not found" });
        }
    } catch (err) {
        res.json({ status: true, message: "Test" });
    }
};

const searchTextBy = async (req: Request, res: Response) => {
    const { searchText } = req.body;
    try {
        const result = await Movie.find({});

        if (result) {
            res.json({ status: true, result });
        } else {
            res.json({ status: false, message: "Not found" });
        }
    } catch (err) {
        res.json({ status: true, message: "Test" });
    }
};

const filterSortBy = async (req: Request, res: Response) => {
    const { pageSize, limit, sort, rate, genre, audienceScore, tomatoeMeter } = req.body;
    try {
        const result = await Movie.find({}).sort({ lastupdated: 1 });

        if (result) {
            res.json({ status: true, result });
        } else {
            res.json({ status: false, message: "Not found" });
        }
    } catch (err) {
        res.json({ status: true, message: "Test" });
    }
};

const getRefValues = async (req: Request, res: Response): Promise<void> => {
    try {
        const resultGenres = await Movie.aggregate([
            { $unwind: "$genres" },
            { $group: { _id: "$genres" } },
            { $sort: { _id: 1 } },
        ]);

        const resultRated = await Movie.aggregate([
            { $group: { _id: "$rated" } },
            { $sort: { _id: 1 } },
        ]);

        if (resultGenres && resultRated) {
            res.json({
                status: true,
                result: { resultGenres, resultRated }
            });
        } else {
            res.json({ status: false, message: "Rows not found" });
        }
    } catch (err) {
        console.log(err);

        res.json({ status: true, message: "Test" });
    }

};

export { create, getAll, getOne, searchTextBy, getRefValues, filterSortBy };




