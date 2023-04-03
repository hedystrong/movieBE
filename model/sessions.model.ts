import { Schema, model, Types } from "mongoose";

interface ISessions {
    user_id: string;
    jwt: string;
}

const sessionsSchema = new Schema<ISessions>({
    user_id: String,
    jwt: String,
});

const sessions = model<ISessions>("sessions", sessionsSchema);

export default sessions;


