import React, { useState, useEffect } from 'react';
import './styles/dashboard.css';
import SummaryCard from './components/SummaryCard';
import EmpresaList from './components/EmpresaList';
import RankingList from './components/RankingList';
import CreateEmpresaModal from './components/CreateEmpresaModal';
import HistorialList from './components/HistorialList';
import { agregarEntradaHistorial } from './utils/historialUtils';
import { loadEmpresas, saveEmpresas } from './utils/localStorageUtils';

const Dashboard = () => {
  const [empresas, setEmpresas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const stored = loadEmpresas();
    if (stored) {
      setEmpresas(stored);
    }
  }, []);

  useEffect(() => {
    saveEmpresas(empresas);
  }, [empresas]);

  const handleCreateEmpresa = (newEmpresa) => {
    setEmpresas((prevEmpresas) => {
      agregarEntradaHistorial({
        tipo: 'Creación',
        descripcion: `Se creó la empresa ${newEmpresa.nombre}`,
      });
      return [...prevEmpresas, newEmpresa];
    });
  };

  const saldoActual = 2500;
  const empresasActivas = empresas.length;
  const ingresosSemanales = empresas.reduce((acc, empresa) => acc + empresa.ingreso, 0);

  const ranking = [
    { nombre: 'Carlos', ingresos: 5000 },
    { nombre: 'Ana', ingresos: 4800 },
    { nombre: 'Pedro', ingresos: 4500 },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Mi Mundo Financiero</h1>

      <div className="summary-cards">
        <SummaryCard title="Saldo Actual" value={`₣ ${saldoActual}`} color="yellow" />
        <SummaryCard title="Empresas Activas" value={empresasActivas} color="green" />
        <SummaryCard title="Ingresos Semanales" value={`₣ ${ingresosSemanales}`} color="blue" />
      </div>

      <EmpresaList empresas={empresas} />
      <RankingList empresas={empresas} />
      <HistorialList />

      <div className="button-wrapper">
        <button className="create-button" onClick={() => setIsModalOpen(true)}>
          ¡Crear Nueva Empresa!
        </button>
      </div>

      <CreateEmpresaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateEmpresa}
      />
    </div>
  );
};

export default Dashboard;
