import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="page">
      <Navbar />

      <section className="features">
        <h2>About SafeVoice</h2>
        <p>
          SafeVoice is a women safety and complaint management system
          that helps women report harassment, cybercrime, stalking,
          threats and abuse in a safe and secure way.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default About;