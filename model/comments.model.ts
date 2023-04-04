import { Schema, model, Types } from "mongoose";

interface IComments {
    name: string;
    email: string;
    text: string;
    date: Date;
}

const commentsSchema = new Schema<IComments>({
    name: String,
    email: String,
    text: String,
    date: Date,
});

const Comments = model<IComments>("comments", commentsSchema);

export default Comments;
