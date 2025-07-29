// Componente Header - Navegación principal
// Contiene el logo, menú de navegación y información de contacto
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import '../styles/Header.css';

const Header = () => {
  // Estado para controlar el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un elemento
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo y nombre del consultorio */}
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <div className="logo">🦷</div>
            <h1 className="logo-text">Consultorio ODON</h1>
          </Link>
        </div>

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
        <Menu 
          isMenuOpen={isMenuOpen} 
          onMenuItemClick={handleMenuItemClick}
        />

        {/* Información de contacto en el header */}
        <div className="header-contact">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span className="contact-text">+1234567890</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
