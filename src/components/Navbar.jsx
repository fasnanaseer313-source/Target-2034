import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import logoImg from '../assets/logo.png';

const WhatsAppIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.065-.301-.15-1.265-.462-2.406-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.295-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.295-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M11.996 22a9.96 9.96 0 0 1-5.075-1.385l-5.32 1.395 1.424-5.185A9.957 9.957 0 0 1 2.006 12C2.006 6.477 6.48 2 12 2s9.994 4.477 9.994 10-4.476 10-9.998 10z"/>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (window.innerWidth <= 768) {
        const videoElement = document.querySelector('.hero-main-video');
        if (videoElement) {
          const rect = videoElement.getBoundingClientRect();
          // If the video's top is within or above the navbar area (roughly 100px)
          setIsPastHero(rect.top < 120);
        } else {
          // Fallback if video isn't found
          setIsPastHero(window.scrollY > 400);
        }
      } else {
        setIsPastHero(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isPastHero ? 'mobile-transparent' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none', backgroundColor: '#fdfdfd', padding: '0px 8px', borderRadius: '10px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <img src={logoImg} alt="Target 2034" style={{ height: '75px', objectFit: 'contain', transform: 'scale(1.5)' }} />
        </Link>
        
        <div className="navbar-right">
          <Link 
            to="/" 
            className="nav-home-btn"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            HOME
          </Link>
          <a href="https://wa.me/918848288806" target="_blank" rel="noopener noreferrer" className="nav-whatsapp-btn" aria-label="WhatsApp">
            <WhatsAppIcon size={26} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
