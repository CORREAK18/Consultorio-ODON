import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { consultorioInfo } from '../data/serviciosData';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="logo-svg">
              <path d="M12 2C8.5 2 6.5 4 6.5 7.5c0 3.5 1.5 5 2.5 6.5c1 1.5 1 3.5 1 5c0 2 1.5 3 2 3s2-1 2-3c0-1.5 0-3.5 1-5c1-1.5 2.5-3 2.5-6.5C17.5 4 15.5 2 12 2z" />
              <path d="M12 2c0 3-1.5 4.5-2.5 6" />
              <path d="M12 2c0 3 1.5 4.5 2.5 6" />
            </svg>
            <h1 className="logo-text">Consultorio ODON</h1>
          </Link>
        </div>

        <div className="header-contact">
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon-svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="contact-text">{consultorioInfo.telefono}</span>
          </div>
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon-svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="contact-text">{consultorioInfo.email}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
