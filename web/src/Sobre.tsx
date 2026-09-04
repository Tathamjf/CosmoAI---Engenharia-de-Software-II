import React from 'react';
import { Link } from 'react-router-dom';
import './Sobre.css';

export const Sobre: React.FC = () => {
  return (
    <div className="about-container">
      {/* Navbar Header */}
      <header className="navbar">
        <div className="logo">CosmoAI</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/explore">
          <button className="btn-explore">Explore!</button>
          </Link>          
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="about-main">
        <div className="about-content">
          <h1 className="about-title">Conheça CosmoAI</h1>

          <div className="about-section">
            <h2>Nossa missão</h2>
            <p>
              Tornar mais fácil o acesso à astronomia observacional e às
              inovações tecnológicas do setor, traduzindo aplicações complexas
              de Inteligência Artificial e eventos do cosmos em conteúdos
              práticos para pessoas curiosas, sem exigir conhecimento técnico
              prévio
            </p>
          </div>

          <div className="about-section">
            <h2>Quem está por trás do projeto</h2>
            <p>
              Este site é mantido por uma entusiasta de tecnologia e ciência
              espacial
            </p>
          </div>

          <button className="btn-discover">Descobrir mais</button>
        </div>

        <div className="about-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop"
            alt="Telescópio apontado para o céu estrelado"
            className="about-image"
          />
        </div>
      </main>
    </div>
  );
};

export default Sobre;