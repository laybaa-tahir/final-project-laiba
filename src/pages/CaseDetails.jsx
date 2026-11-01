import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getComplaints } from "../utils/storage";

function CaseDetails() {
  const list = getComplaints();
  const [selected, setSelected] = useState(list.length ? String(list[0].id) : "");
  const c = list.find((x) => String(x.id) === selected);

  return (
    <div className="page">
      <Navbar />
      <section className="dashboard">
        <h2>Case Details</h2>
        {list.length === 0 ? (
          <p>No cases yet.</p>
        ) : (
          <>
            <select value={selected} onChange={(e) => setSelected(e.target.value)}
              style={{ padding: "10px", marginBottom: "20px" }}>
              {list.map((x) => (
                <option key={x.id} value={x.id}>#{x.id} - {x.userName} - {x.type}</option>
              ))}
            </select>
            {c && (
              <div className="table-box">
                <table>
                  <tbody>
                    <tr><th>ID</th><td>#{c.id}</td></tr>
                    <tr><th>User</th><td>{c.userName} ({c.userEmail})</td></tr>
                    <tr><th>Type</th><td>{c.type}</td></tr>
                    <tr><th>Date</th><td>{c.date}</td></tr>
                    <tr><th>Location</th><td>{c.location}</td></tr>
                    <tr><th>Description</th><td>{c.description}</td></tr>
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

export default CaseDetails;