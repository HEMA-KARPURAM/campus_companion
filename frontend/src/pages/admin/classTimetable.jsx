import "../../adminclasstimetable.css";

export default function AdminClassTimetable() {
  return (
    <div className="admin-page">
      <h1 className="page-title">Class Timetable</h1>
      <p className="page-subtitle">
        Manage branch and section wise class schedules
      </p>

      {/* FILTERS */}
      <div className="filter-row">
        <select>
          <option>CSE</option>
          <option>ECE</option>
          <option>EEE</option>
        </select>

        <select>
          <option>Section A</option>
          <option>Section B</option>
          <option>Section C</option>
        </select>
      </div>

      {/* UPLOAD CARD */}
      <div className="upload-card">
        <div className="upload-header">
          <h3>Upload / Update Timetable</h3>

          <input type="file" />
        </div>

        <button className="primary-btn">
          Save Timetable
        </button>
      </div>

      <p className="info-text">
        📢 Any update here will notify students and lecturers automatically.
      </p>
    </div>
  );
}
