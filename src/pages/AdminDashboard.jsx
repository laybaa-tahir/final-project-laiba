import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getComplaints, saveComplaints } from "../utils/storage";

function statusClass(status) {
  if (status === "Resolved") return "status resolved";
  if (status === "In Review") return "status review";
  return "status pending";
}

function AdminDashboard() {
  const isAdmin = localStorage.getItem("role") === "admin";
  const [list, setList] = useState(getComplaints());

  const changeStatus = (id, newStatus) => {
    const updated = list.map((c) => (c.id === id ? { ...c, status: newStatus } : c));
    saveComplaints(updated);
    setList(updated);
  };

  if (!isAdmin) {
    return (
      <div className="page">
        <Navbar />
        <section className="dashboard">
          <p>Admin access only. <Link to="/admin-login"><b>Admin login</b></Link></p>
        </section>
        <Footer />
      </div>
    );
  }

  const pending = list.filter((c) => c.status === "Pending").length;
  const resolved = list.filter((c) => c.status === "Resolved").length;

  return (
    <div className="page">
      <Navbar />
      <section className="dashboard">
        <h2>Admin Dashboard</h2>
        <p>All complaints submitted by users.</p>

        <div className="stats-grid">
          <div className="stat-card"><h3>{list.length}</h3><p>Total</p></div>
          <div className="stat-card"><h3>{pending}</h3><p>Pending</p></div>
          <div className="stat-card"><h3>{resolved}</h3><p>Resolved</p></div>
        </div>

        <div className="table-box">
          <h3>All Complaints</h3>
          {list.length === 0 ? (
            <p>No complaints yet.</p>
          ) : (
            <table>
              <thead>
                <tr><th>ID</th><th>User</th><th>Type</th><th>Status</th><th>Change</th></tr>
              </thead>
              <tbody>
                {list.map((c) => (
                  <tr key={c.id}>
                    <td>#{c.id}</td>
                    <td>{c.userName}</td>
                    <td>{c.type}</td>
                    <td><span className={statusClass(c.status)}>{c.status}</span></td>
                    <td>
                      <select value={c.status} onChange={(e) => changeStatus(c.id, e.target.value)}>
                        <option>Pending</option>
                        <option>In Review</option>
                        <option>Resolved</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="btn-row">
          <Link to="/user-management" className="secondary-btn">Users</Link>
          <Link to="/reports" className="secondary-btn">Reports</Link>
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

export default AdminDashboard;