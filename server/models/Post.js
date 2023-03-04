import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        brand: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            required: true
        },
        priceUSD: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        mileage: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String
        },
        capacity: {
            type: String
        },
        fuelType: {
            type: String
        },
        state: {
            type: String
        },
        color: {
            type: String
        },
        views: {
            type: Number,
            default: 0
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId, required: true
        }
    },
    { timestamps: true }
)

export default mongoose.model('Post', PostSchema)