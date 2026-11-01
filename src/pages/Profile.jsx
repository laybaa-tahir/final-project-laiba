import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCurrentUser, setCurrentUser, getUsers, saveUsers } from "../utils/storage";

function Profile() {
  const user = getCurrentUser();
  const [name, setName] = useState(user ? user.name : "");
  const [phone, setPhone] = useState(user ? user.phone : "");

  if (!user) {
    return (
      <div className="page">
        <Navbar />
        <section className="dashboard"><p>Please login first.</p></section>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = { ...user, name, phone };
    saveUsers(getUsers().map((u) => (u.email === user.email ? updated : u)));
    setCurrentUser(updated);
    alert("Profile updated.");
  };

  return (
    <div className="page">
      <Navbar />
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>My Profile</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" value={user.email} disabled />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <button type="submit">Save Changes</button>
      </form>
      <Footer />
    </div>
  );
}

export default Profile;