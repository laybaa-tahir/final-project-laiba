import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function StaffLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "staff@safevoice.com" && password === "staff123") {
      localStorage.setItem("role", "staff");
      navigate("/staff-dashboard");
    } else {
      alert("Wrong staff email or password.");
    }
  };

  return (
    <div className="page">
      <Navbar />
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Staff Login</h2>
        <input type="email" placeholder="Staff email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <Footer />
    </div>
  );
}

export default StaffLogin;