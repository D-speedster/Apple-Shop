import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  // اطلاعات اصلی
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  
  // مشخصات فنی
  cpu: {
    type: String,
    default: ""
  },
  ram: {
    type: String,
    default: ""
  },
  Storage: {
    type: String,
    default: ""
  },
  Display: {
    type: String,
    default: ""
  },
  Camera: {
    type: String,
    default: ""
  },
  battery: {
    type: String,
    default: ""
  },
  body_structure: {
    type: String,
    default: ""
  },
  resolution: {
    type: String,
    default: ""
  },
  NetWorks: {
    type: String,
    default: ""
  },
  Filming: {
    type: String,
    default: ""
  },
  Other_Details: {
    type: String,
    default: ""
  },
  
  // تصاویر
  IMG: {
    type: String,
    default: ""
  },
  Gallery: {
    type: String,
    default: ""
  },
  
  // متا
  type: {
    type: String,
    enum: ['phone', 'mac', 'watch', 'ipad', ''],
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);
