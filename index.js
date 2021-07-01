import express from "express";
import dotenv from "dotenv";
import path from "path";
import { dbConn } from "./config/db.js";
import AuthRoutes from "./routes/auth.routes.js";
import { fetchPincode_post } from "./controller/PostFunctions.js";
import { covidData_api } from "./api.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// assigning base path
var __dirname = path.resolve();

// DB connection Established
dbConn()
  .then(() =>
    app.listen(port, () =>
      console.log(`server running successfully on port : ${port}`)
    )
  )
  .catch((err) => console.log(err.message));

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("./"));

// Auth Routes - Login and Register

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", AuthRoutes);

app.get("/", covidData_api);

app.post("/fetchPincode", fetchPincode_post);
