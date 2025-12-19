import DashboardShell from "../../components/layout/DashboardShell";
import { Calendar, MapPin, Users } from "lucide-react";
import { MOCK_EVENTS } from "../../lib/mock-data";
import "../../studentsevents.css";

export default function StudentEvents() {
  return (
    <DashboardShell role="student">
      <div className="events-page">
        {/* Header */}
        <div className="events-header">
          <div>
            <h1>Campus Events</h1>
            <p>Discover what's happening around you</p>
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
              <div className="event-body">
                <h3>{event.title}</h3>

                <div className="event-organizer">
                  <Users size={14} />
                  {event.organizer}
                </div>

                <p className="event-desc">{event.description}</p>

                <div className="event-meta">
                  <span>
                    <Calendar size={14} />
                    {event.date}
                  </span>
                  <span>
                    <MapPin size={14} />
                    {event.location}
                  </span>
                </div>
              </div>

              {/* Button */}
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
