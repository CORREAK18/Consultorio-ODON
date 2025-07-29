// Configuración de rutas de la aplicación
// Define las rutas para cada página/componente
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Servicios from '../pages/Servicios';
import Consulta from '../pages/Consulta';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta principal - Página de inicio */}
      <Route path="/" element={<Inicio />} />
      
      {/* Ruta para la página de servicios */}
      <Route path="/servicios" element={<Servicios />} />
      
      {/* Ruta para la página de consulta/formulario */}
      <Route path="/consulta" element={<Consulta />} />
      
      {/* Ruta por defecto - redirige a inicio */}
      <Route path="*" element={<Inicio />} />
    </Routes>
  );
};

export default AppRoutes;
