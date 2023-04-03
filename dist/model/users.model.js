"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String,
});
const users = (0, mongoose_1.model)("users", usersSchema);
exports.default = users;
