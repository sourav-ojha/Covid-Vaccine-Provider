import express from "express";
import { adminAuthorize } from "../middleware/Authorization.js";
import {
  fetchAllUser,
  fetchRequestedUser,
  fetchVaccinatedUser,
} from "../models/user.js";

const router = express.Router();
//   /admin/dashboard
router.get("/",adminAuthorize, (req, res) => {
  res.render("admin/admin.pug");
});

router.get("/registered",adminAuthorize, (req, res) => {
  fetchAllUser().then((data) => {
    res.render("admin/regUser.pug", { data });
  });
});

router.get("/vaccinated",adminAuthorize, (req, res) => {
  fetchVaccinatedUser().then((data) => {
    res.render("admin/vaccUser.pug", { data });
  });
});

router.get("/requested", adminAuthorize, (req, res) => {
  fetchRequestedUser().then((data) => {
    res.render("admin/vaccUser.pug", { data });
  });
});
router.get("/logout", (req, res) => {
  res.clearCookie("user");
  console.log("log out");
  res.redirect("/");
});
export default router;
