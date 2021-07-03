import express from "express";
import { UserLogin, UserRegister } from "../controller/auth.controller.js";
import { adminAuthorize } from "../middleware/Authorization.js";

const router = express.Router();
//   /admin/dashboard
router.get("/dashboard", adminAuthorize, (req, res) => {
  console.log("Hii buddy")
  res.render("admin/dashboard.pug");
});

export default router;
