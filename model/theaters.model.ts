import { Schema, model, Types } from "mongoose";

interface ITheaters {
    theaterId: number;
    location: {
        address: {
            street1: string;
            city: string;
            state: string;
            zipcode: number;
        }
        geo: {
            type: string;
            coordinates: [string];
        }
    }
}

const theatersSchema = new Schema<ITheaters>({
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

const Theaters = model<ITheaters>("theaters", theatersSchema);

export default Theaters;
