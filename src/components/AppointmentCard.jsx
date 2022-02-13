import React from "react";
import PropTypes from "prop-types";

const AppointmentCard = ({ appointment, cancelAppointment }) => {
  const {
    id,
    petName,
    petOwner,
    patientSymptoms,
    appointmentDate,
    appointmentTime,
  } = appointment;

  return (
    <div className="cita">
      <p>
        Mascota: <span>{petName}</span>
      </p>
      <p>
        Dueño: <span>{petOwner}</span>
      </p>
      <p>
        Fecha: <span>{appointmentDate}</span>
      </p>
      <p>
        Hora: <span>{appointmentTime}</span>
      </p>
      <p>
        Sintomas: <span>{patientSymptoms}</span>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => cancelAppointment(id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

AppointmentCard.propTypes = {
  appointment: PropTypes.object.isRequired,
  cancelAppointment: PropTypes.func.isRequired,
};

export default AppointmentCard;
