import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cybercrime() {
  return (
    <div className="page">
      <Navbar />
      <section className="info-page">
        <h2>Cybercrime</h2>
        <p>Learn about online threats and how to protect yourself.</p>
        <div className="info-grid">
          <div className="feature-card">
            <div>🎣</div>
            <h3>Phishing</h3>
            <p>Never click suspicious links or share personal details.</p>
          </div>
          <div className="feature-card">
            <div>🖼️</div>
            <h3>Photo Misuse</h3>
            <p>Limit who can see your photos and report misuse quickly.</p>
          </div>
          <div className="feature-card">
            <div>🚫</div>
            <h3>Online Blackmail</h3>
            <p>Do not pay. Save evidence and report immediately.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cybercrime;