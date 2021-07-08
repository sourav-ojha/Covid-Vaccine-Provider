import express from "express";
import { adminAuthorize } from "../middleware/Authorization.js";
import { fetchAllUser } from "../models/user.js";

const router = express.Router();
//   /admin/dashboard
router.get("/dashboard", (req, res) => {
  fetchAllUser().then((data) => {
    console.log(data);
  });

  res.render("admin/dashboard.pug");
});

export default router;
