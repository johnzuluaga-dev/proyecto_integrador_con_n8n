/**
 * Servicio para conectarse con n8n y enviar datos de citas
 */

const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;

if (!N8N_WEBHOOK_URL) {
  console.error('Error: VITE_N8N_WEBHOOK_URL no está definida en .env');
}

export interface BookingData {
  client_name: string;
  client_phone: string;
  service: string;
  barber: string;
  appointment_date: string;
  appointment_time: string;
  price?: number;
}

export async function sendBookingToN8n(bookingData: BookingData): Promise<any> {
  try {
    console.log('Enviando datos a n8n:', bookingData);
    console.log('URL:', N8N_WEBHOOK_URL);
    
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tipo_evento: 'nueva_cita',
        client_name: bookingData.client_name,
        client_phone: bookingData.client_phone,
        service: bookingData.service,
        barber: bookingData.barber,
        appointment_date: bookingData.appointment_date,
        appointment_time: bookingData.appointment_time,
        price: bookingData.price,
        timestamp: new Date().toISOString(),
        source: 'BarberFlow Web',
      }),
    });

    console.log('Response status:', response.status);
    const responseText = await response.text();
    console.log('Response text:', responseText);

    if (!response.ok) {
      console.error('Respuesta de error del servidor:', responseText);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    if (!responseText) {
      return { success: true, message: 'Cita enviada a n8n (respuesta vacía)' };
    }

    const result = JSON.parse(responseText);
    console.log('Respuesta exitosa de n8n:', result);
    return result;
  } catch (error) {
    console.error('Error al enviar cita a n8n:', error);
    throw error;
  }
}
