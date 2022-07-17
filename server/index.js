import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
import passport from 'passport'
import LocalStrategy from 'passport-local'

// initialize app and setup
const app = express()
const PORT = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// allow cross origin requests
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

// mongo connection
const CONNECTION_URL = "mongodb+srv://gaharaz:1890@cluster0.7k63b.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))

// boulder routing
import boulderRouter from "./routes/boulderRouter.js"
app.use('/boulders', boulderRouter)

// user routing
