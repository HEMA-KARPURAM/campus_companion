import "../../studentsubmissions.css";

export default function LecturerSubmissions() {
  return (
    <div className="submission-container">
      <h1 className="page-title">Assignment Submissions</h1>
      <p className="page-subtitle">
        View submitted and pending assignments
      </p>

      <div className="submission-card">
        {/* HEADER */}
        <div className="submission-header">
          <span>Student Name</span>
          <span>Register No</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {/* ROW - SUBMITTED */}
        <div className="submission-row">
          <span>Ravi Kumar</span>
          <span>21CSE045</span>
          <span className="status submitted">Submitted</span>
          <button className="view-btn">View PDF</button>
        </div>

        {/* ROW - SUBMITTED */}
        <div className="submission-row">
          <span>Ananya Singh</span>
          <span>21CSE052</span>
          <span className="status submitted">Submitted</span>
          <button className="view-btn">View PDF</button>
        </div>

        {/* ROW - NOT SUBMITTED */}
        <div className="submission-row">
          <span>Karthik R</span>
          <span>21CSE061</span>
          <span className="status pending">Not Submitted</span>
          <button className="disabled-btn">—</button>
        </div>
      </div>
    </div>
  );
}
