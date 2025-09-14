import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import TenderDetails from "./pages/TenderDetails";
import ProposalForm from "./pages/ProposalForm";
import MyProposals from "./pages/MyProposals";
import ProposalDetails from "./pages/ProposalDetails"; // Added import

// ProtectedRoute wrapper
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tenders/:id"
          element={
            <ProtectedRoute>
              <TenderDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tenders/:id/propose"
          element={
            <ProtectedRoute>
              <ProposalForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-proposals"
          element={
            <ProtectedRoute>
              <MyProposals />
            </ProtectedRoute>
          }
        />
        {/* ✅ Added route for Proposal Details */}
        <Route
          path="/proposals/:id"
          element={
            <ProtectedRoute>
              <ProposalDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
