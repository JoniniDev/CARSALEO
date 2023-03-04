import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'

import authRoute from './routes/auth.js'
import currencyRoute from './routes/currency.js'
import postRoute from './routes/posts.js'
import filters from './routes/filters.js'
import user from './routes/user.js'
import fileUpload from "express-fileupload";

// init
const app = express()
dotenv.config()

// middleware
app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json())
app.use(fileUpload())
app.use(express.static('uploads'))

// routes
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/currency', currencyRoute)
app.use('/api/filters', filters)
app.use('/api/user', user)

async function start() {
    try {
        // const uri = process.env.MONGODB_URI;
        await mongoose.set("strictQuery", false);
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xoc2ydp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true })
        app.listen(process.env.PORT || 3001, () => console.log("Server started"))
        console.log(app.all)
    } catch (error) {
        console.log(error)
    }
}

start()