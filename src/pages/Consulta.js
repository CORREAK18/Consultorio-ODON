import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { serviciosData, consultorioInfo } from '../data/serviciosData';
import '../styles/Consulta.css';

const Consulta = () => {
  const [formData, setFormData] = useState({
    numero: '',
    nombre: '',
    apellidos: '',
    tipoConsulta: ''
  });

  const [errors, setErrors] = useState({});
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const servicioParam = urlParams.get('servicio');
    if (servicioParam) {
      setFormData(prev => ({
        ...prev,
        tipoConsulta: servicioParam
      }));
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.numero.trim()) {
      newErrors.numero = 'El número de teléfono es obligatorio';
    } else if (!/^\+?[\d\s()-]{8,15}$/.test(formData.numero.trim())) {
      newErrors.numero = 'Ingrese un número de teléfono válido';
    }

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.apellidos.trim()) {
      newErrors.apellidos = 'Los apellidos son obligatorios';
    } else if (formData.apellidos.trim().length < 2) {
      newErrors.apellidos = 'Los apellidos deben tener al menos 2 caracteres';
    }

    if (!formData.tipoConsulta) {
      newErrors.tipoConsulta = 'Debe seleccionar un tipo de consulta';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const mensaje = `
🦷 *Nueva Consulta - Consultorio ODON*

👤 *Datos del Paciente:*
• Nombre: ${formData.nombre} ${formData.apellidos}
• Teléfono: ${formData.numero}
• Tipo de consulta: ${formData.tipoConsulta}

📅 Solicito agendar una cita para el servicio seleccionado.

¡Gracias por su atención!
    `.trim();

    const mensajeCodificado = encodeURIComponent(mensaje);
    const numeroWhatsApp = consultorioInfo.telefono.replace(/[^0-9]/g, '');
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    window.open(urlWhatsApp, '_blank');
    
    setFormData({
      numero: '',
      nombre: '',
      apellidos: '',
      tipoConsulta: ''
    });
    
    alert('Redirigiendo a WhatsApp para enviar tu consulta...');
  };

  return (
    <div className="consulta-container">
      <section className="consulta-header">
        <div className="section-container">
          <h1 className="page-title">Agendar Consulta</h1>
          <p className="page-subtitle">
            Completa el formulario y nos pondremos en contacto contigo vía WhatsApp
          </p>
        </div>
      </section>

      <section className="formulario-section">
        <div className="section-container">
          <div className="formulario-wrapper">
            <div className="formulario-content">
              <div className="form-header">
                <div className="form-icon-container">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="form-icon-svg">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <path d="M9 14h6" />
                    <path d="M9 18h6" />
                    <path d="M9 10h6" />
                  </svg>
                </div>
                <h2>Datos para la Consulta</h2>
                <p>Proporciona tus datos y el tipo de consulta que necesitas</p>
              </div>

              <form onSubmit={handleSubmit} className="consulta-form">
                <div className="form-group">
                  <label htmlFor="numero" className="form-label">
                    Número de Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="numero"
                    name="numero"
                    value={formData.numero}
                    onChange={handleInputChange}
                    placeholder="Ej: +51 987 654 321"
                    className={`form-input ${errors.numero ? 'error' : ''}`}
                  />
                  {errors.numero && (
                    <span className="error-message">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="error-icon-svg">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      {errors.numero}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="nombre" className="form-label">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    className={`form-input ${errors.nombre ? 'error' : ''}`}
                  />
                  {errors.nombre && (
                    <span className="error-message">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="error-icon-svg">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      {errors.nombre}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="apellidos" className="form-label">
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    placeholder="Tus apellidos"
                    className={`form-input ${errors.apellidos ? 'error' : ''}`}
                  />
                  {errors.apellidos && (
                    <span className="error-message">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="error-icon-svg">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      {errors.apellidos}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="tipoConsulta" className="form-label">
                    Tipo de Consulta *
                  </label>
                  <select
                    id="tipoConsulta"
                    name="tipoConsulta"
                    value={formData.tipoConsulta}
                    onChange={handleInputChange}
                    className={`form-select ${errors.tipoConsulta ? 'error' : ''}`}
                  >
                    <option value="">Selecciona un servicio...</option>
                    {serviciosData.map((servicio) => (
                      <option key={servicio.id} value={servicio.nombre}>
                        {servicio.nombre}
                      </option>
                    ))}
                  </select>
                  {errors.tipoConsulta && (
                    <span className="error-message">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="error-icon-svg">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      {errors.tipoConsulta}
                    </span>
                  )}
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn-submit">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="btn-submit-icon">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.927 9.927 0 004.93 1.31h.005c5.507 0 9.99-4.478 9.99-9.985C22.002 6.478 17.519 2 12.012 2zm5.727 14.047c-.247.697-1.204 1.285-1.654 1.342-.45.057-.899.278-2.905-.536-2.008-.813-3.292-2.845-3.392-2.979-.1-.135-.83-1.102-.83-2.102 0-1.002.524-1.495.711-1.702.187-.207.41-.258.547-.258.137 0 .274.002.393.007.126.006.297-.048.465.362.172.418.587 1.432.637 1.536.05.103.084.224.015.362-.069.138-.103.224-.207.344-.103.12-.218.27-.31.37a2.808 2.808 0 00-.638.79c.172.302.766 1.265 1.644 2.042.879.778 1.62 1.018 1.94 1.155.32.137.503.113.69-.1.188-.214.811-.944 1.026-1.272.215-.328.431-.274.726-.164.296.11 1.874.882 2.195 1.042.32.16.534.238.608.366.074.127.074.726-.173 1.423z"/>
                    </svg>
                    Enviar Consulta por WhatsApp
                  </button>
                </div>
              </form>
            </div>

            <div className="info-adicional">
              <div className="info-card">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="info-card-icon-svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Información de Contacto
                </h3>
                <div className="contact-details">
                  <p>
                    <strong>Teléfono</strong> 
                    <span>{consultorioInfo.telefono}</span>
                  </p>
                  <p>
                    <strong>Email</strong> 
                    <span>{consultorioInfo.email}</span>
                  </p>
                  <p>
                    <strong>Dirección</strong> 
                    <span>{consultorioInfo.direccion}</span>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="info-card-icon-svg">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Horarios de Atención
                </h3>
                <div className="horarios-list">
                  <p><strong>Lunes - Jueves</strong> <span>{consultorioInfo.horarios.lunes}</span></p>
                  <p><strong>Viernes</strong> <span>{consultorioInfo.horarios.viernes}</span></p>
                  <p><strong>Sábado</strong> <span>{consultorioInfo.horarios.sabado}</span></p>
                  <p><strong>Domingo</strong> <span>{consultorioInfo.horarios.domingo}</span></p>
                </div>
              </div>

              <div className="info-card">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="info-card-icon-svg">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  Información Importante
                </h3>
                <ul className="info-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-list-check-svg">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    La primera consulta incluye evaluación gratuita
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-list-check-svg">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Confirmaremos tu cita vía WhatsApp
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-list-check-svg">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Puedes cancelar o reprogramar con 24h de anticipación
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-list-check-svg">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Aceptamos diversas formas de pago y financiamiento
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulta;
