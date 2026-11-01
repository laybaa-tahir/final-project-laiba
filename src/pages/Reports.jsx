import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getComplaints } from "../utils/storage";

function Reports() {
  const list = getComplaints();
  const types = ["Harassment", "Cybercrime", "Stalking", "Threat", "Other"];

  return (
    <div className="page">
      <Navbar />
      <section className="dashboard">
        <h2>Reports</h2>
        <p>Complaints by category. Total: {list.length}</p>
        <div className="stats-grid">
          {types.map((t) => (
            <div className="stat-card" key={t}>
              <h3>{list.filter((c) => c.type === t).length}</h3>
              <p>{t}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Reports;