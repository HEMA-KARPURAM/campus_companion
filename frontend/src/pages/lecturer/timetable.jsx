import DashboardShell from "../../components/layout/DashboardShell";
import { MOCK_LECTURER_TIMETABLE } from "../../lib/mock-lecturer-data";

export default function LecturerTimetable() {
  return (
    <DashboardShell role="lecturer">
      <div className="page">
        <h2>Manage Timetable</h2>
        <p className="subtitle">Cancel or swap classes</p>

        {Object.entries(MOCK_LECTURER_TIMETABLE).map(([day, classes]) => (
          <div key={day} className="day-block">
            <h4>{day}</h4>

            {classes.map((cls, i) => (
              <div key={i} className="timetable-card">
                <div>
                  <strong>{cls.subject}</strong>
                  <p>{cls.time} · {cls.room}</p>
                </div>

                <div className="actions">
                  <button className="outline-btn">Swap</button>
                  <button className="danger-btn">Cancel</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
