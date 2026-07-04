import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PremiumHighlightText from '../components/PremiumHighlightText';
import './sections.css';
import heroImg from '../assets/hero.png';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="hero-section bg-dark">
      {/* Seamless Ambient Light Sweep */}
      <motion.div 
        className="ambient-light-sweep"
        animate={{ x: ['-100%', '200%'], opacity: [0, 0.15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '50%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', transform: 'skewX(-20deg)', pointerEvents: 'none', zIndex: 0 }}
      />
      {/* Subtle Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            zIndex: 0,
            pointerEvents: 'none',
            filter: 'blur(1px)'
          }}
          animate={{
            y: [0, -150 - Math.random() * 100],
            opacity: [0, Math.random() * 0.4 + 0.1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10
          }}
        />
      ))}
      <div className="hero-bg-particles bg-grid-pattern"></div>
      <div className="ambient-light-orange" style={{ top: '10%', right: '5%' }}></div>
      <div className="container hero-container">
        
        {/* Left Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ paddingRight: '20px' }}
        >
          <h1 className="heading-xl" style={{ marginBottom: '32px', fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', lineHeight: '0.9', letterSpacing: '-0.02em', textAlign: 'left', fontWeight: 900 }}>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>WE BUILD YOU</span>
            <span style={{ display: 'block' }}><PremiumHighlightText>PERSONALIZED</PremiumHighlightText></span>
            <span style={{ display: 'block' }}>INVESTING</span>
            <span style={{ display: 'block' }}>PLANS</span>
          </h1>
          
          <p className="hero-subtitle text-muted" style={{ fontSize: '1.15rem', maxWidth: '500px', marginBottom: '40px' }}>
            Based on your priorities, income, and risk. Backed by intelligent models. Reviewed by experts.
          </p>
          
          <div className="hero-actions">
            <motion.a 
              href="#platform" 
              className="btn-secondary"
              style={{ display: 'inline-block', padding: '16px 32px', borderRadius: '8px', fontWeight: '600', border: '1px solid var(--color-orange)', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '1px' }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 122, 0, 0.1)' }}
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
            <motion.video 
              src="/animation.mp4" 
              className="hero-main-video"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: 'auto' }}
            />
            
            <div className="image-glow-behind"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
