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
    title: "Build a Portfolio",
    subject: "Web Technologies",
    dueDate: "2024-03-25",
    marks: 10,
    status: "pending",
  },
  {
    id: 2,
    title: "SQL Queries Practice",
    subject: "DBMS",
    dueDate: "2024-03-18",
    marks: 15,
    status: "submitted",
  },
  {
    id: 3,
    title: "Process Scheduling",
    subject: "Operating Systems",
    dueDate: "2024-03-10",
    marks: 20,
    status: "graded",
    grade: "A",
  },
];


export const MOCK_EVENTS = [
  {
    id: 1,
    title: "Tech Fest 2024",
    organizer: "Student Council",
    description: "Annual technical festival.",
    date: "2024-03-15",
    location: "Main Auditorium",
    category: "College",
    registered: true,
  },
  {
    id: 2,
    title: "AI Workshop",
    organizer: "CS Dept",
    description: "Intro to Neural Networks.",
    date: "2024-03-20",
    location: "Main Auditorium",
    category: "Department",
    registered: false,
  },
  {
    id: 3,
    title: "Chess Tournament",
    organizer: "Sports Club",
    description: "Inter-department chess.",
    date: "2024-03-22",
    location: "Main Auditorium",
    category: "Sports",
    registered: true,
  },
];

export const MOCK_ANNOUNCEMENTS = [
  {
    id: 1,
    type: "cancelled",
    title: "DBMS Class Cancelled",
    message: "Today's DBMS lecture has been cancelled.",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "swapped",
    title: "OS Class Swapped",
    message: "Operating Systems class swapped with CN.",
    time: "Today",
  },
  {
    id: 3,
    type: "assignment",
    title: "New Assignment Uploaded",
    message: "Web Technologies assignment uploaded.",
    time: "Yesterday",
  },
  {
    id: 4,
    type: "deadline",
    title: "Assignment Deadline Extended",
    message: "DBMS assignment deadline extended to Mar 28.",
    time: "1 day ago",
  },
  {
    id: 5,
    type: "exam",
    title: "Midterm Timetable Updated",
    message: "Midterm exam schedule has been revised.",
    time: "Just now",
  },
];

