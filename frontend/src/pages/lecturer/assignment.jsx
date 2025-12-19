import { useState } from "react";
import "../../lecturerassignment.css";

const MOCK_DATA = {
  submitted: ["Alex J", "Rahul K", "Sneha M"],
  notSubmitted: ["Anjali P", "Kiran S"],
};

export default function LecturerAssignmentSubmissions() {
  const [branch, setBranch] = useState("CSE");
  const [section, setSection] = useState("A");
  const [subject, setSubject] = useState("Operating Systems");
  const [view, setView] = useState("submitted");

  return (
    <div className="page">
      <h2 className="page-title">Assignment Submissions</h2>
      <p className="page-subtitle">
        Track student submissions easily
      </p>

      <div className="filter-bar">
        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option>CSE</option>
          <option>ECE</option>
        </select>

        <select value={section} onChange={(e) => setSection(e.target.value)}>
          <option>A</option>
          <option>B</option>
        </select>

        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option>Operating Systems</option>
          <option>DBMS</option>
        </select>
      </div>

      <div className="tab-bar">
        <button
          className={view === "submitted" ? "tab active" : "tab"}
          onClick={() => setView("submitted")}
        >
          Submitted
        </button>

        <button
          className={view === "notSubmitted" ? "tab active" : "tab"}
          onClick={() => setView("notSubmitted")}
        >
          Not Submitted
        </button>
      </div>

      <div className="list-card">
        {(view === "submitted"
          ? MOCK_DATA.submitted
          : MOCK_DATA.notSubmitted
        ).map((student, index) => (
          <div key={index} className="student-row">
            {student}
          </div>
        ))}
      </div>
    </div>
  );
}
