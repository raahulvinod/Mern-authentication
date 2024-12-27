import mongoose from 'mongoose';
import { MONGO_URI } from '../constants/env';

const connectDb = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log(
      `Database connected successfully: ${connection.connection.host}`
    );
  } catch (error) {
    console.error(`Database connection error: ${(error as Error).message}`);
    setTimeout(connectDb, 5000);
  }
};

export default connectDb;
