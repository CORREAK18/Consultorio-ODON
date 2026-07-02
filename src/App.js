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
        <Header />
        <Menu />
        <main className="main-content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
