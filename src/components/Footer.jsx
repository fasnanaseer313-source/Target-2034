import React from 'react';
import { Mail } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './components.css';
import logoImg from '../assets/logo.png';

const InstagramIcon = ({ size, className, stroke }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={stroke || "currentColor"} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, path, hash) => {
    e.preventDefault();
    if (location.pathname === path) {
      if (hash) {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path);
      setTimeout(() => {
        if (hash) {
          const el = document.getElementById(hash.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="footer">
      <svg width="0" height="0">
        <linearGradient id="ig-gradient" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#833ab4" />
          <stop offset="50%" stopColor="#fd1d1d" />
          <stop offset="100%" stopColor="#fcb045" />
        </linearGradient>
      </svg>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logoImg} alt="Target 2034" style={{ height: '88px', background: 'white', padding: '6px 12px', borderRadius: '6px' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '16px', maxWidth: '280px' }}>
              Your personalized journey to long-term wealth creation, backed by intelligent models and professional research.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/" onClick={(e) => handleNavClick(e, '/', '')} style={{ cursor: 'pointer' }}>Home</a></li>
              <li><a href="/#philosophy" onClick={(e) => handleNavClick(e, '/', '#philosophy')} style={{ cursor: 'pointer' }}>Investment Philosophy</a></li>
              <li><a href="/products" onClick={(e) => handleNavClick(e, '/products', '')} style={{ cursor: 'pointer' }}>Mutual Fund Products</a></li>
              <li><a href="/#faq" onClick={(e) => handleNavClick(e, '/', '#faq')} style={{ cursor: 'pointer' }}>FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>India Office: CandleBee Pvt Ltd</li>
              <li>UAE Office: CandleBee Trading FZE</li>
              <li>Email: contact@target2034.com</li>
              <li>Phone: <a href="tel:+918848288806" className="contact-link-orange">+91 88482 88806</a></li>
              <li>WhatsApp: <a href="https://wa.me/918848288806" target="_blank" rel="noopener noreferrer" className="contact-link-orange">+91 88482 88806</a></li>
            </ul>
            <div className="footer-socials" style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <a href="#li" style={{ color: 'white' }}>LinkedIn</a>
              <a href="#tw" style={{ color: 'white' }}>Twitter</a>
              <a href="#fb" style={{ color: 'white' }}>Facebook</a>
              <a href="#mail" style={{ color: 'white' }}><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-text">
            <p>&copy; {new Date().getFullYear()} Target 2034. All rights reserved.</p>
            <p>Not a trading platform. Mutual fund investments are subject to market risks.</p>
          </div>
          
          <a
            href="https://www.instagram.com/intellex.web?igsh=MWpvNDQyczFxeWVxbQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="meet-developers-link"
          >
            <span>Meet the Developers</span>
            <InstagramIcon size={24} stroke="url(#ig-gradient)" className="instagram-icon" />
          </a>
          
          <div className="footer-bottom-spacer"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
