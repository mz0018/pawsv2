import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Missing MONGO_URI in environment variables');
}

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Mongo connection failed', err);
    process.exit(1);
  }
}
