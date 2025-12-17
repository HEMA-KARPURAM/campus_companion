import express from "express";
import {
  registerStudent,
  loginStudent,
  getStudentProfile
} from "../controllers/studentController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerStudent);
router.post("/login", loginStudent);

// protected route
router.get("/profile", protect, getStudentProfile);

export default router;
