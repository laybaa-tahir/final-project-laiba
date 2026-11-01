import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCurrentUser, getComplaints, saveComplaints } from "../utils/storage";

function SubmitComplaint() {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const user = getCurrentUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    const list = getComplaints();
    const newComplaint = {
      id: 101 + list.length,
      userEmail: user.email,
      userName: user.name,
      type,
      date,
      location,
      description,
      fileName,
      status: "Pending",
    };

    list.push(newComplaint);
    saveComplaints(list);

    alert("Complaint submitted. Your complaint ID is #" + newComplaint.id);
    navigate("/my-complaints");
  };

  return (
    <div className="page">
      <Navbar />

      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Submit Complaint</h2>

        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="" disabled>Select complaint type</option>
          <option>Harassment</option>
          <option>Cybercrime</option>
          <option>Stalking</option>
          <option>Threat</option>
          <option>Other</option>
        </select>

        <input type="date" value={date}
          onChange={(e) => setDate(e.target.value)} required />
        <input type="text" placeholder="Where did it happen?" value={location}
          onChange={(e) => setLocation(e.target.value)} />
        <textarea rows="5" placeholder="Tell us what happened" value={description}
          onChange={(e) => setDescription(e.target.value)} required></textarea>
        <input type="file"
          onChange={(e) => setFileName(e.target.files[0] ? e.target.files[0].name : "")} />

        <button type="submit">Submit Complaint</button>
      </form>

      <Footer />
    </div>
  );
}

export default SubmitComplaint;