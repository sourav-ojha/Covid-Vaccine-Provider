import express from "express";
import { UserLogin, UserRegister } from "../controller/auth.controller.js";

const router = express.Router();

// Register Routes
router.get("/register", (req, res) => {
  res.render("auth/UserReg.pug");
});

router.post("/register", UserRegister);

// login Routes
router.get("/login", (req,res) => {
  res.render("auth/UserLogin.pug")
});

router.post("/login", UserLogin);

export default router;
