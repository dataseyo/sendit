import mongoose from 'mongoose'

var Schema = mongoose.Schema

var CragModel = new Schema({
    name: { type: String },
    location: { type: String },
    numBoulders: { type: Number},
    boulders: { type: Array },
})

var Crag = mongoose.model("Crag", CragModel)
export default CragModel