export const loadEmpresas = () => {
    try {
      const data = localStorage.getItem('empresas');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error al cargar empresas:", error);
      return [];
    }
  };
  
  export const saveEmpresas = (empresas) => {
    try {
      localStorage.setItem('empresas', JSON.stringify(empresas));
    } catch (error) {
      console.error("Error al guardar empresas:", error);
    }
  };
  