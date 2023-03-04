import User from '../models/User.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

// Push avatar
export const pushAvatar = async (req, res) => {
  try {
    const image = req.files.image
    if (image.size > 2097152) {
      return res.status(400).json({
        msg: "Error: Image too large"
      })
    }
    const fileName = `${Date.now().toString()}_${image.name}`
    const _dirname = dirname(fileURLToPath(import.meta.url))
    const user = await User.findById(req.userId)
    if (user.avatar != "") {
      try {
        fs.unlinkSync(path.join(_dirname, "..", "uploads", "avatars", user.avatar))
      } catch (error) {
        console.log(error)
      }
    }
    
    await User.findByIdAndUpdate(req.userId, { avatar: fileName })
    
    await image.mv(path.join(_dirname, "..", "uploads", "avatars", fileName), () => {
      res.status(200).json({
        msg: "Successful change"
      })
    })

  } catch (error) {
    return res.status(500).json({
      msg: "Error: Error while pushing photo"
    })
  }
}

// Change fullname
export const changeFullName = async (req, res) => {
  try {
    const { fullName } = req.body
    await User.findByIdAndUpdate(req.userId, { fullName })
    res.status(200).json({
      msg: "Successful change"
    })
  } catch (error) {
    return res.status(500).json({
      msg: "Error: Error while pushing photo"
    })
  }
}