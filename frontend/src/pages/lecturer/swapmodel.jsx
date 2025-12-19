// src/pages/lecturer/swapmodel.jsx

import { useState } from "react";
import { faculties } from "../../lib/mock-lecturer-data";

export default function SwapModel({ classData, onClose, onSubmit }) {
  const [selectedFaculty, setSelectedFaculty] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>Request Class Swap</h2>

        <p>
          <strong>{classData.subject}</strong><br />
          {classData.day} | {classData.time}
        </p>

        <select
          value={selectedFaculty}
          onChange={(e) => setSelectedFaculty(e.target.value)}
        >
          <option value="">Select Faculty</option>
          {faculties
            .filter(f => f.id !== classData.facultyId)
            .map(f => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
        </select>

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button
            disabled={!selectedFaculty}
            onClick={() => onSubmit(selectedFaculty)}
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}
