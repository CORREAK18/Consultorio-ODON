// Componente Menu - Navegación principal
// Maneja los enlaces de navegación y el estado activo de cada ruta
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = ({ isMenuOpen, onMenuItemClick }) => {
  const location = useLocation();

  // Función para verificar si una ruta está activa
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  // Elementos del menú de navegación
  const menuItems = [
    {
      path: '/',
      label: 'Inicio',
      icon: '🏠'
    },
    {
      path: '/servicios',
      label: 'Servicios',
      icon: '🦷'
    },
    {
      path: '/consulta',
      label: 'Consulta',
      icon: '📋'
    }
  ];

  return (
    <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
      <ul className="nav-list">
        {menuItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link 
              to={item.path}
              className={`nav-link ${isActiveRoute(item.path) ? 'active' : ''}`}
              onClick={onMenuItemClick}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
