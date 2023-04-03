"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentsSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    text: String,
    date: Date,
});
const Comments = (0, mongoose_1.model)("comments", commentsSchema);
exports.default = Comments;
