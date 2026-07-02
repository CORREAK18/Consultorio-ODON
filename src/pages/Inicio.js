import React from 'react';
import { Link } from 'react-router-dom';
import { consultorioInfo } from '../data/serviciosData';
import '../styles/Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">
              {consultorioInfo.slogan}
            </p>
            <h1 className="hero-title">
              Bienvenido a {consultorioInfo.nombre}
            </h1>
            <p className="hero-description">
              {consultorioInfo.descripcion}
            </p>
            
            <div className="hero-buttons">
              <Link to="/consulta" className="btn btn-primary">
                Agendar Consulta
              </Link>
              <Link to="/servicios" className="btn btn-secondary">
                Ver Servicios
              </Link>
            </div>
          </div>
          
          <div className="hero-image scale-in">
            <div className="consultorio-image floating">
              <img 
                src="/clinic-hero.png" 
                alt="Consultorio Dental ODON" 
                className="hero-real-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="compromiso-section">
        <div className="section-container compromiso-content">
          <h2 className="section-title">Nuestro Compromiso</h2>
          <p className="compromiso-description">
            {consultorioInfo.compromiso}
          </p>
          
          <div className="valores-grid">
            <div className="valor-card">
              <div className="valor-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="valor-icon-svg">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Excelencia</h3>
              <p>Brindamos tratamientos de la más alta calidad con tecnología moderna</p>
            </div>
            
            <div className="valor-card">
              <div className="valor-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="valor-icon-svg">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Calidez</h3>
              <p>Atención personalizada con el trato humano que mereces</p>
            </div>
            
            <div className="valor-card">
              <div className="valor-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="valor-icon-svg">
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                </svg>
              </div>
              <h3>Innovación</h3>
              <p>Utilizamos las técnicas más avanzadas en odontología moderna</p>
            </div>
            
            <div className="valor-card">
              <div className="valor-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="valor-icon-svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Confianza</h3>
              <p>Tu salud bucal está en las mejores manos profesionales</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-rapida-section">
        <div className="section-container">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <div className="beneficios-grid">
            <div className="beneficio-card">
              <div className="beneficio-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="beneficio-icon-svg">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Horarios Flexibles</h3>
              <p>Atención de lunes a sábado con horarios que se adaptan a tu rutina diaria</p>
            </div>
            
            <div className="beneficio-card">
              <div className="beneficio-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="beneficio-icon-svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Profesionales Certificados</h3>
              <p>Equipo de odontólogos con amplia experiencia y formación continua internacional</p>
            </div>
            
            <div className="beneficio-card">
              <div className="beneficio-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="beneficio-icon-svg">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Precios Accesibles</h3>
              <p>Tratamientos de calidad a precios justos con facilidades de financiamiento</p>
            </div>
            
            <div className="beneficio-card">
              <div className="beneficio-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="beneficio-icon-svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>Fácil Contacto</h3>
              <p>Agenda tu consulta médica rápidamente a través de nuestro WhatsApp oficial</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2>¿Listo para cuidar tu sonrisa?</h2>
            <p>Agenda tu consulta hoy mismo y comienza el camino hacia una sonrisa sana y perfecta.</p>
            <Link to="/consulta" className="btn btn-cta">
              Agendar Consulta Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
