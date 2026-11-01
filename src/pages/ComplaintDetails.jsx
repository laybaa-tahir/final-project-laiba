import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCurrentUser, getComplaints } from "../utils/storage";

function ComplaintDetails() {
  const user = getCurrentUser();
  const mine = user ? getComplaints().filter((c) => c.userEmail === user.email) : [];
  const [selected, setSelected] = useState(mine.length ? String(mine[0].id) : "");
  const c = mine.find((x) => String(x.id) === selected);

  return (
    <div className="page">
      <Navbar />
      <section className="dashboard">
        <h2>Complaint Details</h2>
        {!user ? (
          <p>Please login first.</p>
        ) : mine.length === 0 ? (
          <p>You have no complaints yet.</p>
        ) : (
          <>
            <select value={selected} onChange={(e) => setSelected(e.target.value)}
              style={{ padding: "10px", marginBottom: "20px" }}>
              {mine.map((x) => (
                <option key={x.id} value={x.id}>#{x.id} - {x.type}</option>
              ))}
            </select>
            {c && (
              <div className="table-box">
                <table>
                  <tbody>
                    <tr><th>ID</th><td>#{c.id}</td></tr>
                    <tr><th>Type</th><td>{c.type}</td></tr>
                    <tr><th>Date</th><td>{c.date}</td></tr>
                    <tr><th>Location</th><td>{c.location}</td></tr>
                    <tr><th>Description</th><td>{c.description}</td></tr>
                    <tr><th>File</th><td>{c.fileName || "None"}</td></tr>
                    <tr><th>Status</th><td>{c.status}</td></tr>
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default ComplaintDetails;