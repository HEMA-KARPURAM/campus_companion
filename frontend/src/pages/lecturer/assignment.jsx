import { useState } from "react";
import DashboardShell from "../../components/layout/DashboardShell";

export default function LecturerAssignments() {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <DashboardShell role="lecturer">
      <div className="page">
        <h2>Upload Assignment</h2>

        <div className="card">
          <input
            placeholder="Assignment Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <button className="primary-btn">Publish Assignment</button>
        </div>
      </div>
    </DashboardShell>
  );
}
