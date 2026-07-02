import React from 'react';
import { Link } from 'react-router-dom';
import { consultorioInfo } from '../data/serviciosData';
import '../styles/Footer.css';

const Footer = () => {
  const whatsappNumber = consultorioInfo.telefono.replace(/[^0-9]/g, '');

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="footer-logo-svg">
              <path d="M12 2C8.5 2 6.5 4 6.5 7.5c0 3.5 1.5 5 2.5 6.5c1 1.5 1 3.5 1 5c0 2 1.5 3 2 3s2-1 2-3c0-1.5 0-3.5 1-5c1-1.5 2.5-3 2.5-6.5C17.5 4 15.5 2 12 2z" />
              <path d="M12 2c0 3-1.5 4.5-2.5 6" />
              <path d="M12 2c0 3 1.5 4.5 2.5 6" />
            </svg>
            Consultorio ODON
          </h3>
          <p className="footer-description">
            {consultorioInfo.compromiso}
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contacto</h4>
          <div className="contact-info">
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon-svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{consultorioInfo.direccion}</span>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon-svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{consultorioInfo.telefono}</span>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon-svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{consultorioInfo.email}</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Horarios</h4>
          <div className="horarios-info">
            <div className="horario-item">
              <span className="dia">Lunes - Jueves:</span>
              <span className="hora">{consultorioInfo.horarios.lunes}</span>
            </div>
            <div className="horario-item">
              <span className="dia">Viernes:</span>
              <span className="hora">{consultorioInfo.horarios.viernes}</span>
            </div>
            <div className="horario-item">
              <span className="dia">Sábado:</span>
              <span className="hora">{consultorioInfo.horarios.sabado}</span>
            </div>
            <div className="horario-item">
              <span className="dia">Domingo:</span>
              <span className="hora">{consultorioInfo.horarios.domingo}</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Enlaces Rápidos</h4>
          <div className="quick-links">
            <Link to="/" className="quick-link">Inicio</Link>
            <Link to="/servicios" className="quick-link">Servicios</Link>
            <Link to="/consulta" className="quick-link">Agendar Consulta</Link>
          </div>
          
          <div className="whatsapp-section">
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '18px', height: '18px', display: 'block'}}>
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.927 9.927 0 004.93 1.31h.005c5.507 0 9.99-4.478 9.99-9.985C22.002 6.478 17.519 2 12.012 2zm5.727 14.047c-.247.697-1.204 1.285-1.654 1.342-.45.057-.899.278-2.905-.536-2.008-.813-3.292-2.845-3.392-2.979-.1-.135-.83-1.102-.83-2.102 0-1.002.524-1.495.711-1.702.187-.207.41-.258.547-.258.137 0 .274.002.393.007.126.006.297-.048.465.362.172.418.587 1.432.637 1.536.05.103.084.224.015.362-.069.138-.103.224-.207.344-.103.12-.218.27-.31.37a2.808 2.808 0 00-.638.79c.172.302.766 1.265 1.644 2.042.879.778 1.62 1.018 1.94 1.155.32.137.503.113.69-.1.188-.214.811-.944 1.026-1.272.215-.328.431-.274.726-.164.296.11 1.874.882 2.195 1.042.32.16.534.238.608.366.074.127.074.726-.173 1.423z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container" style={{padding: '0 var(--spacing-lg)'}}>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Consultorio ODON. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
