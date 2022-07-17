import mongoose from 'mongoose'

var Schema = mongoose.Schema

var BoulderSchema = new Schema({
    name: { type: String },
    location: { type: String },
    grade: { type: Number },
    rating: { type: Number },
    ascents: { type: Number },
    likedBy: { type: Array }
})

var Boulder = mongoose.model("Boulder", BoulderSchema)
export default Boulder