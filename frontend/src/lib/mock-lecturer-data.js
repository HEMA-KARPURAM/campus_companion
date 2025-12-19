export const LECTURER_ID = "L001";

export const LECTURER_TIMETABLE = [
  {
    day: "Monday",
    time: "09:00 - 10:00",
    subject: "Operating Systems",
    branch: "CSE",
    section: "A",
    room: "CS-101",
    lecturerId: "L001",
    status: "scheduled",
  },
  {
    day: "Monday",
    time: "10:00 - 11:00",
    subject: "DBMS",
    branch: "CSE",
    section: "B",
    room: "CS-102",
    lecturerId: "L001",
    status: "swapped",
  },
  {
    day: "Monday",
    time: "11:00 - 12:00",
    subject: "Web Technologies",
    branch: "IT",
    section: "A",
    room: "IT-201",
    lecturerId: "L002", // ❌ NOT this lecturer
    status: "scheduled",
  },
];
