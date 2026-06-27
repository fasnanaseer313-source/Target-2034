import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './sections.css';
import heroImg from '../assets/hero.png';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="hero-section">
      <div className="hero-bg-particles bg-grid-pattern"></div>
      <div className="ambient-light-orange" style={{ top: '10%', right: '5%' }}></div>
      <div className="container hero-container">
        
        {/* Left Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="heading-xl">
            Engineered For Serious <br />
            <span className="text-orange highlight-underline">Trader</span> <br />
            Empowered By a High-Performance Trading Community.
          </h1>
          
          <p className="hero-subtitle text-muted">
            Empowering investors with real-time intelligence, market structure clarity and expert-guided execution.
          </p>
          
          <div className="hero-actions">
            <motion.a 
              href="#platform" 
              className="btn-discover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DISCOVER PLATFORM
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Parallax Image & Floating Elements */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className="hero-image-wrapper"
            style={{ y: y1 }}
          >
            <motion.img 
              src={heroImg} 
              alt="Target 2034 Platform" 
              className="hero-main-img"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            
            {/* Floating Mutual Fund Logos (Placeholders / CSS styled) */}
            <motion.div className="float-logo logo-1" style={{ y: y2 }} animate={{ rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
              <div className="logo-placeholder blue"></div>
            </motion.div>
            <motion.div className="float-logo logo-2" style={{ y: y1 }} animate={{ rotate: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
              <div className="logo-placeholder red"></div>
            </motion.div>
            <motion.div className="float-logo logo-3" style={{ y: y2 }} animate={{ rotate: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 3.5 }}>
              <div className="logo-placeholder orange"></div>
            </motion.div>
            
            <div className="image-glow-behind"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
