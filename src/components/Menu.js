// Componente Menu - Navegación principal independiente
// Maneja los enlaces de navegación y su propio estado móvil
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para verificar si una ruta está activa
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un elemento
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
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
    <div className="menu-container">
      {/* Botón hamburguesa para móvil */}
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Abrir menú de navegación"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navegación principal */}
      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link 
                to={item.path}
                className={`nav-link ${isActiveRoute(item.path) ? 'active' : ''}`}
                onClick={handleMenuItemClick}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
