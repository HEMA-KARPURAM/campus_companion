import "../../assignment.css";

export default function LecturerAssignment() {
  return (
    <div className="upload-container">
      <h1 className="page-title">Upload Assignment</h1>
      <p className="page-subtitle">
        Create and assign coursework to your students
      </p>

      <div className="upload-card">
        {/* LEFT FORM */}
        <div className="assignment-form">
          <div>
            <label>Assignment Title</label>
            <input type="text" placeholder="Enter assignment title" />
          </div>

          <div>
            <label>Subject</label>
            <select>
              <option>Select subject</option>
              <option>Operating Systems</option>
              <option>DBMS</option>
              <option>Computer Networks</option>
            </select>
          </div>

          <div className="full-width">
            <label>Description</label>
            <textarea placeholder="Enter assignment description" />
          </div>

          <div>
            <label>Branch</label>
            <select>
              <option>Select branch</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>EEE</option>
            </select>
          </div>

          <div>
            <label>Section</label>
            <select>
              <option>Select section</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>

          <div>
            <label>Deadline Date</label>
            <input type="date" />
          </div>

          <div>
            <label>Deadline Time</label>
            <input type="time" />
          </div>
        </div>

        {/* RIGHT UPLOAD */}
        <div className="upload-box">
          <div className="upload-icon">📄</div>
          <h4>Upload Assignment</h4>
          <p>PDF files only</p>
          <input type="file" accept=".pdf" />
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="submit-row">
        <button className="reset-btn">Reset</button>
        <button className="submit-btn">Upload Assignment</button>
      </div>
    </div>
  );
}
