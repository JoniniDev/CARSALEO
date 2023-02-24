import Post from '../models/Post.js'
import User from '../models/User.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

// Create post
export const createPost = async (req, res) => {
    try {
        const { brand, model, priceUSD, year, city, mileage, description, type, capacity, fuelType, state, color } = req.body
        const user = await User.findById(req.userId)

        if (req.files.images && req.files.images <= 25) {
            let allImages = []
            for (let index = 0; index < req.files.images.length; index++) {
                const image = req.files.images[index]
                const fileName = Date.now().toString() + image.name
                const _dirname = dirname(fileURLToPath(import.meta.url))
                image.mv(path.join(_dirname, "..", "uploads", fileName))
                allImages.push(fileName)
            }
            const newPost = new Post({
                brand,
                model,
                priceUSD,
                year,
                city,
                mileage,
                description,
                type,
                capacity,
                fuelType,
                state,
                color,
                images: allImages,
                owner: req.userId,
            })
            await newPost.save()
            await User.findByIdAndUpdate(req.userId, {
                $push: { posts: newPost }
            })
            return res.status(200).json({ msg: "Post add", newPost })
        } else if (!req.files.images) {
            return res.status(400).json({
                msg: "Error: No images loaded"
            })
        } else {
            return res.status(400).json({
                msg: "Error: Trying to upload more than 25 images"
            })
        }


    } catch (error) {
        return res.status(500).json({
            msg: "Error: Error while creating post"
        })
    }
}