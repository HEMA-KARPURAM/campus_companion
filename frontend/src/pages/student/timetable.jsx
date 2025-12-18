import { useState } from "react";
import DashboardShell from "../../components/layout/DashboardShell";
import { MOCK_TIMETABLE } from "../../lib/mock-data";
import "../../studenttimetable.css";


export default function StudentTimetable() {
  const days = Object.keys(MOCK_TIMETABLE);
  const [activeDay, setActiveDay] = useState("Monday");

  return (
    <DashboardShell role="student">
      <div className="page">
        <div className="page-header">
          <div>
            <h2>Weekly Timetable</h2>
            <p className="muted">Computer Science – Semester 5</p>
          </div>
        </div>

        <div className="card">
          {/* Day Tabs */}
          <div className="tabs">
            {days.map((day) => (
              <button
                key={day}
                className={`tab ${activeDay === day ? "active" : ""}`}
                onClick={() => setActiveDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Classes */}
          <div className="timetable-list">
            {MOCK_TIMETABLE[activeDay]?.length > 0 ? (
              MOCK_TIMETABLE[activeDay].map((cls, idx) => (
                <div className="timetable-card" key={idx}>
                  <div className="time-box">{cls.time}</div>

                  <div className="class-info">
                    <div className="class-header">
                      <h3>{cls.subject}</h3>

                      {cls.status !== "scheduled" && (
                        <span
                          className={`status ${
                            cls.status === "cancelled"
                              ? "cancelled"
                              : "swapped"
                          }`}
                        >
                          {cls.status}
                        </span>
                      )}
                    </div>

                    <div className="class-meta">
                      <span>📍 {cls.room}</span>
                      <span>👨‍🏫 {cls.type}</span>
                    </div>

                    {cls.note && (
                      <div className="class-note">
                        Note: {cls.note}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                No classes scheduled for this day.
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
