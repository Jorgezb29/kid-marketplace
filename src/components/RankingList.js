import React from 'react';

const RankingList = ({ ranking }) => {
  if (!Array.isArray(ranking)) {
    return <div>No se ha cargado el ranking</div>; // Agrega un mensaje por si el ranking no es un array
  }

  return (
    <div className="ranking-container">
      <h2>Ranking de Millonarios</h2>
      <ul>
        {ranking.map((jugador, index) => (
          <li key={index}>
            {jugador.nombre} - {jugador.ingresos}₣
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingList;
