import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PageLayout } from './PageLayout';
import './Nebulosas.css';

export const Nebulosas: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="nebulosas-container">
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

        {/* Hero Content */}
        <main className="nebulosas-hero">
          <div className="nebulosas-content">
            <h1 className="nebulosas-title">Nebulosas</h1>

            <p className="nebulosas-description">
              Nebulosas são imensas nuvens de gás (principalmente hidrogênio e hélio) 
              e poeira espalhadas pelo espaço. Elas funcionam tanto como "berçários" 
              onde novas estrelas nascem, quanto como os "restos" de estrelas antigas que explodiram.
            </p>

            <div className="nebulosas-card">
              <h3>Os 3 Tipos Principais de Nebulosas:</h3>
              <ul>
                <li>
                  <strong>Nebulosas de Emissão (Berçários Estelares):</strong> O gás brilha com luz própria porque é aquecido por estrelas jovens e quentes que nasceram no seu interior.
                </li>
                <li>
                  <strong>Nebulosas de Reflexão:</strong> Não possuem luz própria; elas apenas refletem a luz das estrelas azuis e brilhantes ao seu redor (parecem nuvens iluminadas por holofotes).
                </li>
                <li>
                  <strong>Nebulosas Planetárias (Restos de Estrelas):</strong> Não têm nada a ver com planetas! São as camadas externas de gás expelidas por uma estrela parecida com o nosso Sol no final da sua vida.
                </li>
              </ul>
            </div>
          </div>

          {/* Seta para Próxima Página */}
          <button 
            className="next-item-btn"
            onClick={() => navigate('/nebulosa-orion')}
          >
            <span>Nebulosa de Órion</span>
            <span className="chevron-right">&#10095;</span>
          </button>
        </main>
      </div>
    </PageLayout>
  );
};

export default Nebulosas;