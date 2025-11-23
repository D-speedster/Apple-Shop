import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/AppleChi';

async function connectDB() {
  try {
    // اگر قبلا متصل شده، دوباره وصل نکن
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
}

export default connectDB;
