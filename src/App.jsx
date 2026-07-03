import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';

import FloatingWhatsApp from './components/FloatingWhatsApp';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  // Prevent scrolling while intro is playing
  useEffect(() => {
    if (!isIntroComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isIntroComplete]);

  return (
    <Router>
      {!isIntroComplete && <IntroAnimation onComplete={() => setIsIntroComplete(true)} />}
      <div className="app-container" style={{ opacity: isIntroComplete ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
