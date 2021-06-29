import express from "express";
import path from "path";
import { dbConn } from "./config/db.js";
import AuthRoutes from "./routes/auth.routes.js";
import { covidData } from "./api.js";
import axios from "axios";

const app = express();
const port = process.env.PORT || 8080;

// assigning base path
var __dirname = path.resolve();

// setTimeout(() => {
//   covid_report();
// }, 2000);

// DB connection Established
dbConn()
  .then(() =>
    app.listen(port, () =>
      console.log(`server running successfully on port : ${port}`)
    )
  )
  .catch((err) => console.log(err.message));

app.use("/static", express.static("static"));
app.use(express.json());
app.use(express.urlencoded());

// Auth Routes - Login and Register

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", AuthRoutes);

app.get("/", (req, res) => {
  covidData((data) => {
    let covid_daily_report = data[0].data.data;
    let covid_report = data[1].data.data[0];
    console.log(data[1].data.data[0]);
    res.render("index.pug", { CDR: covid_daily_report, CR: covid_report });
  });
});

