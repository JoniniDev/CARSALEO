import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
    {
        caption: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        images: {
            type: String,
            required: true
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

export default mongoose.model('News', NewsSchema)