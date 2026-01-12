import React, { useState } from "react";
import DashboardLayout from "../layout/DashboradLayout.jsx"; // <-- ojo el nombre
import ModalHorarios from "../components/modals/ModalHorarios.jsx"; // ajusta esta ruta según tu estructura
import "../css/calendario.css";

const Calendario = () => {
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (dayNumber) => {
    setSelectedDay(dayNumber);
    setOpen(true);
  };

  const handleGenerate = (selectedSlots) => {
    console.log("Día seleccionado:", selectedDay);
    console.log("Horarios seleccionados:", selectedSlots);

    // aquí luego podrías guardar en backend:
    // { day: selectedDay, slots: selectedSlots }

    setOpen(false);
  };

  return (
    <DashboardLayout>
      <h1>Asignación de horarios</h1>

      <div className="calendar-layout">
        {/* Info del Mes */}
        <div className="calendar-info">
          <h2 className="month-title">Enero 2025</h2>
          <p className="calendar-desc">
            Gestiona la disponibilidad de los barberos y los turnos de este mes.
          </p>

          <button className="btn-primary" onClick={() => setOpen(true)}>
            Nueva Excepción
          </button>
        </div>

        {/* Cuadrícula del Calendario */}
        <div className="card calendar-card">
          <div className="calendar-grid">
            {/* Días de la semana */}
            <div className="day-name">Lun</div>
            <div className="day-name">Mar</div>
            <div className="day-name">Mié</div>
            <div className="day-name">Jue</div>
            <div className="day-name">Vie</div>
            <div className="day-name">Sáb</div>
            <div className="day-name">Dom</div>

            {/* Empty (no clic) */}
            <div className="day empty"></div>
            <div className="day empty"></div>

            {/* Días clickeables */}
            <div
              className="day"
              onClick={() => handleDayClick(1)}
              role="button"
              tabIndex={0}
            >
              1 <span className="dot blue"></span>
            </div>

            <div
              className="day"
              onClick={() => handleDayClick(2)}
              role="button"
              tabIndex={0}
            >
              2 <span className="dot pink"></span>
            </div>

            <div
              className="day"
              onClick={() => handleDayClick(3)}
              role="button"
              tabIndex={0}
            >
              3
            </div>

            <div
              className="day"
              onClick={() => handleDayClick(4)}
              role="button"
              tabIndex={0}
            >
              4 <span className="dot pink"></span>
            </div>

            <div
              className="day"
              onClick={() => handleDayClick(5)}
              role="button"
              tabIndex={0}
            >
              5
            </div>

            <div
              className="day current"
              onClick={() => handleDayClick(6)}
              role="button"
              tabIndex={0}
            >
              6 <span className="tag">Hoy</span>
            </div>

            <div
              className="day"
              onClick={() => handleDayClick(7)}
              role="button"
              tabIndex={0}
            >
              7 <span className="dot blue"></span>
            </div>

            <div
              className="day"
              onClick={() => handleDayClick(8)}
              role="button"
              tabIndex={0}
            >
              8
            </div>

            <div
              className="day"
              onClick={() => handleDayClick(9)}
              role="button"
              tabIndex={0}
            >
              9 <span className="dot pink"></span>
            </div>

            <div
              className="day"
              onClick={() => handleDayClick(10)}
              role="button"
              tabIndex={0}
            >
              10
            </div>

            <div
              className="day"
              onClick={() => handleDayClick(11)}
              role="button"
              tabIndex={0}
            >
              11
            </div>

            <div
              className="day"
              onClick={() => handleDayClick(12)}
              role="button"
              tabIndex={0}
            >
              12
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ModalHorarios
        isOpen={open}
        onClose={() => setOpen(false)}
        onGenerate={handleGenerate}
        title={`Seleccione los horarios ${
          selectedDay ? `- Día ${selectedDay}` : ""
        }`}
      />
    </DashboardLayout>
  );
};

export default Calendario;
