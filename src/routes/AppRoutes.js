import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Servicios from '../pages/Servicios';
import Consulta from '../pages/Consulta';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/consulta" element={<Consulta />} />
      <Route path="*" element={<Inicio />} />
    </Routes>
  );
};

export default AppRoutes;
