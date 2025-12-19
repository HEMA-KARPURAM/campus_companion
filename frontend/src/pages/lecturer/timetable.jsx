import "../../lecturertimetable.css";
import { useState } from "react";

const TIMETABLE_DATA = {
  Monday: [
    { time: "09:00 - 10:00", subject: "Operating Systems", code: "CS-101", status: "scheduled" },
    { time: "10:00 - 11:00", subject: "DBMS", code: "CS-102", status: "scheduled" },
    { time: "11:00 - 12:00", subject: "Computer Networks", code: "CS-103", status: "cancelled" },
  ],
  Tuesday: [
    { time: "09:00 - 10:00", subject: "DBMS", code: "CS-102", status: "scheduled" },
    { time: "10:00 - 11:00", subject: "Operating Systems", code: "CS-101", status: "scheduled" },
  ],
};

export default function LecturerTimetable() {
  const [day, setDay] = useState("Monday");
  const [branch, setBranch] = useState("CSE");
  const [section, setSection] = useState("A");

  return (
    <div>
      <h1 className="page-title">Manage Timetable</h1>
      <p className="page-subtitle">View, swap, or cancel your classes</p>

      {/* Filters */}
      <div className="filter-bar">
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thrusday</option>
          <option>Friday</option>
          <option>Saturday</option>

        </select>

        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option>CSE</option>
          <option>CIC</option>
          <option>AIML</option>
          <option>CSD</option>
          <option>CIVIL</option>
          <option>IT</option>
        </select>

        <select value={section} onChange={(e) => setSection(e.target.value)}>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
        </select>
      </div>

      {/* Timetable */}
      <div className="timetable-list">
        {TIMETABLE_DATA[day].map((cls, i) => (
          <div key={i} className="timetable-row">
            <div>
              <h4>{cls.subject}</h4>
              <p className="muted">
                {branch} – Section {section} • {cls.code}
              </p>
            </div>

            <div className="row-actions">
              <span className="time-pill">{cls.time}</span>

              <span className={`status ${cls.status}`}>
                {cls.status}
              </span>

              {cls.status !== "cancelled" && (
                <>
                  <button className="swap-btn">Request Swap</button>
                  <button className="cancel-btn">Cancel</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="info-box">
        ℹ️ Cancelling or swapping a class will notify students automatically.
      </div>
    </div>
  );
}
