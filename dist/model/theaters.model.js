"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const theatersSchema = new mongoose_1.Schema({
    theaterId: Number,
    location: {
        address: {
            street1: String,
            city: String,
            state: String,
            zipcode: Number,
        },
        geo: {
            type: String,
            coordinates: [String]
        },
    }
});
const Theaters = (0, mongoose_1.model)("theaters", theatersSchema);
exports.default = Theaters;
