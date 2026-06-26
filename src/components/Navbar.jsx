import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
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
          <img src={logoImg} alt="Target 2034" style={{ height: '56px' }} />
        </Link>
        
        <div className="navbar-links">
          <a href="/#philosophy" className="nav-link">Philosophy</a>
          <Link to="/products" className="nav-link">Products</Link>
          <a href="/#journey" className="nav-link">Journey</a>
          <a href="/#about" className="nav-link">About Us</a>
        </div>

        <div className="navbar-cta">
          <Button variant="primary">Start Investing</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
