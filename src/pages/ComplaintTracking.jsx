import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getComplaints } from "../utils/storage";

function ComplaintTracking() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const clean = id.replace("#", "").trim();
    const found = getComplaints().find((c) => String(c.id) === clean);
    setResult(found || null);
    setSearched(true);
  };

  return (
    <div className="page">
      <Navbar />
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Track Complaint</h2>
        <input type="text" placeholder="Enter complaint ID (e.g. 101)"
          value={id} onChange={(e) => setId(e.target.value)} required />
        <button type="submit">Check Status</button>

        {searched && !result && <p>No complaint found with this ID.</p>}
        {result && (
          <p style={{ textAlign: "left" }}>
            <b>#{result.id}</b> - {result.type}<br />
            Date: {result.date}<br />
            Status: <b>{result.status}</b>
          </p>
        )}
      </form>
      <Footer />
    </div>
  );
}

export default ComplaintTracking;