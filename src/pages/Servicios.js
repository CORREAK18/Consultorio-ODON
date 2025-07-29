// Página de Servicios - Muestra todos los servicios en tarjetas
// Cada servicio se presenta en una tarjeta con información detallada
import React from 'react';
import { serviciosData, consultorioInfo } from '../data/serviciosData';
import '../styles/Servicios.css';

const Servicios = () => {
  return (
    <div className="servicios-container">
      {/* Encabezado de la página */}
      <section className="servicios-header">
        <div className="section-container">
          <h1 className="page-title">Nuestros Servicios</h1>
          <p className="page-subtitle">
            Ofrecemos una amplia gama de tratamientos odontológicos para cuidar tu salud bucal
          </p>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="servicios-grid-section">
        <div className="section-container">
          <div className="servicios-grid">
            {serviciosData.map((servicio) => (
              <div key={servicio.id} className="servicio-card">
                {/* Icono del servicio */}
                <div className="servicio-icon">
                  {servicio.icono}
                </div>
                
                {/* Información del servicio */}
                <div className="servicio-content">
                  <h3 className="servicio-nombre">{servicio.nombre}</h3>
                  <p className="servicio-descripcion">{servicio.descripcion}</p>
                  
                  {/* Detalles del servicio */}
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
                  
                  {/* Botón de consulta */}
                  <div className="servicio-accion">
                    <a 
                      href={`/consulta?servicio=${encodeURIComponent(servicio.nombre)}`}
                      className="btn-consulta"
                    >
                      Consultar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de información adicional */}
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
                <div className="info-icon">🔍</div>
                <h3>Diagnóstico Gratuito</h3>
                <p>Primera consulta sin costo para evaluar tu caso</p>
              </div>
              <div className="info-item">
                <div className="info-icon">📋</div>
                <h3>Plan Personalizado</h3>
                <p>Creamos un plan de tratamiento adaptado a tus necesidades</p>
              </div>
              <div className="info-item">
                <div className="info-icon">💳</div>
                <h3>Facilidades de Pago</h3>
                <p>Opciones de financiamiento para todos los presupuestos</p>
              </div>
            </div>

            {/* Botón de contacto */}
            <div className="contact-button-container">
              <a 
                href="/consulta" 
                className="btn-contact-main"
              >
                Agendar Consulta
              </a>
              <a 
                href={`https://wa.me/${consultorioInfo.telefono}?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20odontológicos`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <span className="whatsapp-icon">💬</span>
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
