# Consultorio ODON - Sitio Web Profesional

Una plataforma web moderna, rápida y de alto rendimiento para el contacto directo entre pacientes y profesionales de la salud bucal. Desarrollada con React 18, componentes modulares y un diseño visual premium.

## 🦷 Características Principales

- **Diseño Premium y Moderno**: Paleta de colores armoniosa basada en tonos azul zafiro, verde menta médico y acentos dorados, con tipografías sofisticadas (**Outfit** para títulos y **Plus Jakarta Sans** para cuerpo de texto).
- **Animaciones Fluidas**: Efectos de entrada suaves (`fadeInUp`, `slideInLeft`, `slideInRight`), micro-interacciones al pasar el cursor y animaciones flotantes tridimensionales en imágenes clave.
- **Navegación Instantánea (Frictionless UX)**: Implementación completa de React Router Link que elimina las recargas de página tradicionales, brindando una experiencia fluida de aplicación de una sola página (SPA).
- **Iconografía Vectorial (SVG)**: Iconos SVG en línea diseñados a medida para cada servicio y dato de contacto en lugar de emojis estándar.
- **Formulario Integrado con WhatsApp**: Captura de datos de paciente y servicio con validación en tiempo real para generar un mensaje profesional preformateado directo al chat del consultorio.
- **Diseño 100% Responsivo**: Layout optimizado para una visualización excelente en dispositivos móviles, tablets y ordenadores de escritorio.

## 📁 Estructura del Proyecto

```
Consultorio-ODON/
├── public/
│   ├── index.html            # Plantilla HTML principal
│   ├── clinic-hero.png       # Imagen de cabecera fotorrealista
│   └── manifest.json         # Configuración del manifiesto web
├── src/
│   ├── components/           # Componentes modulares
│   │   ├── Header.js         # Cabecera con logo SVG y contacto
│   │   ├── Menu.js           # Menú de navegación móvil y desktop
│   │   └── Footer.js         # Pie de página con accesos rápidos y horarios
│   ├── pages/                # Vistas de la aplicación
│   │   ├── Inicio.js         # Landing page principal
│   │   ├── Servicios.js      # Catálogo e información de tratamientos
│   │   └── Consulta.js       # Formulario y datos detallados de contacto
│   ├── routes/               # Enrutamiento de la aplicación
│   │   └── AppRoutes.js      # Definición de rutas
│   ├── data/                 # Datos del negocio
│   │   └── serviciosData.js   # Datos de contacto y servicios
│   ├── styles/               # Hojas de estilo modulares
│   │   ├── index.css         # Reset y sistema de diseño global
│   │   ├── App.css           # Estructura del layout y animaciones clave
│   │   ├── Header.css        # Estilos de cabecera
│   │   ├── Menu.css          # Estilos de la barra de navegación
│   │   ├── Footer.css        # Estilos del pie de página
│   │   ├── Inicio.css        # Estilos de la landing page
│   │   ├── Servicios.css     # Estilos de la sección de servicios
│   │   └── Consulta.css      # Estilos del formulario de contacto
│   ├── App.js                # Componente raíz
│   └── index.js              # Punto de entrada de React
├── package.json              # Dependencias y scripts del proyecto
└── README.md                 # Documentación
```

## 🚀 Instalación y Uso Local

### Prerrequisitos
- Node.js (versión 16 o superior recomendado)
- npm

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/CORREAK18/Consultorio-ODON.git
   cd Consultorio-ODON
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo de desarrollo**
   ```bash
   npm start
   ```
   La aplicación se abrirá automáticamente en `http://localhost:3000`.

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Desplegar a producción (GitHub Pages)**
   ```bash
   npm run deploy
   ```

## ⚙️ Personalización

### Cambiar Datos del Consultorio y Servicios
Toda la información del negocio se administra desde `src/data/serviciosData.js`:

- **Información de Contacto**: Modifica el objeto `consultorioInfo` para cambiar el teléfono (WhatsApp), dirección, correo y horarios:
  ```javascript
  export const consultorioInfo = {
    nombre: "Consultorio ODON",
    slogan: "Tu sonrisa es nuestra prioridad",
    telefono: "+51 987 654 321", // Número oficial
    direccion: "Av. Larco 456, Miraflores, Lima, Perú",
    email: "contacto@consultorioodon.com",
    horarios: { ... }
  };
  ```

- **Agregar o Editar Servicios**: Modifica los elementos del array `serviciosData` para actualizar precios, nombres de servicios o duración:
  ```javascript
  export const serviciosData = [
    {
      id: 1,
      nombre: "Limpieza Dental",
      descripcion: "Limpieza profunda y eliminación de sarro...",
      precio: "Desde $50",
      duracion: "45 min"
    },
    // ... más servicios
  ];
  ```

## 🛠️ Tecnologías Utilizadas

- **React 18** (Librería de interfaces)
- **React Router DOM 6** (Gestión de enrutado fluido de SPA)
- **CSS3 y Flexbox/Grid** (Diseño visual y responsivo sin librerías pesadas)
- **WhatsApp Web API** (Canal directo para el agendamiento instantáneo)
- **Google Fonts** (Fuentes Outfit y Plus Jakarta Sans)

---

**Desarrollado para Consultorio ODON**
