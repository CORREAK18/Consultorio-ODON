import React from 'react';
import { Link } from 'react-router-dom';
import { serviciosData, consultorioInfo } from '../data/serviciosData';
import '../styles/Servicios.css';

const renderServiceIcon = (nombre) => {
  switch (nombre) {
    case "Limpieza Dental":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon-svg">
          <path d="M12 2C8.5 2 6.5 4 6.5 7.5c0 3.5 1.5 5 2.5 6.5c1 1.5 1 3.5 1 5c0 2 1.5 3 2 3s2-1 2-3c0-1.5 0-3.5 1-5c1-1.5 2.5-3 2.5-6.5C17.5 4 15.5 2 12 2z" />
          <path d="M12 2c0 3-1.5 4.5-2.5 6" />
          <path d="M12 2c0 3 1.5 4.5 2.5 6" />
        </svg>
      );
    case "Blanqueamiento Dental":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon-svg">
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />
        </svg>
      );
    case "Ortodoncia":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon-svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M8 11h8M12 8v6" />
        </svg>
      );
    case "Endodoncia":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon-svg">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case "Implantes Dentales":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon-svg">
          <path d="M12 2v20M8 6h8M8 12h8M8 18h8" />
          <circle cx="12" cy="2" r="1" />
        </svg>
      );
    case "Cirugía Oral":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon-svg">
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "Prótesis Dental":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon-svg">
          <path d="M5 12a7 7 0 0 1 14 0c0 4-7 9-7 9s-7-5-7-9z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "Odontología Pediátrica":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon-svg">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon-svg">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

const Servicios = () => {
  const whatsappNumber = consultorioInfo.telefono.replace(/[^0-9]/g, '');

  return (
    <div className="servicios-container">
      <section className="servicios-header">
        <div className="section-container">
          <h1 className="page-title">Nuestros Servicios</h1>
          <p className="page-subtitle">
            Ofrecemos una amplia gama de tratamientos odontológicos para cuidar tu salud bucal
          </p>
        </div>
      </section>

      <section className="servicios-grid-section">
        <div className="section-container">
          <div className="servicios-grid">
            {serviciosData.map((servicio) => (
              <div key={servicio.id} className="servicio-card">
                <div className="servicio-icon-container">
                  {renderServiceIcon(servicio.nombre)}
                </div>
                
                <div className="servicio-content">
                  <h3 className="servicio-nombre">{servicio.nombre}</h3>
                  <p className="servicio-descripcion">{servicio.descripcion}</p>
                  
                  <div className="servicio-detalles">
                    <div className="detalle-item">
                      <span className="detalle-label">Precio:</span>
                      <span className="detalle-valor precio">{servicio.precio}</span>
                    </div>
                    <div className="detalle-item">
                      <span className="detalle-label">Duración:</span>
                      <span className="detalle-valor">{servicio.duracion}</span>
                    </div>
                  </div>
                  
                  <div className="servicio-accion">
                    <Link 
                      to={`/consulta?servicio=${encodeURIComponent(servicio.nombre)}`}
                      className="btn-consulta"
                    >
                      Consultar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-adicional-section">
        <div className="section-container">
          <div className="info-content">
            <h2 className="info-title">¿Necesitas más información?</h2>
            <p className="info-description">
              Nuestro equipo de profesionales está listo para asesorarte sobre el mejor tratamiento 
              para tu caso específico. No dudes en contactarnos para una evaluación personalizada.
            </p>
            
            <div className="info-destacada">
              <div className="info-item">
                <div className="info-icon-container">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon-svg">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3>Diagnóstico Gratuito</h3>
                <p>Primera consulta de evaluación sin costo para ti</p>
              </div>
              <div className="info-item">
                <div className="info-icon-container">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon-svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3>Plan Personalizado</h3>
                <p>Creamos un plan de tratamiento adaptado a tus necesidades</p>
              </div>
              <div className="info-item">
                <div className="info-icon-container">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon-svg">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                </div>
                <h3>Facilidades de Pago</h3>
                <p>Opciones de financiamiento para todos los presupuestos</p>
              </div>
            </div>

            <div className="contact-button-container">
              <Link 
                to="/consulta" 
                className="btn btn-contact-main"
              >
                Agendar Consulta
              </Link>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20odontológicos`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '20px', height: '20px', display: 'block'}}>
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.927 9.927 0 004.93 1.31h.005c5.507 0 9.99-4.478 9.99-9.985C22.002 6.478 17.519 2 12.012 2zm5.727 14.047c-.247.697-1.204 1.285-1.654 1.342-.45.057-.899.278-2.905-.536-2.008-.813-3.292-2.845-3.392-2.979-.1-.135-.83-1.102-.83-2.102 0-1.002.524-1.495.711-1.702.187-.207.41-.258.547-.258.137 0 .274.002.393.007.126.006.297-.048.465.362.172.418.587 1.432.637 1.536.05.103.084.224.015.362-.069.138-.103.224-.207.344-.103.12-.218.27-.31.37a2.808 2.808 0 00-.638.79c.172.302.766 1.265 1.644 2.042.879.778 1.62 1.018 1.94 1.155.32.137.503.113.69-.1.188-.214.811-.944 1.026-1.272.215-.328.431-.274.726-.164.296.11 1.874.882 2.195 1.042.32.16.534.238.608.366.074.127.074.726-.173 1.423z"/>
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
