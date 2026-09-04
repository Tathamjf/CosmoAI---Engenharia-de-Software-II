import { Link } from 'react-router-dom';
import './Home.css';

export function Index() {
  return (
    <div className="home-container">
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
}

export default Index;