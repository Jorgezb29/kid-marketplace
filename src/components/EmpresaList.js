import React from 'react';

const EmpresaList = ({ empresas }) => (
  <div className="box">
    <h2>Mis Empresas</h2>
    {empresas.map((empresa, index) => (
      <div key={index} className="list-item">
        <span>{empresa.nombre} ({empresa.categoria})</span>
        <span><strong>₣ {empresa.ingreso}</strong></span>
      </div>
    ))}
  </div>
);

export default EmpresaList;
