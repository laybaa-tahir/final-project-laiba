import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SafetyResources() {
  return (
    <div className="page">
      <Navbar />

      <section className="info-page">
        <h2>Safety Resources</h2>
        <p>Simple tips to help you stay safe online and offline.</p>

        <div className="info-grid">
          <div className="feature-card">
            <div>🔒</div>
            <h3>Online Safety</h3>
            <p>Use strong passwords, enable two-step verification and never share OTP codes.</p>
          </div>

          <div className="feature-card">
            <div>📍</div>
            <h3>Travel Safety</h3>
            <p>Share your live location with a trusted person when traveling alone.</p>
          </div>

          <div className="feature-card">
            <div>📸</div>
            <h3>Save Evidence</h3>
            <p>Keep screenshots, messages and call records before blocking anyone.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SafetyResources;