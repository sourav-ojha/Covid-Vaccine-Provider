import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
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
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Admin = mongoose.model("admin", adminSchema);

export default Admin;
