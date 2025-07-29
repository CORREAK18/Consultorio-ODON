// Componente Header - Logo y información de contacto
// Solo contiene el logo del consultorio y datos de contacto
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {

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

        {/* Información de contacto en el header */}
        <div className="header-contact">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span className="contact-text">+1234567890</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">�</span>
            <span className="contact-text">info@consultorioodon.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
