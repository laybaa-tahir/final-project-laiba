import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getUsers, setCurrentUser } from "../utils/storage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = getUsers().find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Wrong email or password.");
      return;
    }

    setCurrentUser(user);
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <Navbar />

      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </form>

      <Footer />
    </div>
  );
}

export default Login;