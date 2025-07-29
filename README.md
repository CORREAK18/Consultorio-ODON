# Consultorio ODON - Landing Page

Una landing page moderna y dinámica para un consultorio de odontología, desarrollada con React y componentes modulares.

## 🦷 Características

- **Diseño Responsive**: Adaptable a todos los dispositivos (móviles, tablets, escritorio)
- **Componentes Modulares**: Arquitectura limpia separada por componentes reutilizables
- **Navegación Dinámica**: Sistema de rutas con React Router
- **Formulario Integrado**: Envío de consultas directamente a WhatsApp
- **Tarjetas de Servicios**: Presentación visual atractiva de todos los servicios
- **Animaciones Suaves**: Transiciones y efectos visuales modernos

## 📁 Estructura del Proyecto

```
Consultorio-ODON/
├── public/
│   ├── index.html          # Archivo HTML principal
│   └── manifest.json       # Configuración PWA
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Header.js       # Navegación principal
│   │   └── Footer.js       # Pie de página
│   ├── pages/              # Páginas principales
│   │   ├── Inicio.js       # Página de inicio
│   │   ├── Servicios.js    # Página de servicios
│   │   └── Consulta.js     # Página de formulario
│   ├── routes/             # Configuración de rutas
│   │   └── AppRoutes.js    # Definición de rutas
│   ├── data/               # Datos de la aplicación
│   │   └── serviciosData.js # Información de servicios
│   ├── styles/             # Archivos CSS
│   │   ├── index.css       # Estilos globales
│   │   ├── App.css         # Estilos del componente principal
│   │   ├── Header.css      # Estilos del header
│   │   ├── Footer.css      # Estilos del footer
│   │   ├── Inicio.css      # Estilos de la página inicio
│   │   ├── Servicios.css   # Estilos de la página servicios
│   │   └── Consulta.css    # Estilos de la página consulta
│   ├── App.js              # Componente principal
│   └── index.js            # Punto de entrada
├── package.json            # Dependencias y scripts
└── README.md               # Documentación
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/CORREAK18/Consultorio-ODON.git
   cd Consultorio-ODON
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar WhatsApp**
   - Abrir `src/data/serviciosData.js`
   - Cambiar el número de teléfono en `consultorioInfo.telefono`
   - Formato: "+1234567890" (incluir código de país)

4. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```
   La aplicación se abrirá en `http://localhost:3000`

5. **Construir para producción**
   ```bash
   npm run build
   ```

## 📱 Páginas y Funcionalidades

### 🏠 Página de Inicio (`/`)
- **Hero Section**: Imagen del consultorio y mensaje de bienvenida
- **Compromiso**: Información sobre los valores del consultorio  
- **Beneficios**: Por qué elegir este consultorio
- **Call to Action**: Botones para agendar consulta

### 🦷 Página de Servicios (`/servicios`)
- **Grid de Servicios**: Tarjetas con todos los servicios disponibles
- **Información Detallada**: Precio, duración y descripción por servicio
- **Botones de Consulta**: Enlaces directos al formulario
- **Información Adicional**: Beneficios y facilidades de pago

### 📋 Página de Consulta (`/consulta`)
- **Formulario Completo**: Campos para datos del paciente
- **Lista Desplegable**: Selección de tipo de consulta/servicio
- **Validación**: Validación en tiempo real de campos
- **Envío a WhatsApp**: Mensaje automático con todos los datos
- **Información de Contacto**: Horarios y datos del consultorio

## ⚙️ Personalización

### Cambiar Información del Consultorio
Editar el archivo `src/data/serviciosData.js`:

```javascript
export const consultorioInfo = {
  nombre: "Tu Consultorio",
  telefono: "+1234567890", // Tu número de WhatsApp
  direccion: "Tu dirección",
  email: "tu@email.com",
  // ... otros campos
};
```

### Modificar Servicios
En el mismo archivo, editar el array `serviciosData`:

```javascript
export const serviciosData = [
  {
    id: 1,
    nombre: "Nuevo Servicio",
    descripcion: "Descripción del servicio",
    precio: "Desde $100",
    duracion: "60 min",
    icono: "🦷"
  },
  // ... más servicios
];
```

### Personalizar Estilos
Los archivos CSS utilizan variables CSS para fácil personalización:

```css
:root {
  --color-primary: #2563eb;      /* Color principal */
  --color-secondary: #06b6d4;    /* Color secundario */
  --color-accent: #f59e0b;       /* Color de acento */
  /* ... más variables */
}
```

### Cambiar Imagen del Consultorio
Reemplazar el placeholder en `src/pages/Inicio.js`:

```jsx
<div className="image-placeholder">
  {/* Reemplazar con tu imagen */}
  <img src="/path/to/your/image.jpg" alt="Consultorio" />
</div>
```

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework principal
- **React Router DOM**: Navegación entre páginas
- **CSS3**: Estilos con variables CSS y flexbox/grid
- **JavaScript ES6+**: Lógica de la aplicación
- **WhatsApp API**: Integración para envío de mensajes

## 📱 Funcionalidad de WhatsApp

El formulario de consulta envía automáticamente un mensaje estructurado a WhatsApp con:
- Datos del paciente (nombre, apellidos, teléfono)
- Tipo de consulta seleccionado
- Mensaje formateado profesionalmente

### Formato del mensaje:
```
🦷 Nueva Consulta - Consultorio ODON

👤 Datos del Paciente:
• Nombre: [Nombre Apellidos]
• Teléfono: [Número]
• Tipo de consulta: [Servicio seleccionado]

📅 Solicito agendar una cita para el servicio seleccionado.

¡Gracias por su atención!
```

## 🎨 Características de Diseño

- **Paleta de Colores**: Azul profesional con acentos en turquesa y dorado
- **Tipografía**: Segoe UI para máxima legibilidad
- **Iconos**: Emojis para mejor accesibilidad visual
- **Animaciones**: Entrada suave de elementos
- **Responsive**: Diseño mobile-first

## 🔧 Scripts Disponibles

- `npm start`: Ejecutar en modo desarrollo
- `npm run build`: Construir para producción
- `npm test`: Ejecutar pruebas
- `npm run eject`: Exponer configuración (irreversible)

## 📞 Soporte

Para soporte técnico o preguntas sobre la implementación, contactar al desarrollador.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

**Desarrollado con ❤️ para Consultorio ODON**
