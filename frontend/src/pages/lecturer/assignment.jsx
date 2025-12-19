import { Upload, FileText, Calendar, Bell } from "lucide-react";
import "./assignment.css";

export default function UploadAssignment() {
  return (
    <div className="lecturer-page">
      
      {/* Header */}
      <div className="page-header">
        <h1>Upload Assignment</h1>
        <p>Create and assign coursework to your students</p>
      </div>

      {/* Assignment Card */}
      <div className="card assignment-card">

        {/* Assignment Details */}
        <div className="form-group">
          <label>Assignment Title</label>
          <input type="text" placeholder="Enter assignment title" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="Enter assignment description"></textarea>
        </div>

        {/* Target Selection */}
        <div className="form-row">
          <select>
            <option>Subject</option>
            <option>Operating Systems</option>
            <option>DBMS</option>
            <option>Computer Networks</option>
          </select>

          <select>
            <option>Branch</option>
            <option>CSE</option>
            <option>ECE</option>
          </select>

          <select>
            <option>Section</option>
            <option>A</option>
            <option>B</option>
          </select>
        </div>

        {/* Deadline */}
        <div className="form-row">
          <div className="form-group">
            <label>
              <Calendar size={16} /> Deadline Date
            </label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Deadline Time</label>
            <input type="time" />
          </div>
        </div>

        {/* File Upload */}
        <div className="upload-box">
          <FileText size={24} />
          <p>Upload Assignment (PDF only)</p>
          <input type="file" accept="application/pdf" />
        </div>

        {/* Actions */}
        <div className="form-actions">
          <button className="btn-primary">
            <Upload size={16} /> Upload Assignment
          </button>
          <button className="btn-secondary">Reset</button>
        </div>

        {/* Info */}
        <div className="info-text">
          <Bell size={14} />
          Students will be notified automatically once the assignment is uploaded.
        </div>

      </div>
    </div>
  );
}
