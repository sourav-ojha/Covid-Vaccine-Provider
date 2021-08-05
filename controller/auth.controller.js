import User from "../models/user.js";
import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";

export const UserRegister = async (req, res) => {
  const { name, fathername, dob, gender, phno, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  try {
    if (!existingUser) {
      const hashPass = await bcrypt.hash(password, 10);
      const birth = new Date(dob);
      var month_diff = Date.now() - birth.getTime();
      var age_dt = new Date(month_diff);
      var year = age_dt.getUTCFullYear();
      var age = Math.abs(year - 1970);
      console.log(age);

      var myData = new User({
        name,
        fathername,
        dob: birth.toLocaleDateString(),
        age,
        gender,
        phno,
        email,
        secretkey: password,
        password: hashPass,
      });
      await myData.save();
    }
    res.redirect("/login");
  } catch (error) {
    res.json(error);
  }
};

export const AdminRegister = async (req, res) => {
  const { name, email, password } = req.body;
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
    console.log("pass matched", verifyPass);
    if (verifyPass) {
      const token = getToken(existUser);
      const { password, ...userWithOutPass } = existUser;
      const result = {
        ...userWithOutPass._doc,
        token: token,
      };
      res.cookie("user", token, {
        // expires: new Date(Date.now() + 300000),
        httpOnly: true,
      });
      if (existUser.role === "admin") {
        res.redirect("/admin");
      } else res.redirect("/user/profile");
    } else res.json("user Invalid");
  } catch (error) {
    res.json("error");
  }
};

const getToken = (user) => {
  const token = jwt.sign({ id: user.id, role: user.role }, "1234567890");
  return token;
};
