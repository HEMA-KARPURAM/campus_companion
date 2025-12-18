import DashboardShell from "../../components/layout/DashboardShell";
import { MOCK_RESULTS } from "../../lib/mock-data";
import { TrendingUp } from "lucide-react";

export default function StudentResults() {
  return (
    <DashboardShell role="student">
      <div className="page">
        <div className="page-header">
          <h2>Academic Results</h2>
          <p className="muted">Your performance history</p>
        </div>

        <div className="results-list">
          {MOCK_RESULTS.map((result, idx) => {
            const gpa =
              result.subjects.reduce(
                (acc, curr) => acc + (curr.marks / curr.total) * 10,
                0
              ) / result.subjects.length;

            return (
              <div className="card" key={idx}>
                <div className="result-header">
                  <div>
                    <h3>{result.exam}</h3>
                    <p className="muted">Semester {result.semester}</p>
                  </div>

                  <div className="gpa-badge">
                    <TrendingUp size={16} />
                    GPA: {gpa.toFixed(2)}
                  </div>
                </div>

                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                        <th>Total</th>
                        <th>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.subjects.map((subject, sIdx) => (
                        <tr key={sIdx}>
                          <td>{subject.name}</td>
                          <td>{subject.marks}</td>
                          <td>{subject.total}</td>
                          <td className="grade">{subject.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardShell>
  );
}
