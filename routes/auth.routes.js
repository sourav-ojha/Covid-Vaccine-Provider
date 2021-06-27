import express from "express";
import {
  AdminLogin,
  AdminRegister,
  UserLogin,
  UserRegister,
} from "../controller/auth.controller.js";

const router = express.Router();

// Register Routes
router.get("/user/register", (req, res) => {
  res.render("auth/UserReg.pug");
});

router.get("/admin/register", (req, res) => {
  res.render("auth/AdminReg.pug");
});

router.post("/user/register", UserRegister);

router.post("/admin/register", AdminRegister);

// login Routes
router.post("/user/login", UserLogin);

router.post("/admin/login", AdminLogin);

router.get("/user/login", (req, res) => {
  res.render("auth/UserLogin.pug");
});

router.get("/admin/login", (req, res) => {
  res.render("auth/AdminLogin.pug");
});

export default router;
