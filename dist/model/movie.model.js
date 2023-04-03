"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    num_mflix_comments: String,
    poster: String,
    title: String,
    fullplot: String,
    countries: [String],
    released: Date,
    directors: [String],
    writers: [String],
    awards: {
        wins: Number,
        nominations: Number,
        text: String,
    },
    lastupdated: Date,
    year: Number,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number,
    },
    type: String,
    tomatoes: {
        viewer: {
            rating: Number,
            numReviews: Number,
            meter: Number,
        },
        fresh: Number,
        critic: {
            rating: Number,
            numReviews: Number,
            meter: Number,
        },
        rotten: Number,
        lastUpdated: Date
    }
});
const Movie = (0, mongoose_1.model)("movies", movieSchema);
exports.default = Movie;
