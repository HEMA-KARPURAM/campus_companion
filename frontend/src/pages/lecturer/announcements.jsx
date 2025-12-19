import { useState } from "react";
import "../../lecturerannouncements.css";

export default function LecturerAnnouncements() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Mid Exam Schedule",
      message: "Mid exams will start from 20th August. Be prepared.",
      date: "2025-08-15",
    },
  ]);

  const handlePost = () => {
    if (!title || !message) return;

    const newAnnouncement = {
      id: Date.now(),
      title,
      message,
      date: new Date().toISOString().split("T")[0],
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    setTitle("");
    setMessage("");
  };

  return (
    <div className="announcement-container">
      <h1 className="page-title">Announcements</h1>
      <p className="page-subtitle">
        Post important updates for students
      </p>

      {/* CREATE ANNOUNCEMENT */}
      <div className="announcement-form">
        <input
          type="text"
          placeholder="Announcement title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write announcement message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={handlePost}>Post Announcement</button>
      </div>

      {/* ANNOUNCEMENT LIST */}
      <div className="announcement-list">
        {announcements.map((a) => (
          <div key={a.id} className="announcement-card">
            <div className="announcement-header">
              <h3>{a.title}</h3>
              <span>{a.date}</span>
            </div>
            <p>{a.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
