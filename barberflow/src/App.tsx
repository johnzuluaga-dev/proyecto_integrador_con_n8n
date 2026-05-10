import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import AdminDashboard from './components/AdminDashboard';
import CancelAppointment from './components/CancelAppointment';
import Login from './components/Login';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuth = sessionStorage.getItem('barberflow_auth') === 'true';
  return isAuth ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"       element={<BookingForm />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/cancel" element={<CancelAppointment />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}