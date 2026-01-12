import React, { useEffect, useState } from "react";
import '../../css/calendario.css';

const ModalHorarios = ({
  isOpen = false,
  title = "Seleccione los horarios",
  subtitle = "Marca los rangos de tiempo que deseas habilitar",
  slots = [
    { id: 1, label: "8:00 am a 9:00 am", checked: true },
    { id: 2, label: "9:00 am a 10:00 am", checked: false },
    { id: 3, label: "10:00 am a 11:00 am", checked: true },
    { id: 4, label: "11:00 am a 12:00 md", checked: false },
    { id: 5, label: "1:00 pm a 2:00 pm", checked: true },
    { id: 6, label: "2:00 pm a 3:00 pm", checked: false },
  ],
  onClose = () => {},
  onGenerate = () => {},
}) => {
  const [localSlots, setLocalSlots] = useState(slots);

  // Si cambian los slots desde el padre, sincronizamos
  useEffect(() => {
    setLocalSlots(slots);
  }, [slots]);

  // Opcional: cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const toggleSlot = (id) => {
    setLocalSlots((prev) =>
      prev.map((s) => (s.id === id ? { ...s, checked: !s.checked } : s))
    );
  };

  const handleGenerate = () => {
    const selected = localSlots.filter((s) => s.checked);
    onGenerate(selected);
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        // click afuera cierra
        if (e.target.classList.contains("modal-container")) onClose();
      }}
    >
      <div className="card modal-card">
        <div className="modal-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="time-slots-grid">
          {localSlots.map((slot) => (
            <label key={slot.id} className="time-slot">
              <input
                type="checkbox"
                checked={slot.checked}
                onChange={() => toggleSlot(slot.id)}
              />
              <div className="slot-content">
                <span className="time">{slot.label}</span>
                <i className="fas fa-check-circle"></i>
              </div>
            </label>
          ))}
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-primary-gradient" onClick={handleGenerate}>
            Generar horarios
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalHorarios;
