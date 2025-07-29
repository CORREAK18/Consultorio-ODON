// Página de Inicio - Landing principal del consultorio
// Muestra información general, imagen del consultorio y compromiso
import React from 'react';
import { Link } from 'react-router-dom';
import { consultorioInfo } from '../data/serviciosData';
import '../styles/Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio-container">
      {/* Sección Hero - Imagen principal y bienvenida */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Bienvenido a {consultorioInfo.nombre}
            </h1>
            <p className="hero-subtitle">
              {consultorioInfo.slogan}
            </p>
            <p className="hero-description">
              {consultorioInfo.descripcion}
            </p>
            
            {/* Botones de acción */}
            <div className="hero-buttons">
              <Link to="/consulta" className="btn-primary">
                Agendar Consulta
              </Link>
              <Link to="/servicios" className="btn-secondary">
                Ver Servicios
              </Link>
            </div>
          </div>
          
          {/* Imagen del consultorio */}
          <div className="hero-image">
            <div className="consultorio-image">
              {/* Placeholder para imagen del consultorio */}
              <div className="image-placeholder">
                <div className="image-icon">🏥</div>
                <p>Imagen del Consultorio</p>
                <small>Reemplazar con imagen real</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Compromiso */}
      <section className="compromiso-section">
        <div className="section-container">
          <h2 className="section-title">Nuestro Compromiso</h2>
          <div className="compromiso-content">
            <div className="compromiso-text">
              <p className="compromiso-description">
                {consultorioInfo.compromiso}
              </p>
              
              {/* Valores del consultorio */}
              <div className="valores-grid">
                <div className="valor-item">
                  <div className="valor-icon">🎯</div>
                  <h3>Excelencia</h3>
                  <p>Brindamos tratamientos de la más alta calidad con tecnología moderna</p>
                </div>
                <div className="valor-item">
                  <div className="valor-icon">❤️</div>
                  <h3>Calidez</h3>
                  <p>Atención personalizada con el trato humano que mereces</p>
                </div>
                <div className="valor-item">
                  <div className="valor-icon">🔬</div>
                  <h3>Innovación</h3>
                  <p>Utilizamos las técnicas más avanzadas en odontología</p>
                </div>
                <div className="valor-item">
                  <div className="valor-icon">🛡️</div>
                  <h3>Confianza</h3>
                  <p>Tu salud bucal está en las mejores manos profesionales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Información Rápida */}
      <section className="info-rapida-section">
        <div className="section-container">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <div className="beneficios-grid">
            <div className="beneficio-item">
              <div className="beneficio-icon">⏰</div>
              <h3>Horarios Flexibles</h3>
              <p>Atención de lunes a sábado con horarios que se adaptan a tu rutina</p>
            </div>
            <div className="beneficio-item">
              <div className="beneficio-icon">🎓</div>
              <h3>Profesionales Certificados</h3>
              <p>Equipo de odontólogos con amplia experiencia y formación continua</p>
            </div>
            <div className="beneficio-item">
              <div className="beneficio-icon">💰</div>
              <h3>Precios Accesibles</h3>
              <p>Tratamientos de calidad a precios justos y planes de financiamiento</p>
            </div>
            <div className="beneficio-item">
              <div className="beneficio-icon">📱</div>
              <h3>Fácil Contacto</h3>
              <p>Agenda tu cita por WhatsApp de manera rápida y sencilla</p>
            </div>
          </div>
        </div>
      </section>

      {/* Llamada a la acción final */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2>¿Listo para cuidar tu sonrisa?</h2>
            <p>No esperes más, agenda tu consulta hoy mismo y comienza el camino hacia una sonrisa perfecta</p>
            <Link to="/consulta" className="btn-cta">
              Agendar Consulta Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
