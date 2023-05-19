import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { sendEmail } from '../utils/sendEmail.js'
import dotenv from 'dotenv'

// reg
export const reg = async (req, res) => {
    try {
        const { email, password, fullName } = req.body
        const isUsed = await User.findOne({ email })

        if (isUsed) {
            return res.status(400).json({
                msg: 'Error: User already created'
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            email,
            password: hash,
            fullName
        })

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_AUTH, { expiresIn: '30d' })

        await newUser.save()

        sendEmail(email, "reg", {name: fullName})

        res.json({
            user: newUser,
            token,
            msg: "Registration successful"
        })

    } catch (error) {
        res.status(500).json({
            msg: "Error: Error while user register"
        })
    }
}

// log
export const log = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({
                msg: "Error: Email or password not found"
            })
        }

        const passwordTrue = bcrypt.compareSync(password, user.password)

        if (passwordTrue) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_AUTH, { expiresIn: '30d' })
            return res.json({
                token, user, msg: "Login successful"
            })
        } else {
            console.log(user, passwordTrue)
            return res.status(400).json({
                msg: "Error: Email or password not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: "Error: Error while user login"
        })
    }
}

// getMe
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) {
            return res.status(400).json({
                msg: "User not found"
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_AUTH, { expiresIn: '30d' })
        res.json({ user, token })


    } catch (error) {
        res.status(500).json({
            msg: "Error: No access"
        })
    }
}