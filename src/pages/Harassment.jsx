import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Harassment() {
  return (
    <div className="page">
      <Navbar />
      <section className="info-page">
        <h2>Harassment</h2>
        <p>Understand harassment and know what steps you can take.</p>
        <div className="info-grid">
          <div className="feature-card">
            <div>🏢</div>
            <h3>Workplace</h3>
            <p>Unwelcome behavior at work is not acceptable. Document and report it.</p>
          </div>
          <div className="feature-card">
            <div>🚶‍♀️</div>
            <h3>Public Places</h3>
            <p>Stay alert, move to a safe area and seek help from people nearby.</p>
          </div>
          <div className="feature-card">
            <div>📱</div>
            <h3>Online</h3>
            <p>Block, screenshot and report abusive messages.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Harassment;