import mongoose from "mongoose";

const uri = process.env.MongoDB_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed: ", error);
    process.exit(1);
  }
};

export default connectDb;