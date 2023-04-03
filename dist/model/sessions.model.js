"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sessionsSchema = new mongoose_1.Schema({
    user_id: String,
    jwt: String,
});
const sessions = (0, mongoose_1.model)("sessions", sessionsSchema);
exports.default = sessions;
