import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        city: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        maxGroupSize: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        reviews: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Review",
            },
        ],
        featured: {
            type: Boolean,
            default: false,
        },
        desc: {
            type: String,
            required: true,
        }

        
    },
    { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);


