import mongoose from "mongoose";

const schema = mongoose.Schema({
    Title: {
        
        type: String
    },
    Price: {
       
        type: Number
    },
    IMG: {
        type: String ,
        default: ""
    }
})

let MyModel = mongoose.model || mongoose.model("Product", schema)
export default MyModel