// test/App.test.tsx
jest.mock('../src/lib/n8n', () => ({
  sendBookingToN8n: jest.fn().mockResolvedValue({ success: true }),
}));

jest.mock('../src/lib/supabase', () => ({
  getAppointments: jest.fn().mockResolvedValue([]),
  updateAppointmentStatus: jest.fn().mockResolvedValue({}),
}));

jest.mock('../src/components/Login', () => ({
  __esModule: true,
  default: () => <div>Login Mock</div>,
}));

jest.mock('../src/components/AdminDashboard', () => ({
  __esModule: true,
  default: () => <div>Dashboard Mock</div>,
}));

jest.mock('../src/components/CancelAppointment', () => ({
  __esModule: true,
  default: () => <div>Cancel Mock</div>,
}));

import { render } from "@testing-library/react";
import App from "../src/App";

test("renderiza sin romper", () => {
  render(<App />);
});