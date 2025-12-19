import { useState } from "react";
import "../../lecturertimetable.css";
import { timetableData } from "../../lib/mock-lecturer-data";
import SwapModel from "./swapmodel";

export default function LecturerTimetable() {
  const loggedInFacultyId = "FAC001";

  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedSection, setSelectedSection] = useState("A");

  const [selectedClass, setSelectedClass] = useState(null);
  const [showSwapModal, setShowSwapModal] = useState(false);

  const filteredTimetable = timetableData.filter(
    (cls) =>
      cls.facultyId === loggedInFacultyId &&
      cls.day === selectedDay &&
      cls.branch === selectedBranch &&
      cls.section === selectedSection
  );

  const handleRequestSwap = (cls) => {
    setSelectedClass(cls);
    setShowSwapModal(true);
  };

  return (
    <div className="lecturer-page">
      <h1 className="page-title">Manage Timetable</h1>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
        </select>

        <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}>
          <option>CSE</option>
          <option>ECE</option>
          <option>EEE</option>
        </select>

        <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>

      {/* TIMETABLE */}
      <div className="timetable-list">
        {filteredTimetable.length === 0 && (
          <p className="muted">No classes scheduled</p>
        )}

        {filteredTimetable.map((cls) => (
          <div key={cls.id} className="timetable-row">
            <div>
              <strong>{cls.subject}</strong>
              <div className="muted">
                {cls.branch} – Section {cls.section}
              </div>
            </div>

            <div className="row-actions">
              <span className="time-pill">{cls.time}</span>

              <span className={`status ${cls.status}`}>
                {cls.status}
              </span>

              {cls.status === "scheduled" && (
                <button
                  className="swap-btn"
                  onClick={() => handleRequestSwap(cls)}
                >
                  Request Swap
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="info-box">
        Cancelling or swapping a class will notify students automatically.
      </div>

      {showSwapModal && (
        <SwapModel
          classData={selectedClass}
          onClose={() => setShowSwapModal(false)}
          onSubmit={() => setShowSwapModal(false)}
        />
      )}
    </div>
  );
}
