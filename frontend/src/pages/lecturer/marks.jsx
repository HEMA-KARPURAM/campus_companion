import { useState } from "react";
import "../../lecturermarks.css";
import { studentsData } from "../../lib/mock-marks-data";

export default function LecturerMarks() {
  const [subject, setSubject] = useState("DBMS");
  const [branch, setBranch] = useState("CSE");
  const [section, setSection] = useState("A");
  const [marks, setMarks] = useState({});

  // 🔥 FILTER STUDENTS BASED ON BRANCH & SECTION
  const filteredStudents = studentsData.filter(
    (s) => s.branch === branch && s.section === section
  );

  const handleMarksChange = (regNo, value) => {
    setMarks({ ...marks, [regNo]: value });
  };

  return (
    <div className="marks-container">
      <h1 className="page-title">Upload Marks</h1>
      <p className="page-subtitle">
        Mid Examination – Enter and publish student marks
      </p>

      {/* FILTER BAR */}
      <div className="marks-filters">
        <input value="Mid Exam" disabled />

        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option>DBMS</option>
          <option>OS</option>
          <option>CN</option>
        </select>

        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option>CSE</option>
          <option>ECE</option>
        </select>

        <select value={section} onChange={(e) => setSection(e.target.value)}>
          <option>A</option>
          <option>B</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="marks-card">
        <div className="marks-header">
          <span>Student Name</span>
          <span>Register No</span>
          <span>Marks</span>
        </div>

        {filteredStudents.length === 0 && (
          <p className="no-data">No students found</p>
        )}

        {filteredStudents.map((student) => (
          <div key={student.regNo} className="marks-row">
            <span>{student.name}</span>
            <span>{student.regNo}</span>
            <input
              type="number"
              placeholder="Enter marks"
              value={marks[student.regNo] || ""}
              onChange={(e) =>
                handleMarksChange(student.regNo, e.target.value)
              }
            />
          </div>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="marks-actions">
        <button className="reset-btn" onClick={() => setMarks({})}>
          Reset
        </button>
        <button className="publish-btn">Publish Marks</button>
      </div>
    </div>
  );
}
