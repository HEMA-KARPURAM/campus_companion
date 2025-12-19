import { useState } from "react";
import "../../lecturertimetable.css";
import { faculties } from "../../lib/mock-lecturer-data";

export default function SwapModel({ classData, onClose, onSubmit }) {
  const [selectedFaculty, setSelectedFaculty] = useState("");

  return (
    <div className="swap-overlay">
      <div className="swap-modal">
        <h2>Request Class Swap</h2>

        <div className="swap-info">
          <strong>{classData.subject}</strong>
          <p>
            {classData.day} | {classData.time}
          </p>
          <span>
            {classData.branch} – Section {classData.section}
          </span>
        </div>

        <div className="swap-form">
          <label>Select Faculty</label>
          <select
            value={selectedFaculty}
            onChange={(e) => setSelectedFaculty(e.target.value)}
          >
            <option value="">Choose Faculty</option>
            {faculties.map((fac) => (
              <option key={fac.id} value={fac.id}>
                {fac.name} ({fac.department})
              </option>
            ))}
          </select>
        </div>

        <div className="swap-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button
            className="primary-btn"
            disabled={!selectedFaculty}
            onClick={onSubmit}
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}
