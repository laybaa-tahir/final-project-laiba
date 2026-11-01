import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCurrentUser, getComplaints } from "../utils/storage";

function statusClass(status) {
  if (status === "Resolved") return "status resolved";
  if (status === "In Review") return "status review";
  return "status pending";
}

function MyComplaints() {
  const user = getCurrentUser();
  const mine = user ? getComplaints().filter((c) => c.userEmail === user.email) : [];

  return (
    <div className="page">
      <Navbar />

      <section className="dashboard">
        <h2>My Complaints</h2>

        {!user ? (
          <p>Please <Link to="/login"><b>login</b></Link> to see your complaints.</p>
        ) : (
          <>
            <p>Hi {user.name}, here are your complaints.</p>

            <div className="table-box">
              {mine.length === 0 ? (
                <p>You have not submitted any complaint yet.</p>
              ) : (
                <table>
                  <thead>
                    <tr><th>ID</th><th>Type</th><th>Date</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {mine.map((c) => (
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
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default MyComplaints;