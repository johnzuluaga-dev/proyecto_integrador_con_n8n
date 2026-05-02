import { render, screen, fireEvent, act } from "@testing-library/react"; // 👈 act agregado
import BookingForm from "../src/BookingForm";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("BookingForm", () => {

  test("renderiza el formulario correctamente", () => {
    render(<BookingForm />);
    expect(screen.getByText(/barberflow/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/nombre completo/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/teléfono/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /agendar cita/i })).toBeInTheDocument();
  });

  test("permite escribir en los inputs", () => {
    render(<BookingForm />);
    const nombre = screen.getByPlaceholderText(/nombre completo/i);
    const telefono = screen.getByPlaceholderText(/teléfono/i);
    fireEvent.change(nombre, { target: { value: "Juan Pérez" } });
    fireEvent.change(telefono, { target: { value: "123456789" } });
    expect(nombre).toHaveValue("Juan Pérez");
    expect(telefono).toHaveValue("123456789");
  });

  test("envía el formulario y muestra confirmación", async () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByPlaceholderText(/nombre completo/i), {
      target: { value: "Juan Pérez" },
    });
    fireEvent.change(screen.getByPlaceholderText(/teléfono/i), {
      target: { value: "123456789" },
    });

    const selects = screen.getAllByRole("combobox");
    fireEvent.change(selects[0], { target: { value: "Corte Clásico" } });
    fireEvent.change(selects[1], { target: { value: 'Carlos "The Blade"' } });

    const allInputs = screen.getAllByDisplayValue("");
    const dateInput = allInputs.find((el) => (el as HTMLInputElement).type === "date")!;
    const timeInput = allInputs.find((el) => (el as HTMLInputElement).type === "time")!;

    fireEvent.change(dateInput, { target: { value: "2026-04-25" } });
    fireEvent.change(timeInput, { target: { value: "10:00" } });

    fireEvent.click(screen.getByRole("button", { name: /agendar cita/i }));

    // ✅ act() envuelve el timer para que React procese el setState limpiamente
    await act(async () => {
      jest.advanceTimersByTime(1500);
    });

    const successMessage = await screen.findByText(/cita confirmada/i);
    expect(successMessage).toBeInTheDocument();
  });

});