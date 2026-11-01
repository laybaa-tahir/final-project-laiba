import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getUsers } from "../utils/storage";

function UserManagement() {
  const users = getUsers();

  return (
    <div className="page">
      <Navbar />
      <section className="dashboard">
        <h2>User Management</h2>
        <p>All registered users.</p>
        <div className="table-box">
          {users.length === 0 ? (
            <p>No users registered yet.</p>
          ) : (
            <table>
              <thead><tr><th>Name</th><th>Email</th><th>Phone</th></tr></thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.email}><td>{u.name}</td><td>{u.email}</td><td>{u.phone}</td></tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default UserManagement;