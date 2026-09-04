import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Home';
import Explore from './Explore';
import Nebulosas from './Nebulosas';
import Sobre from './Sobre';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/nebulosas" element={<Nebulosas />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;