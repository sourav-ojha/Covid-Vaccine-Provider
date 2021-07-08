import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import { dbConn } from "./config/db.js";
import AuthRoutes from "./routes/auth.routes.js";
import AdminRoutes from "./routes/admin.routes.js";
import PublicRoutes from "./routes/public.routes.js";
import UserRoutes from "./routes/user.routes.js";

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

app.use(express.static("./static"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Routes

app.use("/", AuthRoutes);
app.use("/", PublicRoutes);
app.use("/admin", AdminRoutes);
app.use("/user", UserRoutes);


