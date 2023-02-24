import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true
        },
        statsAllPostCount: {
            type: Number,
            default: 0
        },
        statsCreatedPost: {
            type: Number,
            default: 0
        },
        statsContactViews: {
            type: Number,
            default: 0
        },
        type: {
            type: Boolean,
            default: false
        },
        avatar: {
            type: String,
            default: ""
        },
        phone: {
            type: String,
            required: true
        },
        paid: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: true
        },
        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }]
    },
    { timestamps: true }
)

export default mongoose.model('User', UserSchema)