import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const CONNECTION_URL = process.env.MONGO_URI;
// const CONNECTION_URL = "mongodb://localhost/covid-vaccine";

export const dbConn = async () =>
  await mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
