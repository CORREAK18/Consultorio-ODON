// Componente Footer - Pie de página
// Contiene información de contacto, horarios y enlaces importantes
import React from 'react';
import { consultorioInfo } from '../data/serviciosData';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección de información del consultorio */}
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="footer-logo">🦷</span>
            Consultorio ODON
          </h3>
          <p className="footer-description">
            {consultorioInfo.compromiso}
          </p>
        </div>

        {/* Sección de contacto */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Contacto</h4>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>{consultorioInfo.direccion}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>{consultorioInfo.telefono}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>{consultorioInfo.email}</span>
            </div>
          </div>
        </div>

        {/* Sección de horarios */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Horarios de Atención</h4>
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

        {/* Sección de enlaces rápidos */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Enlaces Rápidos</h4>
          <div className="quick-links">
            <a href="/" className="quick-link">Inicio</a>
            <a href="/servicios" className="quick-link">Servicios</a>
            <a href="/consulta" className="quick-link">Agendar Consulta</a>
          </div>
          
          {/* Botón de WhatsApp */}
          <div className="whatsapp-section">
            <a 
              href={`https://wa.me/${consultorioInfo.telefono.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <span className="whatsapp-icon">💬</span>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Línea de copyright */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">
            © 2025 Consultorio ODON. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
