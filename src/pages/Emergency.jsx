import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Emergency() {
  return (
    <div className="page">
      <Navbar />

      <section className="info-page">
        <h2>🚨 Emergency Information</h2>
        <p>If you are in immediate danger, call for help right away.</p>

        <div className="info-grid">
          <div className="feature-card">
            <div>👮</div>
            <h3>Police</h3>
            <p>Call 15</p>
          </div>

          <div className="feature-card">
            <div>🚑</div>
            <h3>Rescue</h3>
            <p>Call 1122</p>
          </div>

          <div className="feature-card">
            <div>💻</div>
            <h3>FIA Cybercrime</h3>
            <p>Call 1991</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Emergency;