import { useState } from "react";
import "../../adminexamtimetable.css";

export default function AdminExamTimetable() {
  const [examType, setExamType] = useState("Mid");
  const [branch, setBranch] = useState("CSE");
  const [semester, setSemester] = useState("3");
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) return alert("Please upload timetable PDF");
    alert(`${examType} exam timetable uploaded successfully`);
  };

  return (
    <div className="exam-container">
      <h1 className="page-title">Exam Timetable</h1>
      <p className="page-subtitle">
        Upload and manage examination timetables
      </p>

      {/* FILTER BAR */}
      <div className="exam-filters">
        <select value={examType} onChange={(e) => setExamType(e.target.value)}>
          <option>Mid</option>
          <option>Internal</option>
          <option>External</option>
          <option>Semester</option>
        </select>

        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option>CSE</option>
          <option>ECE</option>
          <option>EEE</option>
        </select>

        <select value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option>1</option>
          <option>3</option>
          <option>5</option>
          <option>7</option>
        </select>
      </div>

      {/* UPLOAD CARD */}
      <div className="exam-card">
        <h3>Upload Timetable (PDF)</h3>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <div className="exam-actions">
          <button className="upload-btn" onClick={handleUpload}>
            Upload Timetable
          </button>
        </div>
      </div>

      {/* INFO */}
      <div className="info-box">
        <p>
          📢 Students will receive notifications once the exam timetable is
          published.
        </p>
      </div>
    </div>
  );
}
