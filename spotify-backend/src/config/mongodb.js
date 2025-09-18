// config/db.js
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/spotify';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
     
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); 
  }
};

export default connectDB
