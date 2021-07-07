import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  fathername: String,
  dob: String,
  age: Number,
  gender: String,
  phno: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
  },
  aadhar: String,

  password: {
    type: String,
    required: true,
  },
  vaccine_status: { type: Boolean, default: false },
  vaccine_req: { type: Boolean, default: false },
  appointment_date: { type: Date, default: null },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;
