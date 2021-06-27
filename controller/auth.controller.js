import Admin from "../models/admin.js";
import User from "../models/user.js";

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
    res.json(myData);
  } catch (error) {
    res.json('error');
  }
};

export const AdminRegister = async (req, res) => {
  const { name, fathername, age, gender, phno, email, password } = req.body;
  const existingUser = await Admin.findOne({ email });
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
    res.json(myData);
  } catch (error) {
    res.json('error');
  }
};

export const UserLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(req.body);
    const existUser = await User.findOne({ email });
    const verifyPass = await bcrypt.compare(password, existUser.password);
    if (verifyPass) res.json(existUser);
    else res.json("user Invalid");
  } catch (error) {
    res.json('error');
  }
};

export const AdminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await Admin.findOne({ email });
    const verifyPass = await bcrypt.compare(password, existUser.password);
    if (verifyPass) res.json(existUser);
    else res.json("user Invalid");
  } catch (error) {
    res.json('error');
  }
};
