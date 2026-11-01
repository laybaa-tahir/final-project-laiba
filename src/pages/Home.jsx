import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="page">
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <p className="tagline">Made for women who need help</p>

          <h1>
            Speak Up.
            <br />
            <span>Stay Safe.</span>
          </h1>

          <p>
            SafeVoice is a simple website where you can report harassment,
            online threats or stalking, and check what happened to your
            complaint.
          </p>

          <div className="hero-buttons">
            <Link to="/submit-complaint" className="primary-btn">
              Report an Incident
            </Link>
            <Link to="/safety-resources" className="secondary-btn">
              Safety Resources
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="shield">🛡️</div>
          <h3>You are not alone</h3>
          <p>Tell us what happened and track your complaint here.</p>
        </div>
      </section>

      <section className="features">
        <h2>What you can do here</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Report harassment</h3>
            <p>Tell us about any harassment you faced.</p>
          </div>

          <div className="feature-card">
            <h3>Online problems</h3>
            <p>Fake accounts, blackmail, abusive messages, etc.</p>
          </div>

          <div className="feature-card">
            <h3>Check your complaint</h3>
            <p>See if it is pending, in review or solved.</p>
          </div>

          <div className="feature-card">
            <h3>Safety tips</h3>
            <p>Simple advice to stay safe.</p>
          </div>
        </div>
      </section>

      <section className="steps">
        <h2>How it works</h2>

        <div className="steps-grid">
          <div>
            <span>01</span>
            <h3>Make an account</h3>
            <p>Register with your email.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Submit complaint</h3>
            <p>Write what happened and add details.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Track it</h3>
            <p>Use your complaint ID to check status.</p>
          </div>

          <div>
            <span>04</span>
            <h3>Get updates</h3>
            <p>See when the status changes.</p>
          </div>
        </div>
      </section>

      <section className="emergency-box">
        <h2>In immediate danger?</h2>
        <p>
          Please call your local emergency number or contact someone you trust
          right now.
        </p>
        <Link to="/emergency">Emergency numbers</Link>
      </section>

      <Footer />
    </div>
  );
}

export default Home;