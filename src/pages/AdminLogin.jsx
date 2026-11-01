import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "admin@safevoice.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin-dashboard");
    } else {
      alert("Wrong admin email or password.");
    }
  };

  return (
    <div className="page">
      <Navbar />
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <input type="email" placeholder="Admin email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <Footer />
    </div>
  );
}

export default AdminLogin;