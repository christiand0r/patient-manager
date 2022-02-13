import React, { useState, useEffect } from "react";
import AppointmentCard from "./components/AppointmentCard";
import AppointmentForm from "./components/AppointmentForm";

function App() {
  //Citas en localStorage
  const initialAppointments =
    JSON.parse(localStorage.getItem("appointments")) ?? [];

  const [appointments, setAppointments] = useState(initialAppointments);

  //Actualizar localStorage
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  //Agrear cita al listado de citas
  const bookAppointment = (appointment) =>
    setAppointments([...appointments, appointment]);

  //Remover cita por su ID
  const cancelAppointment = (id) => {
    const appointmentRemoved = appointments.filter((el) => el.id !== id);
    setAppointments(appointmentRemoved);
  };

  //Mensaje condicional
  const title = appointments.length ? "Administra tus citas" : "No hay citas";

  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <AppointmentForm bookAppointment={bookAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((item) => (
              <AppointmentCard
                key={item.id}
                appointment={item}
                cancelAppointment={cancelAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
