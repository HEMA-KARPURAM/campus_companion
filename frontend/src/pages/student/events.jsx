import DashboardShell from "../../components/layout/DashboardShell";
import { Calendar, MapPin, Users } from "lucide-react";
import { MOCK_EVENTS } from "../../lib/mock-data";
import "../../studentsevents.css";


export default function StudentEvents() {
  return (
    <DashboardShell role="student">
      <div className="page">
        {/* Header */}
        <div className="page-header">
          <div>
            <h2>Campus Events</h2>
            <p className="subtitle">
              Discover what's happening around you
            </p>
          </div>
          <button className="outline-btn">My Registered Events</button>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {MOCK_EVENTS.map((event) => (
            <div key={event.id} className="event-card">
              {/* Banner */}
              <div className="event-banner">
                <span
                  className={`event-badge ${
                    event.registered ? "registered" : "category"
                  }`}
                >
                  {event.registered ? "Registered" : event.category}
                </span>
              </div>

              {/* Content */}
              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="organizer">
                  <Users size={14} /> {event.organizer}
                </p>

                <p className="description">{event.description}</p>

                <div className="event-meta">
                  <span>
                    <Calendar size={14} /> {event.date}
                  </span>
                  <span>
                    <MapPin size={14} /> Main Auditorium
                  </span>
                </div>
              </div>

              {/* Footer */}
              <button
                className={`event-btn ${
                  event.registered ? "outline-btn" : "primary-btn"
                }`}
              >
                {event.registered ? "View Ticket" : "Register Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
