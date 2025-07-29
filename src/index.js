// Archivo principal de la aplicación React
// Configura las rutas y renderiza el componente principal
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// Crear la raíz de la aplicación React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación principal
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
