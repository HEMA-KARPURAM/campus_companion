import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    registerNo: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
