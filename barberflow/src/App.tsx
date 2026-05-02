import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingForm from './BookingForm';
import AdminDashboard from './components/AdminDashboard';
import CancelAppointment from './components/CancelAppointment';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/cancel" element={<CancelAppointment />} />
      </Routes>
    </Router>
  );
}
