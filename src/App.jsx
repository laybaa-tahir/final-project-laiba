import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SafetyResources from "./pages/SafetyResources";
import Emergency from "./pages/Emergency";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SubmitComplaint from "./pages/SubmitComplaint";
import ComplaintDetails from "./pages/ComplaintDetails";
import MyComplaints from "./pages/MyComplaints";
import ComplaintTracking from "./pages/ComplaintTracking";
import Cybercrime from "./pages/Cybercrime";
import Harassment from "./pages/Harassment";
import Evidence from "./pages/Evidence";
import Contact from "./pages/Contact";
import StaffLogin from "./pages/StaffLogin";
import StaffDashboard from "./pages/StaffDashboard";
import AssignedCases from "./pages/AssignedCases";
import CaseDetails from "./pages/CaseDetails";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import UserManagement from "./pages/UserManagement";
import ComplaintManagement from "./pages/ComplaintManagement";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/safety-resources" element={<SafetyResources />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/submit-complaint" element={<SubmitComplaint />} />
        <Route path="/complaint-details" element={<ComplaintDetails />} />
        <Route path="/my-complaints" element={<MyComplaints />} />
        <Route path="/complaint-tracking" element={<ComplaintTracking />} />
        <Route path="/cybercrime" element={<Cybercrime />} />
        <Route path="/harassment" element={<Harassment />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/assigned-cases" element={<AssignedCases />} />
        <Route path="/case-details" element={<CaseDetails />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/complaint-management" element={<ComplaintManagement />} />
        <Route path="/reports" element={<Reports />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;