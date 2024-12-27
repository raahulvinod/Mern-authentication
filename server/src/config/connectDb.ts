import mongoose from 'mongoose';

const connectDb = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_URI as string,
      {
        autoIndex: true,
      }
    );
    console.log(
      `Database connected successfully: ${connection.connection.host}`
    );
  } catch (error) {
    console.error(`Database connection error: ${(error as Error).message}`);
    setTimeout(connectDb, 5000);
  }
};

export default connectDb;
