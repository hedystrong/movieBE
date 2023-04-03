import { Schema, model, Types } from "mongoose";

interface IUsers {
    name: string;
    email: string;
    password: string;
}

const usersSchema = new Schema<IUsers>({
    name: String,
    email: String,
    password: String,
});

const users = model<IUsers>("users", usersSchema);

export default users;