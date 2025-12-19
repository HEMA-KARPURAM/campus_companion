import { useState } from "react";
import "../../lecturertimetable.css";
import { timetableData } from "../../lib/mock-lecturer-data";
import SwapModel from "./swapmodel";

export default function LecturerTimetable() {
  // 🔐 Assume logged-in faculty
  const loggedInFacultyId = "FAC001";

  // 🎛 Filters
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedSection, setSelectedSection] = useState("A");

  const [selectedClass, setSelectedClass] = useState(null);
  const [showSwapModal, setShowSwapModal] = useState(false);

  // 📌 FILTERED TIMETABLE (CORE LOGIC)
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

      {/* FILTER CONTROLS */}
      <div className="filter-row">
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

      {/* TIMETABLE LIST */}
      <div className="timetable-card">
        {filteredTimetable.length === 0 && (
          <p className="sub-text">No classes scheduled</p>
        )}

        {filteredTimetable.map((cls) => (
          <div key={cls.id} className="class-row">
            <div>
              <strong>{cls.subject}</strong>
              <p>
                {cls.branch} – Section {cls.section}
              </p>
            </div>

            <div className="class-actions">
              <span className={`badge ${cls.status}`}>
                {cls.time}
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

      {/* SWAP MODAL */}
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
