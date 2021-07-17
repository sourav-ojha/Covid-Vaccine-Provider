import jwt from "jsonwebtoken";
import User from "../models/user.js";
const secret = "1234567890";

export const Validate = async (req, res, next) => {
  try {
    const token = req.cookies.user || null;
    if (token === null) {
      next();
    } else {
      const verifyUser = jwt.verify(token, secret);
      req.user = await User.findOne({ _id: verifyUser.id });
      next();
    }
  } catch (error) {
    res.json({ message: "Error" });
  }
};

export const userAuthorize = async (req, res, next) => {
  try {
    const token = req.cookies.user;
    const verifyUser = jwt.verify(token, secret);
    req.user = await User.findOne({ _id: verifyUser.id });
    next();
  } catch (error) {
    res.redirect("/login");
  }
};

export const adminAuthorize = async (req, res, next) => {
  try {
    const token = req.cookies.user;
    const verifyUser = jwt.verify(token, secret);
    const user = await User.findOne({ _id: verifyUser.id });
    if (user.role === "admin") {
      next();
    } else
      res.status(404).json({
        message: "Access Denied- Admin Only",
      });
  } catch (error) {
    res.status(404).json({
      message: "Access Denied- Admin Only",
    });
  }
};
