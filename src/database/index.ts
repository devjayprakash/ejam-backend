import mongoose from "mongoose";

let connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vflma.mongodb.net/test_db?retryWrites=true&w=majority`
    );
    console.log("Connected to the database successfully");
  } catch (err) {
    console.error(err);
  }
};

export { connectToDatabase };
