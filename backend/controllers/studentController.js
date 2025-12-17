import Student from "../models/Student.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// REGISTER
export const registerStudent = async (req, res) => {
  try {
    const { registerNo, name, password } = req.body;

    const studentExists = await Student.findOne({ registerNo });
    if (studentExists) {
      return res.status(400).json({ message: "Student already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      registerNo,
      name,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Registration successful",
      student: {
        id: student._id,
        registerNo: student.registerNo,
        name: student.name
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LOGIN
export const loginStudent = async (req, res) => {
  try {
    const { registerNo, password } = req.body;

    const student = await Student.findOne({ registerNo });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login successful",
      token: generateToken(student._id),
      student: {
        id: student._id,
        registerNo: student.registerNo,
        name: student.name
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudentProfile = (req, res) => {
  res.json({
    message: "Profile fetched successfully",
    student: req.student
  });
};
