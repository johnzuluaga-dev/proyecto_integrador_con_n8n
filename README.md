# Proyecto Integrador con n8n

Este repositorio contiene el proyecto integrador: una automatización con **n8n** para una barbería, que permite el control de citas y el seguimiento de ingresos semanales y mensuales.

## Descripción

El proyecto consiste en un sistema de automatización para una barbería que integra las siguientes funcionalidades:

- **Control de citas**: Registro, consulta y gestión de citas de clientes.
- **Seguimiento de ingresos**: Reporte de ganancias semanales y mensuales.
- **Notificaciones automáticas**: Recordatorios y confirmaciones de citas para los clientes.

## Tecnologías utilizadas

- [n8n](https://n8n.io/) — Plataforma de automatización de flujos de trabajo
- Integraciones con servicios de mensajería y calendarios según configuración

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [n8n](https://docs.n8n.io/getting-started/installation/) instalado globalmente o mediante Docker

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jhonzuluagago-crypto/proyecto_integrador_con_n8n.git
   cd proyecto_integrador_con_n8n
   ```

2. Instala n8n si aún no lo tienes:
   ```bash
   npm install -g n8n
   ```

3. Inicia n8n:
   ```bash
   n8n start
   ```

4. Importa los flujos de trabajo desde la interfaz de n8n en `http://localhost:5678`.

## Uso

- Accede a la interfaz de n8n en `http://localhost:5678`.
- Importa y activa los flujos de trabajo del proyecto.
- Configura las credenciales necesarias (correo electrónico, WhatsApp, Google Calendar, etc.).
- Los reportes de ingresos se generan automáticamente cada semana y cada mes.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un *issue* o envía un *pull request* con tus propuestas de mejora.

## Licencia

Este proyecto está licenciado bajo los términos de la licencia incluida en el archivo [LICENSE](LICENSE).
