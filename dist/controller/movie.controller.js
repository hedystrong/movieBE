"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSortBy = exports.getRefValues = exports.searchTextBy = exports.getOne = exports.getAll = exports.create = void 0;
const movie_model_1 = __importDefault(require("../model/movie.model"));
const create = (req, res) => {
    const { name, type, price } = req.body;
    res.json({ status: true, message: "Test" });
};
exports.create = create;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pageSize, limit } = req.body;
    console.log(req.body);
    try {
        const rowCount = yield movie_model_1.default.find().count();
        const skips = 28 * (pageSize - 1);
        const result = yield movie_model_1.default.find()
            .select({ title: 1, plot: 1, poster: 1, tomatoes: 1 })
            .sort({ _id: 1 })
            .skip(skips)
            .limit(limit ? limit : 28);
        if (result) {
            res.json({ status: true, result, totalRows: rowCount });
        }
        else {
            res.json({ status: false, message: "Rows not found" });
        }
    }
    catch (err) {
        console.log(err);
        res.json({ status: true, message: "Test" });
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield movie_model_1.default.findOne({ _id });
        if (result) {
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "Not found" });
        }
    }
    catch (err) {
        res.json({ status: true, message: "Test" });
    }
});
exports.getOne = getOne;
const searchTextBy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchText } = req.body;
    try {
        const result = yield movie_model_1.default.find({});
        if (result) {
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "Not found" });
        }
    }
    catch (err) {
        res.json({ status: true, message: "Test" });
    }
});
exports.searchTextBy = searchTextBy;
const filterSortBy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pageSize, limit, sort, rate, genre, audienceScore, tomatoeMeter } = req.body;
    try {
        const result = yield movie_model_1.default.find({}).sort({ lastupdated: 1 });
        if (result) {
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "Not found" });
        }
    }
    catch (err) {
        res.json({ status: true, message: "Test" });
    }
});
exports.filterSortBy = filterSortBy;
const getRefValues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultGenres = yield movie_model_1.default.aggregate([
            { $unwind: "$genres" },
            { $group: { _id: "$genres" } },
            { $sort: { _id: 1 } },
        ]);
        const resultRated = yield movie_model_1.default.aggregate([
            { $group: { _id: "$rated" } },
            { $sort: { _id: 1 } },
        ]);
        if (resultGenres && resultRated) {
            res.json({
                status: true,
                result: { resultGenres, resultRated }
            });
        }
        else {
            res.json({ status: false, message: "Rows not found" });
        }
    }
    catch (err) {
        console.log(err);
        res.json({ status: true, message: "Test" });
    }
});
exports.getRefValues = getRefValues;
