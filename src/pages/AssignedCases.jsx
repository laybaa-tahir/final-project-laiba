import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getComplaints } from "../utils/storage";

function statusClass(status) {
  if (status === "Resolved") return "status resolved";
  if (status === "In Review") return "status review";
  return "status pending";
}

function AssignedCases() {
  const list = getComplaints().filter((c) => c.status !== "Resolved");

  return (
    <div className="page">
      <Navbar />
      <section className="dashboard">
        <h2>Assigned Cases</h2>
        <p>Open cases that still need work.</p>
        <div className="table-box">
          {list.length === 0 ? (
            <p>No open cases.</p>
          ) : (
            <table>
              <thead><tr><th>ID</th><th>User</th><th>Type</th><th>Status</th></tr></thead>
              <tbody>
                {list.map((c) => (
                  <tr key={c.id}>
                    <td>#{c.id}</td>
                    <td>{c.userName}</td>
                    <td>{c.type}</td>
                    <td><span className={statusClass(c.status)}>{c.status}</span></td>
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

export default AssignedCases;