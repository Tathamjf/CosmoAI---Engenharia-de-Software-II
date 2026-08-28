import React from 'react';
import './Home.css';

export function Index() {
  return (
    <div className="home-container">
      {/* Navbar Header */}
      <header className="navbar">
        <div className="logo">CosmoAI</div>
        <nav className="nav-links">
          <a href="#ia-no-espaco">IA no Espaço</a>
          <a href="#o-que-ver">O Que Ver no Céu</a>
          <a href="#sobre">Sobre</a>
          <button className="btn-explore">Explore!</button>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Explore como a IA<br />
            está desvendando<br />
            o universo
          </h1>

          <div className="hero-card">
            <p>
              O universo está sendo observado, mapeado e compreendido em uma
              escala nunca antes possível — e a Inteligência Artificial é uma
              das principais razões disso. Explore como algoritmos estão
              ajudando a decifrar os mistérios do cosmos.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;