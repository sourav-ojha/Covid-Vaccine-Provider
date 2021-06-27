import mongoose from "mongoose";

const CONNECTION_URL = "mongodb://localhost/covid-vaccine";

export const dbConn = async() =>
  await mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    