import express from "express";
import { userAuthorize } from "../middleware/Authorization.js";
import User from "../models/user.js";

const router = express.Router();
//   /user/dashboard

router.get("/profile", userAuthorize, (req, res) => {
  console.log(req.user);
  res.render("user/user.pug", { user: req.user });
});

router.post("/register/vaccine", userAuthorize, async (req, res) => {
  const aadhar = req.body.aadhar;
  const data = await User.findOneAndUpdate(
    { email: req.user.email },
    { aadhar, vaccine_req: true },
    { new: true }
  );
  console.log("user ----------------", data);
  res.redirect("/user/profile");
});

router.get("/logout", (req, res) => {
  res.clearCookie("user");
  console.log("log out");
  res.redirect("/");
});

export default router;
