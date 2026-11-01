import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getUsers, saveUsers } from "../utils/storage";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = getUsers();
    if (users.find((u) => u.email === email)) {
      alert("This email is already registered. Please login.");
      return;
    }

    users.push({ name, email, phone, password });
    saveUsers(users);

    alert("Account created! Now login.");
    navigate("/login");
  };

  return (
    <div className="page">
      <Navbar />

      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input type="text" placeholder="Full Name" value={name}
          onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="tel" placeholder="Phone Number" value={phone}
          onChange={(e) => setPhone(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} minLength={6} required />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>

      <Footer />
    </div>
  );
}

export default Register;