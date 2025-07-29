// Página de Consulta - Formulario para agendar citas
// Incluye formulario que envía datos por WhatsApp
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { serviciosData, consultorioInfo } from '../data/serviciosData';
import '../styles/Consulta.css';

const Consulta = () => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    numero: '',
    nombre: '',
    apellidos: '',
    tipoConsulta: ''
  });

  // Estado para errores de validación
  const [errors, setErrors] = useState({});
  
  // Hook para obtener parámetros de la URL
  const location = useLocation();

  // Efecto para pre-seleccionar servicio si viene de otra página
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

  // Función para manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario comience a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Función de validación
  const validateForm = () => {
    const newErrors = {};

    // Validar número de teléfono
    if (!formData.numero.trim()) {
      newErrors.numero = 'El número de teléfono es obligatorio';
    } else if (!/^\+?[\d\s\-\(\)]{8,15}$/.test(formData.numero.trim())) {
      newErrors.numero = 'Ingrese un número de teléfono válido';
    }

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar apellidos
    if (!formData.apellidos.trim()) {
      newErrors.apellidos = 'Los apellidos son obligatorios';
    } else if (formData.apellidos.trim().length < 2) {
      newErrors.apellidos = 'Los apellidos deben tener al menos 2 caracteres';
    }

    // Validar tipo de consulta
    if (!formData.tipoConsulta) {
      newErrors.tipoConsulta = 'Debe seleccionar un tipo de consulta';
    }

    return newErrors;
  };

  // Función para enviar por WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar formulario
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Crear mensaje para WhatsApp
    const mensaje = `
🦷 *Nueva Consulta - Consultorio ODON*

👤 *Datos del Paciente:*
• Nombre: ${formData.nombre} ${formData.apellidos}
• Teléfono: ${formData.numero}
• Tipo de consulta: ${formData.tipoConsulta}

📅 Solicito agendar una cita para el servicio seleccionado.

¡Gracias por su atención!
    `.trim();

    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Número de WhatsApp del consultorio (sin caracteres especiales)
    const numeroWhatsApp = consultorioInfo.telefono.replace(/[^0-9]/g, '');
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en nueva ventana
    window.open(urlWhatsApp, '_blank');
    
    // Limpiar formulario después del envío
    setFormData({
      numero: '',
      nombre: '',
      apellidos: '',
      tipoConsulta: ''
    });
    
    // Mostrar mensaje de confirmación
    alert('Redirigiendo a WhatsApp para enviar tu consulta...');
  };

  return (
    <div className="consulta-container">
      {/* Encabezado de la página */}
      <section className="consulta-header">
        <div className="section-container">
          <h1 className="page-title">Agendar Consulta</h1>
          <p className="page-subtitle">
            Completa el formulario y nos pondremos en contacto contigo vía WhatsApp
          </p>
        </div>
      </section>

      {/* Formulario de consulta */}
      <section className="formulario-section">
        <div className="section-container">
          <div className="formulario-wrapper">
            <div className="formulario-content">
              <div className="form-header">
                <div className="form-icon">📋</div>
                <h2>Datos para la Consulta</h2>
                <p>Proporciona tus datos y el tipo de consulta que necesitas</p>
              </div>

              <form onSubmit={handleSubmit} className="consulta-form">
                {/* Campo Número de Teléfono */}
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
                    placeholder="Ej: +1234567890"
                    className={`form-input ${errors.numero ? 'error' : ''}`}
                  />
                  {errors.numero && <span className="error-message">{errors.numero}</span>}
                </div>

                {/* Campo Nombre */}
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
                  {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                </div>

                {/* Campo Apellidos */}
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
                  {errors.apellidos && <span className="error-message">{errors.apellidos}</span>}
                </div>

                {/* Campo Tipo de Consulta */}
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
                        {servicio.icono} {servicio.nombre}
                      </option>
                    ))}
                  </select>
                  {errors.tipoConsulta && <span className="error-message">{errors.tipoConsulta}</span>}
                </div>

                {/* Botón de envío */}
                <div className="form-submit">
                  <button type="submit" className="btn-submit">
                    <span className="btn-icon">💬</span>
                    Enviar Consulta por WhatsApp
                  </button>
                </div>
              </form>
            </div>

            {/* Información adicional */}
            <div className="info-adicional">
              <div className="info-card">
                <h3>📞 Información de Contacto</h3>
                <div className="contact-details">
                  <p><strong>Teléfono:</strong> {consultorioInfo.telefono}</p>
                  <p><strong>Email:</strong> {consultorioInfo.email}</p>
                  <p><strong>Dirección:</strong> {consultorioInfo.direccion}</p>
                </div>
              </div>

              <div className="info-card">
                <h3>⏰ Horarios de Atención</h3>
                <div className="horarios-list">
                  <p><strong>Lunes - Jueves:</strong> {consultorioInfo.horarios.lunes}</p>
                  <p><strong>Viernes:</strong> {consultorioInfo.horarios.viernes}</p>
                  <p><strong>Sábado:</strong> {consultorioInfo.horarios.sabado}</p>
                  <p><strong>Domingo:</strong> {consultorioInfo.horarios.domingo}</p>
                </div>
              </div>

              <div className="info-card">
                <h3>ℹ️ Información Importante</h3>
                <ul className="info-list">
                  <li>La primera consulta incluye evaluación gratuita</li>
                  <li>Confirmaremos tu cita vía WhatsApp</li>
                  <li>Puedes cancelar o reprogramar con 24h de anticipación</li>
                  <li>Aceptamos diversas formas de pago</li>
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
