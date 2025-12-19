import { useState } from "react";
import DashboardShell from "../../components/layout/DashboardShell";
import { TrendingUp } from "lucide-react";
import "../../studentresults.css";

const MID_RESULTS = [
  {
    title: "Mid Term 1",
    semester: "Semester 5",
    gpa: "8.33",
    subjects: [
      { name: "Operating Systems", obtained: 25, total: 30, grade: "A" },
      { name: "DBMS", obtained: 22, total: 30, grade: "B+" },
      { name: "Web Tech", obtained: 28, total: 30, grade: "A+" },
    ],
  },
  {
    title: "Mid Term 2",
    semester: "Semester 4",
    gpa: "8.15",
    subjects: [
      { name: "Mathematics IV", obtained: 85, total: 100, grade: "A" },
      { name: "COA", obtained: 78, total: 100, grade: "B+" },
    ],
  },
];

const SEM_RESULTS = [
  {
    title: "Semester 5 Results",
    semester: "Semester 5",
    gpa: "8.42",
    subjects: [
      { name: "Operating Systems", obtained: 82, total: 100, grade: "A" },
      { name: "DBMS", obtained: 75, total: 100, grade: "B+" },
      { name: "Web Technologies", obtained: 88, total: 100, grade: "A+" },
    ],
  },
];

export default function StudentResults() {
  const [view, setView] = useState("mid");

  const data = view === "mid" ? MID_RESULTS : SEM_RESULTS;

  return (
    <DashboardShell role="student">
      <div className="results-page">
        <h1>Academic Results</h1>
        <p className="subtitle">Your performance history</p>

        {/* Toggle */}
        <div className="results-toggle">
          <button
            className={view === "mid" ? "active" : ""}
            onClick={() => setView("mid")}
          >
            Mid Term Results
          </button>
          <button
            className={view === "sem" ? "active" : ""}
            onClick={() => setView("sem")}
          >
            Semester Results
          </button>
        </div>

        {/* Results */}
        {data.map((exam, idx) => (
          <div key={idx} className="result-card">
            <div className="result-header">
              <div>
                <h3>{exam.title}</h3>
                <span className="semester">{exam.semester}</span>
              </div>
              <div className="gpa-badge">
                <TrendingUp size={16} />
                GPA: {exam.gpa}
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks Obtained</th>
                  <th>Total Marks</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {exam.subjects.map((s, i) => (
                  <tr key={i}>
                    <td>{s.name}</td>
                    <td>{s.obtained}</td>
                    <td>{s.total}</td>
                    <td className="grade">{s.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
