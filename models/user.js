import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  fathername: String,
  dob: String,
  age: Number,
  gender: String,
  phno: {
    type: Number,
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
  secretkey: String,
  address: String,

  password: {
    type: String,
    required: true,
  },
  vaccine_status: { type: Boolean, default: false },
  vaccine_req: { type: Boolean, default: false },
  appointment_status: { type: Boolean, default: false },
  appointment_date: { type: Date, default: null },
  vaccinated_date: { type: String, default: null },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;

export const fetchAllUser = async () => {
  var userData = await User.find({ role: "user" });
  return userData;
};
export const fetchVaccinatedUser = async () => {
  var userData = await User.find({ vaccine_status: true });
  return userData;
};
export const fetchRequestedUser = async () => {
  var userData = await User.find({ vaccine_req: true });
  return userData;
};

export const fetchVaccination = async () => {
  var userData = await User.find({ appointment_status: true });
  return userData;
};
