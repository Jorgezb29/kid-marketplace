export const agregarEntradaHistorial = ({ tipo, descripcion }) => {
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    const nuevaEntrada = {
      tipo,
      descripcion,
      fecha: new Date().toLocaleString(),
    };
    historial.push(nuevaEntrada);
    localStorage.setItem('historial', JSON.stringify(historial));
  };
  
  export const obtenerHistorial = () => {
    return JSON.parse(localStorage.getItem('historial')) || [];
  };
  