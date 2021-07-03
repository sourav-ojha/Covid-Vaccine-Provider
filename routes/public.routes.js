import express from "express";
import { UserLogin, UserRegister } from "../controller/auth.controller.js";
import { covidData_post } from "../controller/PostFunctions.js";

const router = express.Router();

router.get("/", covidData_post);

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
