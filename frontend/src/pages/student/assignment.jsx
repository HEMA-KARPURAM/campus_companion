import { useState } from "react";
import DashboardShell from "../../components/layout/DashboardShell";
import {
  Clock,
  FileText,
  Upload,
  CheckCircle,
} from "lucide-react";
import "../../studentassignments.css";

const ASSIGNMENTS = [
  {
    id: 1,
    title: "Build a Portfolio",
    subject: "Web Technologies",
    due: "2024-03-25",
    marks: 10,
    status: "pending",
  },
  {
    id: 2,
    title: "SQL Queries Practice",
    subject: "DBMS",
    due: "2024-03-18",
    marks: 15,
    status: "submitted",
  },
  {
    id: 3,
    title: "Process Scheduling",
    subject: "Operating Systems",
    due: "2024-03-10",
    marks: 20,
    status: "graded",
    grade: "A",
  },
];

export default function StudentAssignments() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeId, setActiveId] = useState(null);

  const handleFileChange = (e, id) => {
    setSelectedFile(e.target.files[0]);
    setActiveId(id);
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert("Please select a PDF file");
      return;
    }
    alert(`Submitted: ${selectedFile.name}`);
    setSelectedFile(null);
    setActiveId(null);
  };

  return (
    <DashboardShell role="student">
      <div className="assignments-page">
        <h1>Assignments</h1>
        <p className="subtitle">Track and submit your coursework</p>

        <div className="assignment-list">
          {ASSIGNMENTS.map((a) => (
            <div key={a.id} className="assignment-card">
              <div className="assignment-left">
                <h3>
                  {a.title}
                  <span className={`status ${a.status}`}>
                    {a.status}
                  </span>
                </h3>

                <p className="subject">{a.subject}</p>

                <div className="meta">
                  <span>
                    <Clock size={14} /> Due: {a.due}
                  </span>
                  <span>
                    <FileText size={14} /> {a.marks} Marks
                  </span>
                </div>
              </div>

              <div className="assignment-right">
                {a.status === "pending" && (
                  <>
                    <label className="upload-btn">
                      <Upload size={16} />
                      Select PDF
                      <input
                        type="file"
                        accept="application/pdf"
                        hidden
                        onChange={(e) => handleFileChange(e, a.id)}
                      />
                    </label>

                    <button
                      className="submit-btn"
                      onClick={handleSubmit}
                      disabled={activeId !== a.id}
                    >
                      Submit Work
                    </button>
                  </>
                )}

                {a.status === "submitted" && (
                  <button className="submitted-btn" disabled>
                    <CheckCircle size={16} />
                    Submitted
                  </button>
                )}

                {a.status === "graded" && (
                  <div className="grade-box">
                    <span>Grade Received</span>
                    <strong>{a.grade}</strong>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
