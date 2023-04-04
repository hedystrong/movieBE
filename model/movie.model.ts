import { Schema, model, Types } from "mongoose";

interface IMovie {
    plot: string;
    genres: [string];
    runtime: number;
    cast: [string];
    num_mflix_comments: string;
    poster: string;
    title: string;
    fullplot: string;
    countries: [string];
    released: Date;
    directors: [string];
    writers: [string];
    awards: {
        wins: number;
        nominations: number;
        text: string;
    }
    lastupdated: Date;
    year: number;
    imdb: {
        rating: number;
        votes: number;
        id: number;
    }
    type: string;
    tomatoes: {
        viewer: {
            rating: number;
            numReviews: number;
            meter: number;
        }
        fresh: number;
        critic: {
            rating: number;
            numReviews: number;
            meter: number;
        }
        rotten: number;
        lastUpdated: Date;
    }
}


const movieSchema = new Schema<IMovie>({
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

const Movie = model<IMovie>("movies", movieSchema);

export default Movie;
