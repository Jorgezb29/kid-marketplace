import React, { useState } from 'react';
import categorias from '../data/categorias';

const CreateEmpresaModal = ({ isOpen, onClose, onCreate }) => {
  const [nombre, setNombre] = useState('');
  const [ingreso, setIngreso] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleCreate = () => {
    if (nombre && ingreso && categoria) {
      const catData = categorias.find(c => c.nombre === categoria);
      const ingresoFinal = parseFloat(ingreso) * catData.bonificacion;

      onCreate({
        nombre,
        ingreso: Math.round(ingresoFinal),
        categoria,
        fecha: new Date().toLocaleDateString()
      });

      setNombre('');
      setIngreso('');
      setCategoria('');
      onClose();
    } else {
      alert("¡Completa todos los campos!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Crear Empresa</h2>
        <label>Nombre:</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label>Ingreso base semanal:</label>
        <input type="number" value={ingreso} onChange={(e) => setIngreso(e.target.value)} />

        <label>Categoría:</label>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Selecciona una</option>
          {categorias.map(cat => (
            <option key={cat.nombre} value={cat.nombre}>
              {cat.icono} {cat.nombre}
            </option>
          ))}
        </select>

        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleCreate}>Crear</button>
        </div>
      </div>
    </div>
  );
};

export default CreateEmpresaModal;
