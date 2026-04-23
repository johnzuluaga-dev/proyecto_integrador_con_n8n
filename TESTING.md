# 🧪 Pruebas Unitarias — BookingForm

Documentación de las pruebas unitarias del componente `BookingForm` del proyecto **BarberFlow**.

---

## 📁 Archivo de pruebas

```
src/BookingForm.test.tsx
```

## 🛠️ Tecnologías utilizadas

| Herramienta | Versión | Uso |
|---|---|---|
| Jest | latest | Framework de testing |
| React Testing Library | latest | Renderizado y consultas del DOM |
| ts-jest | latest | Soporte TypeScript en Jest |

---

## ⚙️ Configuración de timers

```ts
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
```

Se usan **fake timers** para controlar el `setTimeout` del componente sin esperar tiempo real. Antes de cada test se activan, y después de cada test se ejecutan los timers pendientes y se restauran los reales para evitar fugas entre tests.

---

## 🧩 Pruebas

### 1. `renderiza el formulario correctamente`

**Descripción:** Verifica que el componente se renderiza con todos los elementos esenciales visibles.

**Qué valida:**
- El título **BarberFlow** está presente en el DOM.
- El input de **nombre completo** está presente.
- El input de **teléfono** está presente.
- El botón **Agendar Cita** está presente.

---

### 2. `permite escribir en los inputs`

**Descripción:** Verifica que los campos de texto aceptan y reflejan correctamente la entrada del usuario.

**Qué valida:**
- Al escribir `"Juan Pérez"` en el campo de nombre, el input muestra ese valor.
- Al escribir `"123456789"` en el campo de teléfono, el input muestra ese valor.

---

### 3. `envía el formulario y muestra confirmación`

**Descripción:** Verifica el flujo completo de reserva: llenado del formulario, envío y visualización del mensaje de éxito.

**Qué valida:**
- Se pueden llenar los campos de nombre y teléfono.
- Se puede seleccionar un **servicio** y un **barbero** desde los dropdowns.
- Se puede ingresar una **fecha** y una **hora** de cita.
- Al hacer clic en el botón de envío, después de 1500ms aparece el mensaje **"¡Cita Confirmada!"**.

**Nota técnica:** El avance del timer se envuelve en `act()` para que React procese correctamente las actualizaciones de estado generadas por el `setTimeout` interno del componente.

---

## ▶️ Cómo ejecutar las pruebas

```bash
npm test
```

### Resultado esperado

```
PASS  src/BookingForm.test.tsx
  BookingForm
    ✓ renderiza el formulario correctamente
    ✓ permite escribir en los inputs
    ✓ envía el formulario y muestra confirmación

Tests: 3 passed, 3 total
```

---

## 📌 Notas

- El componente `BookingForm` usa un `setTimeout` de **1500ms** para simular el envío. En los tests se controla con `jest.useFakeTimers()` para no depender de tiempo real.
- Se usa `act()` al avanzar los timers para evitar el warning *"An update was not wrapped in act(...)"*.
- Los inputs de tipo `date` y `time` se seleccionan filtrando por `input.type` dentro de `getAllByDisplayValue("")` ya que no tienen placeholder accesible.
