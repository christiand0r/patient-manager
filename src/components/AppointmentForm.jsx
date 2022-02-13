import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const initialForm = {
  petName: "",
  petOwner: "",
  patientSymptoms: "",
  appointmentDate: "",
  appointmentTime: "",
};

const AppointmentForm = ({ bookAppointment }) => {
  const [appointment, setAppointment] = useState(initialForm);
  const [error, setError] = useState(false);

  //Extraer valores para controlar los inputs
  const {
    petName,
    petOwner,
    patientSymptoms,
    appointmentDate,
    appointmentTime,
  } = appointment;

  //Manejador de Inputs
  const handleInput = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  //Manejador de Envio
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar si alguna propiedad está vacía
    for (const prop in appointment) {
      if (appointment[prop].trim() === "") {
        setError(true);
        return;
      }
    }

    //Eliminar mensaje de error
    setError(false);

    //Asignar ID
    appointment.id = uuidv4();

    //Crear Cita
    bookAppointment(appointment);

    //Reiniciar el Form
    setAppointment(initialForm);
  };

  return (
    <>
      <h2>Crear Cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={handleSubmit}>
        <label htmlFor="pet_name">Nombre de la Mascota</label>
        <input
          type="text"
          name="petName"
          id="petName"
          placeholder="Nombre Mascota"
          className="u-full-width"
          onInput={handleInput}
          value={petName}
        />
        <label htmlFor="pet_owner">Nombre del Dueño</label>
        <input
          type="text"
          name="petOwner"
          id="petOwner"
          placeholder="Nombre Dueño"
          className="u-full-width"
          onInput={handleInput}
          value={petOwner}
        />
        <label htmlFor="appointment_date">Fecha</label>
        <input
          type="date"
          name="appointmentDate"
          id="appointmentDate"
          className="u-full-width"
          onInput={handleInput}
          value={appointmentDate}
        />
        <label htmlFor="appointment_time">Hora</label>
        <input
          type="time"
          name="appointmentTime"
          id="appointmentTime"
          className="u-full-width"
          onInput={handleInput}
          value={appointmentTime}
        />
        <label htmlFor="patientSymptoms">Sintomas</label>
        <textarea
          cols="30"
          rows="10"
          name="patientSymptoms"
          id="patientSymptoms"
          className="u-full-width"
          onInput={handleInput}
          value={patientSymptoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

AppointmentForm.propTypes = {
  bookAppointment: PropTypes.func.isRequired,
};

export default AppointmentForm;
