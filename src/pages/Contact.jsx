import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const old = JSON.parse(localStorage.getItem("messages")) || [];
    old.push({ name, email, message });
    localStorage.setItem("messages", JSON.stringify(old));
    alert("Thanks " + name + ", we got your message.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="page">
      <Navbar />
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your name" value={name}
          onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Your email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <textarea rows="5" placeholder="Your message" value={message}
          onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type="submit">Send</button>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;