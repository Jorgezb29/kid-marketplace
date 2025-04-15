import React from 'react';

const SummaryCard = ({ title, value, color }) => (
  <div className={`card ${color}`}>
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

export default SummaryCard;
