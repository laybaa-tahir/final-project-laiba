import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCurrentUser, getComplaints } from "../utils/storage";

function statusClass(status) {
  if (status === "Resolved") return "status resolved";
  if (status === "In Review") return "status review";
  return "status pending";
}

function Dashboard() {
  const user = getCurrentUser();
  const mine = user ? getComplaints().filter((c) => c.userEmail === user.email) : [];
  const review = mine.filter((c) => c.status === "In Review").length;
  const resolved = mine.filter((c) => c.status === "Resolved").length;

  return (
    <div className="page">
      <Navbar />
      <section className="dashboard">
        <h2>My Dashboard</h2>

        {!user ? (
          <p>Please <Link to="/login"><b>login</b></Link> first.</p>
        ) : (
          <>
            <p>Welcome back, {user.name}.</p>

            <div className="stats-grid">
              <div className="stat-card"><h3>{mine.length}</h3><p>Total Complaints</p></div>
              <div className="stat-card"><h3>{review}</h3><p>In Review</p></div>
              <div className="stat-card"><h3>{resolved}</h3><p>Resolved</p></div>
            </div>

            <div className="table-box">
              <h3>Recent Complaints</h3>
              {mine.length === 0 ? (
                <p>No complaints yet.</p>
              ) : (
                <table>
                  <thead>
                    <tr><th>ID</th><th>Type</th><th>Date</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {mine.slice(-5).reverse().map((c) => (
                      <tr key={c.id}>
                        <td>#{c.id}</td>
                        <td>{c.type}</td>
                        <td>{c.date}</td>
                        <td><span className={statusClass(c.status)}>{c.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="btn-row">
              <Link to="/submit-complaint" className="primary-btn">New Complaint</Link>
              <Link to="/complaint-tracking" className="secondary-btn">Track Complaint</Link>
              <Link to="/profile" className="secondary-btn">My Profile</Link>
            </div>
          </>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Dashboard;