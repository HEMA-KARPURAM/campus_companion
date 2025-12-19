import "../../admincircularsresults.css";

export default function AdminCircularsResults() {
  return (
    <div className="admin-page">
      <h1 className="page-title">Circulars & Results</h1>
      <p className="page-subtitle">
        Publish circulars and examination results with notifications
      </p>

      {/* CIRCULARS */}
      <div className="admin-card">
        <h2>Upload Circular</h2>

        <div className="form-row">
          <input type="text" placeholder="Circular Title" />
          <select>
            <option>All Departments</option>
            <option>CSE</option>
            <option>ECE</option>
            <option>EEE</option>
          </select>
        </div>

        <textarea placeholder="Circular Description"></textarea>

        <div className="file-row">
          <input type="file" />
          <button className="primary-btn">Publish Circular</button>
        </div>
      </div>

      {/* RESULTS */}
      <div className="admin-card">
        <h2>Publish Results</h2>

        <div className="form-row">
          <select>
            <option>Semester</option>
            <option>Mid Examination</option>
            <option>Internal</option>
            <option>External</option>
          </select>

          <select>
            <option>CSE</option>
            <option>ECE</option>
            <option>EEE</option>
          </select>

          <select>
            <option>Section A</option>
            <option>Section B</option>
            <option>Section C</option>
          </select>
        </div>

        <div className="file-row">
          <input type="file" />
          <button className="success-btn">Publish Results</button>
        </div>
      </div>

      <p className="info-text">
        📢 Students will be notified automatically once circulars or results are published.
      </p>
    </div>
  );
}
