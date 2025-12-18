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
  ],

  Tuesday: [
    {
      time: "09:00 - 10:00",
      subject: "Computer Networks",
      room: "CS-201",
      type: "Lecture",
      status: "scheduled",
    },
  ],

  Wednesday: [
    {
      time: "11:00 - 01:00",
      subject: "Web Technologies",
      room: "LAB-2",
      type: "Lab",
      status: "scheduled",
    },
  ],

  Thursday: [
    {
      time: "10:00 - 11:00",
      subject: "Algorithms",
      room: "CS-301",
      type: "Lecture",
      status: "swapped",
      note: "Swapped with OS class",
    },
  ],

  Friday: [
    {
      time: "09:00 - 10:00",
      subject: "Software Engineering",
      room: "CS-401",
      type: "Lecture",
      status: "scheduled",
    },
  ],

  // ✅ NEW SATURDAY
  Saturday: [
    {
      time: "10:00 - 12:00",
      subject: "Mini Project",
      room: "LAB-1",
      type: "Practical",
      status: "scheduled",
    },
  ],
};
