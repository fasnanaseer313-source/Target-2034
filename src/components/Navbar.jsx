import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import './components.css';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          <img src={logoImg} alt="Target 2034" style={{ height: '50px', objectFit: 'contain' }} />
        </Link>
        
        <div className="navbar-right">
          <Link to="/" className="nav-home-btn">HOME</Link>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="nav-whatsapp-btn" aria-label="WhatsApp">
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
