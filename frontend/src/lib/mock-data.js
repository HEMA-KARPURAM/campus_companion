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
export const CURRENT_USER = {
  name: "Alex Johnson",
  regNum: "2023CS101",
  semester: 5,
  branch: "Computer Science",
  email: "alex.j@campus.edu",
  fatherName: "Robert Johnson",
  dob: "2003-05-15",
  gender: "Male",
  address: "123 Campus Road, Tech City",
};
export const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    title: "Assignment Due",
    message: "DBMS assignment due tomorrow",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Timetable Updated",
    message: "Thursday class swapped with OS",
    time: "1 day ago",
  },
  {
    id: 3,
    title: "Event Reminder",
    message: "Tech Fest starts today",
    time: "3 days ago",
  },
];
export const MOCK_ASSIGNMENTS = [
  {
    id: 1,
    title: "DBMS Assignment 2",
    subject: "DBMS",
    dueDate: "2024-10-05",
    status: "Pending",
  },
  {
    id: 2,
    title: "OS Case Study",
    subject: "Operating Systems",
    dueDate: "2024-10-02",
    status: "Submitted",
  },
  {
    id: 3,
    title: "Web Tech Mini Project",
    subject: "Web Technologies",
    dueDate: "2024-10-10",
    status: "Pending",
  },
];

export const MOCK_EVENTS = [
  {
    id: 1,
    title: "Tech Fest 2024",
    organizer: "Student Council",
    description: "Annual technical festival.",
    date: "2024-03-15",
    category: "College",
    registered: true,
  },
  {
    id: 2,
    title: "AI Workshop",
    organizer: "CS Dept",
    description: "Intro to Neural Networks.",
    date: "2024-03-20",
    category: "Department",
    registered: false,
  },
  {
    id: 3,
    title: "Chess Tournament",
    organizer: "Sports Club",
    description: "Inter-department chess competition.",
    date: "2024-03-22",
    category: "Sports",
    registered: true,
  },
];
