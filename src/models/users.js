import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true,

  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  district: {
    type: String,
    required: true
  },
  block: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  schoolCode: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;
