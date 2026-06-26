import React from 'react';
import { Mail } from 'lucide-react';
import './components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <span>TARGET</span>
              <span className="text-gold">2034</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '16px', maxWidth: '280px' }}>
              Your personalized journey to long-term wealth creation, backed by intelligent models and professional research.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#philosophy">Investment Philosophy</a></li>
              <li><a href="#products">Mutual Fund Products</a></li>
              <li><a href="#faq">FAQ</a></li>
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
            </ul>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <a href="#li" style={{ color: 'white' }}>LinkedIn</a>
              <a href="#tw" style={{ color: 'white' }}>Twitter</a>
              <a href="#fb" style={{ color: 'white' }}>Facebook</a>
              <a href="#mail" style={{ color: 'white' }}><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Target 2034. All rights reserved.</p>
          <p>Not a trading platform. Mutual fund investments are subject to market risks.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
