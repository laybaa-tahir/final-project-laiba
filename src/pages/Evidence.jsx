import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCurrentUser, getComplaints, saveComplaints } from "../utils/storage";

function Evidence() {
  const user = getCurrentUser();
  const mine = user ? getComplaints().filter((c) => c.userEmail === user.email) : [];
  const [id, setId] = useState(mine.length ? String(mine[0].id) : "");
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = getComplaints().map((c) =>
      String(c.id) === id ? { ...c, fileName: file } : c
    );
    saveComplaints(updated);
    alert("Evidence added to complaint #" + id);
  };

  if (!user || mine.length === 0) {
    return (
      <div className="page">
        <Navbar />
        <section className="dashboard"><p>Please login and submit a complaint first.</p></section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Navbar />
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Upload Evidence</h2>
        <select value={id} onChange={(e) => setId(e.target.value)}>
          {mine.map((c) => (
            <option key={c.id} value={c.id}>#{c.id} - {c.type}</option>
          ))}
        </select>
        <input type="file" onChange={(e) => setFile(e.target.files[0] ? e.target.files[0].name : "")} required />
        <button type="submit">Upload</button>
      </form>
      <Footer />
    </div>
  );
}

export default Evidence;