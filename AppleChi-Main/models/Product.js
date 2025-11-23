import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: {

        type: String
    },
    body_structure: {

        type: String
    },
    cpu: {
        type: String
    },

    ram: {
        type: String
    },
    Camera: {
        type: String
    },
    Storage: {
        type: String
    },
    Display: {
        type: String
    },
    resolution: {
        type: String
    },
    NetWorks: {
        type: String
    },
    Filming: { type: String },
    battery: { type: String },
    Other_Details: { type: String },
    IMG: {
        type: String,
        default: ""
    },
    Gallery: {
        type: String,
    },
    type: {
        type: String,
    },
    price: {
        type: Number
    }
})


let MyModel = mongoose.models.product || mongoose.model('product', schema)
export default MyModel