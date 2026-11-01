import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getComplaints, saveComplaints } from "../utils/storage";

function ComplaintManagement() {
  const [list, setList] = useState(getComplaints());

  const changeStatus = (id, newStatus) => {
    const updated = list.map((c) => (c.id === id ? { ...c, status: newStatus } : c));
    saveComplaints(updated);
    setList(updated);
  };

  return (
    <div className="page">
      <Navbar />
      <section className="dashboard">
        <h2>Complaint Management</h2>
        <p>Review complaints and update their status.</p>
        <div className="table-box">
          {list.length === 0 ? (
            <p>No complaints yet.</p>
          ) : (
            <table>
              <thead><tr><th>ID</th><th>Type</th><th>Location</th><th>Description</th><th>Status</th></tr></thead>
              <tbody>
                {list.map((c) => (
                  <tr key={c.id}>
                    <td>#{c.id}</td>
                    <td>{c.type}</td>
                    <td>{c.location}</td>
                    <td>{c.description}</td>
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
      </section>
      <Footer />
    </div>
  );
}

export default ComplaintManagement;