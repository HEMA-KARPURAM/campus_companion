import { useState } from "react";
import DashboardShell from "../../components/layout/DashboardShell";

export default function LecturerProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Prof. Alex");
  const [email] = useState("alex@college.edu");
  const [department, setDepartment] = useState("Computer Science");
  const [designation, setDesignation] = useState("Associate Professor");

  return (
    <DashboardShell role="lecturer">
      <div className="page">
        <div className="page-header">
          <h2>My Profile</h2>
          <button
            className="outline-btn"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
        </div>

        <div className="profile-card">
          <ProfileRow label="Name" value={name} setValue={setName} isEditing={isEditing} />
          <ProfileRow label="Email" value={email} />
          <ProfileRow label="Department" value={department} setValue={setDepartment} isEditing={isEditing} />
          <ProfileRow label="Designation" value={designation} setValue={setDesignation} isEditing={isEditing} />
        </div>
      </div>
    </DashboardShell>
  );
}

function ProfileRow({ label, value, setValue, isEditing }) {
  return (
    <div className="profile-row">
      <label>{label}</label>
      <input
        value={value}
        readOnly={!isEditing || !setValue}
        onChange={(e) => setValue && setValue(e.target.value)}
        className={`profile-input ${isEditing ? "editable" : ""}`}
      />
    </div>
  );
}
