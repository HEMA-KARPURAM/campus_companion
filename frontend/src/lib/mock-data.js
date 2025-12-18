// src/lib/mock-data.js
import {
  User,
  Calendar,
  BookOpen,
  GraduationCap,
  Clock,
  FileText,
  Bell,
  Award,
  Users,
  AlertCircle
} from "lucide-react";

/* =====================
   ROLES
===================== */
export const ROLES = {
  STUDENT: "student",
  LECTURER: "lecturer",
  ADMIN: "admin",
};

/* =====================
   CURRENT USER
===================== */
export const CURRENT_USER = {
  id: "s1",
  name: "Alex Johnson",
  role: ROLES.STUDENT,
  regNum: "2023CS101",
  email: "alex.j@campus.edu",
  fatherName: "Robert Johnson",
  branch: "Computer Science",
  dob: "2003-05-15",
  gender: "Male",
  address: "123 Campus Road, Tech City",
  semester: 5,
};

/* =====================
   NOTIFICATIONS
===================== */
export const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    title: "Class Cancelled",
    message: "Dr. Smith's DBMS class at 10 AM is cancelled.",
    time: "2h ago",
    type: "alert",
    icon: AlertCircle,
  },
  {
    id: 2,
    title: "New Assignment",
    message: "Web Development assignment due next Friday.",
    time: "5h ago",
    type: "info",
    icon: FileText,
  },
  {
    id: 3,
    title: "Event Reminder",
    message: "Hackathon starts tomorrow at 9 AM.",
    time: "1d ago",
    type: "event",
    icon: Users,
  },
  {
    id: 4,
    title: "Result Announced",
    message: "Mid-term results for OS are out.",
    time: "2d ago",
    type: "success",
    icon: Award,
  },
];

/* =====================
   TIMETABLE
===================== */
export const MOCK_TIMETABLE = {
  Monday: [
    {
      time: "09:00 - 10:00",
      subject: "Operating Systems",
      room: "CS-101",
      type: "Lecture",
      status: "scheduled",
    },
    {
      time: "10:00 - 11:00",
      subject: "DBMS",
      room: "CS-102",
      type: "Lecture",
      status: "cancelled",
    },
    {
      time: "11:00 - 12:00",
      subject: "Web Technologies",
      room: "LAB-2",
      type: "Lab",
      status: "scheduled",
    },
  ],
  Tuesday: [
    {
      time: "09:00 - 10:00",
      subject: "Computer Networks",
      room: "CS-101",
      type: "Lecture",
      status: "scheduled",
    },
    {
      time: "10:00 - 11:00",
      subject: "Algorithms",
      room: "CS-103",
      type: "Lecture",
      status: "scheduled",
    },
  ],
  Wednesday: [
    {
      time: "14:00 - 16:00",
      subject: "Project Work",
      room: "LAB-1",
      type: "Practical",
      status: "scheduled",
    },
  ],
  Thursday: [
    {
      time: "09:00 - 10:00",
      subject: "Operating Systems",
      room: "CS-101",
      type: "Lecture",
      status: "swapped",
      note: "Replaced by Web Tech",
    },
  ],
  Friday: [
    {
      time: "10:00 - 11:00",
      subject: "Soft Skills",
      room: "AUD-1",
      type: "Seminar",
      status: "scheduled",
    },
  ],
};

/* =====================
   EVENTS
===================== */
export const MOCK_EVENTS = [
  {
    id: 1,
    title: "Tech Fest 2024",
    date: "2024-03-15",
    category: "College",
    organizer: "Student Council",
    description: "Annual technical festival.",
    registered: true,
  },
  {
    id: 2,
    title: "AI Workshop",
    date: "2024-03-20",
    category: "Department",
    organizer: "CS Dept",
    description: "Intro to Neural Networks.",
    registered: false,
  },
  {
    id: 3,
    title: "Chess Tournament",
    date: "2024-03-22",
    category: "Club",
    organizer: "Sports Club",
    description: "Inter-department chess.",
    registered: true,
  },
];

/* =====================
   ASSIGNMENTS
===================== */
export const MOCK_ASSIGNMENTS = [
  {
    id: 1,
    subject: "Web Technologies",
    title: "Build a Portfolio",
    dueDate: "2024-03-25",
    status: "pending",
    totalMarks: 10,
  },
  {
    id: 2,
    subject: "DBMS",
    title: "SQL Queries Practice",
    dueDate: "2024-03-18",
    status: "submitted",
    totalMarks: 15,
  },
  {
    id: 3,
    subject: "Operating Systems",
    title: "Process Scheduling",
    dueDate: "2024-03-10",
    status: "graded",
    grade: "A",
    totalMarks: 20,
  },
];

/* =====================
   RESULTS
===================== */
export const MOCK_RESULTS = [
  {
    exam: "Mid Term 1",
    semester: 5,
    subjects: [
      { name: "Operating Systems", marks: 25, total: 30, grade: "A" },
      { name: "DBMS", marks: 22, total: 30, grade: "B+" },
      { name: "Web Tech", marks: 28, total: 30, grade: "A+" },
    ],
  },
  {
    exam: "Semester 4",
    semester: 4,
    subjects: [
      { name: "Mathematics IV", marks: 85, total: 100, grade: "A" },
      { name: "Computer Org", marks: 78, total: 100, grade: "B+" },
    ],
  },
];
