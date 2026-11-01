import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getComplaints } from "../utils/storage";

function StaffDashboard() {
  const isStaff = localStorage.getItem("role") === "staff";
  const list = getComplaints();
  const pending = list.filter((c) => c.status === "Pending").length;
  const resolved = list.filter((c) => c.status === "Resolved").length;

  if (!isStaff) {
    return (
      <div className="page">
        <Navbar />
        <section className="dashboard">
          <p>Staff access only. <Link to="/staff-login"><b>Staff login</b></Link></p>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Navbar />
      <section className="dashboard">
        <h2>Staff Dashboard</h2>
        <p>Quick summary of all complaints.</p>
        <div className="stats-grid">
          <div className="stat-card"><h3>{list.length}</h3><p>Total Cases</p></div>
          <div className="stat-card"><h3>{pending}</h3><p>Pending</p></div>
          <div className="stat-card"><h3>{resolved}</h3><p>Resolved</p></div>
        </div>
        <div className="btn-row">
          <Link to="/assigned-cases" className="primary-btn">View Cases</Link>
          <Link to="/case-details" className="secondary-btn">Case Details</Link>
          <Link to="/complaint-management" className="secondary-btn">Update Status</Link>
          <button className="secondary-btn" style={{ background: "none" }}
            onClick={() => { localStorage.removeItem("role"); window.location.href = "/"; }}>
            Logout
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default StaffDashboard;