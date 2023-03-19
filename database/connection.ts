import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.DB_CONNECTION_URL!
    );

    if (connection.readyState == 1) {
      return Promise.resolve(true);
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectMongoDB;
