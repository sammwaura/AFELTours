import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        resort: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phonenumber: {
            type: Number,
            required: true,
        },
    }
);

export default mongoose.model("tour", tourSchema);


