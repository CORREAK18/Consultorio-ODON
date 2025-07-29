// Componente principal de la aplicación
// Configura el enrutador y estructura general de la página
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Encabezado de la página con logo y contacto */}
        <Header />
        
        {/* Menú de navegación independiente */}
        <Menu />
        
        {/* Contenido principal con rutas */}
        <main className="main-content">
          <AppRoutes />
        </main>
        
        {/* Pie de página con información de contacto */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
