import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import { dbConn } from "./config/db.js";
import AuthRoutes from "./routes/auth.routes.js";
import AdminRoutes from "./routes/admin.routes.js";
import {
  covidData_post,
  fetchPincode_post,
} from "./controller/PostFunctions.js";

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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("./"));

// Auth Routes - Login and Register

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", AuthRoutes);
app.use("/admin", AdminRoutes);
app.get("/", covidData_post);

app.post("/fetchPincode", fetchPincode_post);

console.log("runing");
