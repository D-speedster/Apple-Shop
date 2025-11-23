import mongoose from "mongoose";

const schema = mongoose.Schema(
  {

    title: {
      type: String,
      required: true,
      // minLength, maxLength
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ram: {
      type: String,
      required: true,
    },
    cpu: {
      type: String,
      required: true,
    }



  }
)
module.exports =
  mongoose.models.product || mongoose.model('product', schema);

