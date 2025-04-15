import React, { useEffect, useState } from 'react';
import { obtenerHistorial } from '../utils/historialUtils'; // Función para obtener historial

const HistorialList = () => {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    setHistorial(obtenerHistorial());
  }, []);

  return (
    <div className="historial-container">
      <h2>Historial de Transacciones</h2>
      <ul>
        {historial.map((entry, index) => (
          <li key={index}>
            <span>{entry.tipo}</span>: {entry.descripcion} ({entry.fecha})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorialList;
