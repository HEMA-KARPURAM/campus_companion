import "../../adminannouncements.css";

export default function AdminAnnouncements() {
  return (
    <div className="admin-page">
      <h1 className="page-title">Announcements</h1>
      <p className="page-subtitle">
        Publish announcements, events, circulars and result notifications
      </p>

      {/* FORM CARD */}
      <div className="announce-card">

        <div className="form-row">
          <input
            type="text"
            placeholder="Announcement Title"
          />

          <select>
            <option>Announcement</option>
            <option>Event</option>
            <option>Circular</option>
            <option>Result Notification</option>
          </select>
        </div>

        <div className="form-row">
          <select>
            <option>All Users</option>
            <option>Students</option>
            <option>Lecturers</option>
          </select>

          <select>
            <option>All Branches</option>
            <option>CSE</option>
            <option>ECE</option>
            <option>EEE</option>
          </select>

          <select>
            <option>All Sections</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>

        <textarea
          placeholder="Enter announcement details here..."
          rows="5"
        ></textarea>

        <button className="primary-btn">
          Publish Announcement
        </button>
      </div>

      <p className="info-text">
        🔔 Publishing this will notify relevant users instantly.
      </p>
    </div>
  );
}
