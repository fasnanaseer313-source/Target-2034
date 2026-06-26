import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './sections.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-particles"></div>
      <div className="container hero-container">
        
        {/* Left Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your Investment Journey Towards 2034
          </motion.div>
          
          <h1 className="heading-xl">
            Personalized <br />
            <span className="text-gold">Mutual Fund</span> <br />
            Investing
          </h1>
          
          <p className="hero-subtitle">
            Investment strategies designed around your financial goals.
          </p>
          
          <ul className="hero-features">
            <li>AI-assisted planning</li>
            <li>Professional research</li>
            <li>Long-term wealth creation</li>
            <li>Disciplined investing</li>
          </ul>
          
          <div className="hero-actions">
            <Button variant="primary" icon={true}>Explore Products</Button>
            <Button variant="secondary">Start Investing</Button>
          </div>
        </motion.div>

        {/* Right Content - 3D Phone and Floating Elements */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="floating-phone-container">
            {/* Phone Mockup using CSS */}
            <motion.div 
              className="phone-mockup"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="phone-screen">
                <div className="app-header">Target 2034</div>
                <div className="app-portfolio-val">₹1.2 Crore</div>
                <div className="app-chart">
                  {/* CSS Chart */}
                  <svg viewBox="0 0 100 50" className="growth-line">
                    <motion.path 
                      d="M0,50 Q25,40 50,30 T100,0" 
                      fill="none" 
                      stroke="var(--color-gold)" 
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Icons */}
            <motion.div className="float-icon icon-1" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}>📈</motion.div>
            <motion.div className="float-icon icon-2" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }}>🛡️</motion.div>
            <motion.div className="float-icon icon-3" animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.2 }}>₹</motion.div>
            <motion.div className="float-icon icon-4" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4.5, delay: 0.8 }}>🎯</motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
