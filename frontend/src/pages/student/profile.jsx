import DashboardShell from "../../components/layout/DashboardShell";
import { CURRENT_USER } from "../../lib/mock-data";
import "../../studentprofile.css";

import {
  User,
  Mail,
  Hash,
  BookOpen,
  Calendar,
  MapPin,
  Phone,
} from "lucide-react";

export default function StudentProfile() {
  return (
    <DashboardShell role="student">
      <div className="profile-page">
        <div className="profile-grid">

          {/* LEFT PROFILE CARD */}
          <div className="profile-card profile-summary">
            <div className="profile-avatar">
              <User size={48} />
            </div>

            <h2 className="profile-name">{CURRENT_USER.name}</h2>
            <p className="profile-reg">{CURRENT_USER.regNum}</p>

            <div className="profile-tags">
              <span className="tag semester">
                Semester {CURRENT_USER.semester}
              </span>
              <span className="tag branch">
                {CURRENT_USER.branch}
              </span>
            </div>

            <button className="edit-profile-btn">
              Edit Profile
            </button>
          </div>

          {/* RIGHT SIDE DETAILS */}
          <div className="profile-details">

            {/* PERSONAL INFO */}
            <div className="profile-card">
              <h3 className="section-title">Personal Information</h3>

              <div className="info-grid">
                <Info label="Email Address" value={CURRENT_USER.email} icon={Mail} />
                <Info label="Phone Number" value="+1 234 567 890" icon={Phone} />
                <Info label="Father's Name" value={CURRENT_USER.fatherName} icon={User} />
                <Info label="Date of Birth" value={CURRENT_USER.dob} icon={Calendar} />
                <Info label="Gender" value={CURRENT_USER.gender} icon={User} />
                <Info label="Address" value={CURRENT_USER.address} icon={MapPin} />
              </div>
            </div>

            {/* ACADEMIC INFO */}
            <div className="profile-card">
              <h3 className="section-title">Academic Details</h3>

              <div className="info-grid">
                <Info label="Branch" value={CURRENT_USER.branch} icon={BookOpen} />
                <Info label="Registration Number" value={CURRENT_USER.regNum} icon={Hash} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

function Info({ label, value, icon: Icon }) {
  return (
    <div className="info-item">
      <div className="info-label">
        <Icon size={14} />
        {label}
      </div>
      <div className="info-value">{value || "N/A"}</div>
    </div>
  );
}
