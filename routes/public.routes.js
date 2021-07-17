import express from "express";
import { covidData_get } from "../controller/GetFunction.js";
import { fetchPincode_post } from "../controller/PostFunctions.js";
import { Validate } from "../middleware/Authorization.js";

const router = express.Router();

router.get("/", Validate, covidData_get);

router.post("/fetchPincode", fetchPincode_post);

router.get("/about", (req, res) => {
  res.render("about.pug");
});
router.get("/faq", (req, res) => {
  res.render("faq.pug");
});
router.get("/guide", (req, res) => {
  res.render("guide.pug");
});
router.get("/immunity", (req, res) => {
  res.render("immunity.pug");
});
router.get("/myth", (req, res) => {
  res.render("myth.pug");
});
router.get("/stats", (req, res) => {
  res.render("stats.pug");
});

export default router;
