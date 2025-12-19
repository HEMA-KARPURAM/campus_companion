import DashboardShell from "../../components/layout/DashboardShell";
import {
  LECTURER_ID,
  LECTURER_TIMETABLE,
} from "../../lib/mock-lecturer-data";

export default function LecturerDashboard() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const todaysClasses = LECTURER_TIMETABLE.filter(
    (cls) =>
      cls.day === today && cls.lecturerId === LECTURER_ID
  );

  return (
    <DashboardShell role="lecturer">
      <div className="page">
        <h2>Today’s Classes</h2>
        <p className="subtitle">
          {today} · Based on branch & section
        </p>

        {todaysClasses.length === 0 ? (
          <p className="empty-text">No classes scheduled today</p>
        ) : (
          todaysClasses.map((cls, index) => (
            <div key={index} className="today-class-card">
              <div className="class-time">
                {cls.time}
              </div>

              <div className="class-info">
                <h4>{cls.subject}</h4>
                <p>
                  {cls.branch} - Section {cls.section}
                </p>
                <span className="room">{cls.room}</span>
              </div>

              <span
                className={`status ${cls.status}`}
              >
                {cls.status}
              </span>
            </div>
          ))
        )}
      </div>
    </DashboardShell>
  );
}
