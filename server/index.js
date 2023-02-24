import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'

import authRoute from './routes/auth.js'
import currencyRoute from './routes/currency.js'
import postRoute from './routes/posts.js'
import filters from './routes/filters.js'

// init
const app = express()
dotenv.config()

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/currency', currencyRoute)
app.use('/api/filters', filters)

async function start() {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xoc2ydp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true })

        app.listen(process.env.PORT || 3001, ()=> console.log("Server started"))
    } catch (error) {
        console.log(error)
    }
}

start()