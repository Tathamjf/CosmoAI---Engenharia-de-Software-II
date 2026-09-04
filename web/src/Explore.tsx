import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Explore.css';

export const Explore: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="explore-container">
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

      <main className="explore-grid">
        {/* Card Nebulosas leva para /nebulosas */}
        <section 
          className="explore-card card-nebulosas"
          onClick={() => navigate('/nebulosas')}
        >
          <div className="card-content">
            <h2>Nebulosas</h2>
            <div className="chevron-icon" aria-hidden="true">
              &#10095;
            </div>
          </div>
        </section>

        {/* Card Sistema Solar */}
        <section 
          className="explore-card card-sistema-solar"
          onClick={() => navigate('/sistema-solar')}
        >
          <div className="card-content">
            <h2>Sistema Solar</h2>
            <div className="chevron-icon" aria-hidden="true">
              &#10095;
            </div>
          </div>
        </section>

        {/* Card Estrelas */}
        <section 
          className="explore-card card-estrelas"
          onClick={() => navigate('/estrelas')}
        >
          <div className="card-content">
            <h2>Estrelas</h2>
            <div className="chevron-icon" aria-hidden="true">
              &#10095;
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Explore;