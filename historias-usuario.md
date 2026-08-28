# 📋 Historias de Usuario – BarberFlow

Basadas en las funcionalidades descritas en `README.md` y `Arquitectura.md` del repositorio `automatizacion_para_barberias`.

---

## Épica 1: Agendamiento de Citas

### HU-01 – Agendar una cita
**Como** cliente,
**quiero** agendar una cita a través del formulario web,
**para** reservar un turno en la barbería sin necesidad de llamar o escribir por WhatsApp.

**Criterios de aceptación:**
- El formulario permite ingresar nombre completo y teléfono.
- El cliente puede seleccionar un servicio y un barbero disponibles.
- El cliente puede elegir fecha y hora dentro de los horarios disponibles.
- Al enviar el formulario, los datos se envían al backend mediante un webhook.
- Se muestra un mensaje de confirmación ("¡Cita Confirmada!") tras el envío exitoso.

---

### HU-02 – Ver horarios disponibles
**Como** cliente,
**quiero** ver la disponibilidad de horarios antes de agendar,
**para** elegir un turno que se ajuste a mi tiempo.

**Criterios de aceptación:**
- El frontend muestra los horarios disponibles según el barbero seleccionado.
- Los horarios ya reservados no aparecen como disponibles.
- La información de disponibilidad se actualiza en tiempo real o al recargar el formulario.

---

### HU-03 – Cancelar una cita
**Como** cliente,
**quiero** cancelar una cita ya agendada,
**para** liberar el horario si no puedo asistir.

**Criterios de aceptación:**
- El cliente puede solicitar la cancelación de una cita existente.
- El sistema actualiza el estado de la cita en la base de datos (Supabase).
- El horario cancelado vuelve a estar disponible para otros clientes.
- Se dispara una notificación confirmando la cancelación.

---

## Épica 2: Notificaciones

### HU-04 – Recibir confirmación por WhatsApp
**Como** cliente,
**quiero** recibir una confirmación por WhatsApp al agendar mi cita,
**para** tener la certeza de que mi reserva fue registrada correctamente.

**Criterios de aceptación:**
- Al guardarse la cita en la base de datos, n8n dispara el envío de un mensaje de WhatsApp.
- El mensaje incluye fecha, hora, servicio y barbero asignado.
- El envío ocurre de forma automática, sin intervención manual.

---

### HU-05 – Recibir recordatorio antes de la cita
**Como** cliente,
**quiero** recibir un recordatorio automático antes de mi cita,
**para** no olvidar mi turno y reducir inasistencias.

**Criterios de aceptación:**
- El sistema envía un recordatorio por WhatsApp en un tiempo previo configurado antes de la cita.
- El recordatorio incluye los datos principales de la cita (hora, servicio, barbero).
- El envío se gestiona automáticamente a través del flujo de n8n.

---

### HU-06 – Recibir notificación de cancelación
**Como** cliente,
**quiero** recibir una notificación cuando mi cita sea cancelada,
**para** estar al tanto del estado de mi reserva.

**Criterios de aceptación:**
- Al cancelarse una cita, se envía un mensaje automático por WhatsApp al cliente.
- El mensaje indica claramente que la cita fue cancelada.

---

## Épica 3: Administración del Negocio

### HU-07 – Visualizar estadísticas del negocio
**Como** administrador,
**quiero** visualizar un dashboard con estadísticas de citas y ventas,
**para** analizar el rendimiento de mi barbería.

**Criterios de aceptación:**
- El dashboard muestra métricas como número de citas, cancelaciones y ventas.
- Los datos se obtienen desde Supabase.
- El administrador puede filtrar o visualizar información por periodo (día, semana, mes).

---

### HU-08 – Generar reportes automáticos
**Como** administrador,
**quiero** recibir reportes automáticos del negocio,
**para** tomar decisiones sin tener que calcular la información manualmente.

**Criterios de aceptación:**
- El sistema genera reportes de forma periódica (por ejemplo, semanal o mensual).
- Los reportes incluyen datos de ventas y citas gestionadas.
- Se utiliza OpenAI para generar un análisis o resumen automático de la información.

---

### HU-09 – Gestionar la agenda como administrador
**Como** administrador,
**quiero** ver y gestionar todas las citas agendadas,
**para** mantener el control de la operación diaria de la barbería.

**Criterios de aceptación:**
- El administrador puede ver todas las citas registradas en la base de datos.
- El administrador puede identificar citas confirmadas, canceladas y pendientes.
- La información se mantiene sincronizada con las acciones que realizan los clientes.

---

## Notas
- Estas historias de usuario se derivaron de las funcionalidades ya documentadas (`README.md`, `Arquitectura.md`) y de los diagramas de casos de uso.
