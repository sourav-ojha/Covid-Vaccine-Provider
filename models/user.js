import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  fathername: String,
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

  password: {
    type: String,
    required: true,
  },
  vaccine_status: Boolean,
  appointment_date: Date,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;
