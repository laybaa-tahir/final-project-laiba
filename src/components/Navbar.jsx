import { useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../utils/storage";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = getCurrentUser();

  const handleLogout = () => {
    logoutUser();
    window.location.href = "/";
  };

  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">🛡️ SafeVoice</Link>

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      <div className={open ? "nav-links show" : "nav-links"}>
        <Link to="/" onClick={close}>Home</Link>
        <Link to="/about" onClick={close}>About</Link>

        <div className="dropdown">
          <span className="dropdown-title">Awareness ▾</span>
          <div className="dropdown-menu">
            <Link to="/harassment">Harassment</Link>
            <Link to="/cybercrime">Cybercrime</Link>
            <Link to="/safety-resources">Safety Resources</Link>
          </div>
        </div>

        <div className="dropdown">
          <span className="dropdown-title">Complaints ▾</span>
          <div className="dropdown-menu">
            <Link to="/submit-complaint">Submit Complaint</Link>
            <Link to="/complaint-tracking">Track Complaint</Link>
            <Link to="/my-complaints">My Complaints</Link>
            <Link to="/evidence">Upload Evidence</Link>
          </div>
        </div>

        <Link to="/contact" onClick={close}>Contact</Link>
        <Link to="/emergency" className="emergency-link" onClick={close}>Emergency</Link>

        {user ? (
          <>
            <Link to="/dashboard" onClick={close}>Hi, {user.name.split(" ")[0]}</Link>
            <a href="/" onClick={(e) => { e.preventDefault(); handleLogout(); }}>Logout</a>
          </>
        ) : (
          <div className="dropdown">
            <span className="dropdown-title">Login ▾</span>
            <div className="dropdown-menu">
              <Link to="/login">User Login</Link>
              <Link to="/staff-login">Staff Login</Link>
              <Link to="/admin-login">Admin Login</Link>
            </div>
          </div>
        )}

        <Link to="/submit-complaint" className="nav-button" onClick={close}>Report Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;