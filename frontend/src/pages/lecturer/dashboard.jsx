import { useState } from "react";
import DashboardShell from "../../components/layout/DashboardShell";
import { MOCK_ASSIGNMENTS } from "../../lib/mock-data";
import { Upload, FileText, CheckCircle, Clock } from "lucide-react";

export default function StudentAssignments() {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState(null);

  return (
    <DashboardShell role="student">
      <div className="page">
        <div>
          <h2>Assignments</h2>
          <p className="subtitle">Track and submit your coursework</p>
        </div>

        <div className="assignment-list">
          {MOCK_ASSIGNMENTS.map((a) => (
            <div key={a.id} className="assignment-card">
              <div className="assignment-info">
                <div className="title-row">
                  <h3>{a.title}</h3>
                  <span className={`status ${a.status}`}>{a.status}</span>
                </div>

                <p className="subject">{a.subject}</p>

                <div className="meta">
                  <span><Clock size={14} /> Due: {a.dueDate}</span>
                  <span><FileText size={14} /> {a.totalMarks} Marks</span>
                </div>
              </div>

              <div className="assignment-action">
                {a.status === "pending" && (
                  <button
                    className="primary-btn"
                    onClick={() => {
                      setCurrentAssignment(a.title);
                      setOpenDialog(true);
                    }}
                  >
                    <Upload size={16} /> Submit
                  </button>
                )}

                {a.status === "submitted" && (
                  <button className="outline-btn" disabled>
                    <CheckCircle size={16} /> Submitted
                  </button>
                )}

                {a.status === "graded" && (
                  <div className="grade-box">
                    <span>Grade</span>
                    <strong>{a.grade}</strong>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Upload Dialog */}
        {openDialog && (
          <div className="modal-backdrop">
            <div className="modal">
              <h3>Submit Assignment</h3>
              <p className="subtitle">
                Upload your solution for <b>{currentAssignment}</b> (PDF only)
              </p>

              <input type="file" accept=".pdf" />

              <div className="modal-actions">
                <button className="outline-btn" onClick={() => setOpenDialog(false)}>
                  Cancel
                </button>
                <button className="primary-btn">
                  Upload
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
