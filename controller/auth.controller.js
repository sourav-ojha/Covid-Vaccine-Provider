import User from "../models/user.js";
import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";

export const UserRegister = async (req, res) => {
  const { name, fathername, age, gender, phno, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  try {
    if (!existingUser) {
      const hashPass = await bcrypt.hash(password, 10);
      var myData = new User({
        name,
        fathername,
        age,
        gender,
        phno,
        email,
        password: hashPass,
      });
      await myData.save();
    }
    res.redirect("/login");
  } catch (error) {
    res.json("error");
  }
};

export const AdminRegister = async (req, res) => {
  const { name, fathername, age, gender, phno, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  try {
    if (!existingUser) {
      const hashPass = await bcrypt.hash(password, 10);
      var myData = new User({
        name,
        age,
        gender,
        phno,
        email,
        role: "admin",
        password: hashPass,
      });
      await myData.save();
    }
    res.json(myData);
  } catch (error) {
    res.json("error");
  }
};

// Sign in ---------------------------------------------------

export const UserLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    const verifyPass = await bcrypt.compare(password, existUser.password);
    if (verifyPass) {
      const token = getToken(existUser);
      const { password, ...userWithOutPass } = existUser;
      const result = {
        ...userWithOutPass._doc,
        token: token,
      };
      res.cookie("user", token, {
        expires: new Date(Date.now() + 300000),
        httpOnly: true,
      });
      if (existUser.role === "admin") {
        res.redirect("/admin/dashboard");
      } else res.json({ user: existUser });
    } else res.json("user Invalid");
  } catch (error) {
    res.json("error");
  }
};

const getToken = (user) => {
  const token = jwt.sign({ id: user.id, role: user.role }, "1234567890");
  return token;
};
