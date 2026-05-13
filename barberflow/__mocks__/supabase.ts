// __mocks__/supabase.ts
export const getAppointments = jest.fn().mockResolvedValue([]);
export const updateAppointmentStatus = jest.fn().mockResolvedValue({});
export type Appointment = {
  id: string;
  client_name: string;
  client_phone: string;
  service: string;
  barber: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
  price: number;
};