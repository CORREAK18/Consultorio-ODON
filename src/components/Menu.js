import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    {
      path: '/',
      label: 'Inicio',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon-svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      path: '/servicios',
      label: 'Servicios',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon-svg">
          <path d="M12 2C8.5 2 6.5 4 6.5 7.5c0 3.5 1.5 5 2.5 6.5c1 1.5 1 3.5 1 5c0 2 1.5 3 2 3s2-1 2-3c0-1.5 0-3.5 1-5c1-1.5 2.5-3 2.5-6.5C17.5 4 15.5 2 12 2z" />
          <path d="M12 2c0 3-1.5 4.5-2.5 6" />
          <path d="M12 2c0 3 1.5 4.5 2.5 6" />
        </svg>
      )
    },
    {
      path: '/consulta',
      label: 'Consulta',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon-svg">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M9 14h6" />
          <path d="M9 18h6" />
          <path d="M9 10h6" />
        </svg>
      )
    }
  ];

  return (
    <div className="menu-container">
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Menú de navegación"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

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
