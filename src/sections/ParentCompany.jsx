import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Handshake, Target, Eye, ShieldCheck, Flag, Star, BarChart, Check, Trophy } from 'lucide-react';
import './sections.css';
import LogoOrbitAnimation from '../components/LogoOrbitAnimation';

import missionTargetImg from '../assets/mission_target_3d.png';
import visionFutureImg from '../assets/vision_future_3d.png';
import valuesDiamondImg from '../assets/values_diamond_3d.png';
import goalMountainImg from '../assets/goal_mountain_3d.png';

const ParentCompany = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 1.5 } }
  };

  return (
    <section className="section ecosystem-section bg-dark" id="about">
      <div className="container">
        
        {/* Header */}
        <div className="ecosystem-header text-center announcement-section">
          {/* Floating Icons */}
          <motion.div className="floating-icon icon-star" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
            <Star size={24} fill="#fbbf24" stroke="none" />
          </motion.div>
          <motion.div className="floating-icon icon-chart" animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
            <BarChart size={24} color="#94a3b8" />
          </motion.div>
          <motion.div className="floating-icon icon-trophy" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}>
            <Trophy size={28} fill="#9a3412" stroke="none" />
          </motion.div>

          <div className="pill-badge announcement-badge">
            <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: '#fbbf24', borderRadius: '50%', display: 'inline-block' }}></span> Partnership Announcement · 2024
          </div>
          
          <motion.h2 className="announcement-title" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            <div className="text-white">TOGETHER,</div>
            <div className="text-gold">BUILDING</div>
            <div className="text-white">TOMORROW</div>
          </motion.h2>
          
          <div className="announcement-divider"></div>

          <motion.p className="announcement-subtitle" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2}}>
            Two Strong Foundations. One Shared Vision.
          </motion.p>
        </div>

        {/* Diagram */}
        <div className="diagram-container" ref={ref}>
          <div className="diagram-top">
            
            <motion.div 
              className="company-node card-dark" 
              style={{ borderColor: 'rgba(251,191,36,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
              whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(251,191,36,0.15)' }}
            >
              <div className="country-pill pill-gold">INDIA</div>
              <LogoOrbitAnimation>
                <div className="company-logo-wrapper">
                  <img src="/logo1.jpeg" alt="Candle Bee Pvt Ltd Logo" />
                </div>
              </LogoOrbitAnimation>
              <div className="company-info text-center mt-4">
                <h3 className="text-white font-bold text-xl mb-1">CandleBee</h3>
                <p className="text-gold font-bold text-sm tracking-wider">PVT LTD</p>
              </div>
            </motion.div>

            <motion.div 
              className="handshake-animated-container"
              initial={{ scale: 0 }}
              animate={controls}
              variants={{ visible: { scale: 1, transition: { delay: 0.6, type: 'spring' } } }}
            >
              <div className="pulse-ring pulse-ring-1"></div>
              <div className="pulse-ring pulse-ring-2"></div>
              <div className="pulse-ring pulse-ring-3"></div>
              <span className="handshake-emoji">🤝</span>
            </motion.div>

            <motion.div 
              className="company-node card-dark" 
              style={{ borderColor: 'rgba(16,185,129,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } } }}
              whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(16,185,129,0.15)' }}
            >
              <div className="country-pill pill-green-dark">UAE</div>
              <LogoOrbitAnimation
                icons={[
                  { icon: '🌿', angleOffset: 45, duration: 9, direction: -1, floatOffset: 7 },
                  { icon: '🍯', angleOffset: 160, duration: 11, direction: 1, floatOffset: -6 },
                  { icon: '✨', angleOffset: 280, duration: 8, direction: 1, floatOffset: 5 },
                  { icon: '💛', angleOffset: 340, duration: 10, direction: -1, floatOffset: -5 },
                ]}
              >
                <div className="company-logo-wrapper">
                  <img src="/logo2.jpeg" alt="Candle Bee Trading FZE Logo" />
                </div>
              </LogoOrbitAnimation>
              <div className="company-info text-center mt-4">
                <h3 className="text-white font-bold text-xl mb-1">CandleBee</h3>
                <p className="text-green font-bold text-sm tracking-wider uppercase">Trading FZE</p>
              </div>
            </motion.div>
          </div>

          <div className="diagram-flow">
            <motion.div 
              className="flow-line-left"
              initial={{ scaleY: 0 }}
              animate={controls}
              variants={{ visible: { scaleY: 1, transition: { delay: 1, duration: 0.6 } } }}
            ></motion.div>
            <motion.div 
              className="flow-line-right"
              initial={{ scaleY: 0 }}
              animate={controls}
              variants={{ visible: { scaleY: 1, transition: { delay: 1, duration: 0.6 } } }}
            ></motion.div>
          </div>

          <motion.div 
            className="glass-card target-main-card"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.8 } } }}
          >
            <div className="target-card-content" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
              <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                <img src="/target2034-logo.jpeg" alt="Target 2034 Logo" style={{ width: '100%', maxWidth: '350px', height: 'auto', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
              <div style={{ flex: '1', textAlign: 'left' }}>
                <h3 className="text-2xl text-muted mb-2">Our New Product</h3>
                <h2 className="text-5xl font-bold mb-6">Target <span className="text-orange">2034</span></h2>
                
                <div className="target-vision-strip mb-6 text-xl">
                  One <span className="text-green-500">Vision</span>. One <span className="text-red-500">Mission</span>. One Target.
                </div>
                
                <p className="text-muted text-lg">
                  Building a Future of Growth, Innovation & Success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Cards */}
        <motion.div 
          className="dashboard-grid bottom-grid"
          style={{ marginTop: '40px', gap: '24px' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          <motion.div className="glass-card premium-card-hover card-accent-green" variants={fadeUp} style={{ height: '100%' }}>
            <div className="card-image-container small-img">
              <img src={missionTargetImg} alt="Mission Target" className="premium-3d-img" />
            </div>
            <h3 className="card-title text-green-500">OUR MISSION</h3>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>To empower traders and investors with innovative tools, insights and opportunities for financial growth.</p>
          </motion.div>

          <motion.div className="glass-card premium-card-hover card-accent-red" variants={fadeUp} style={{ height: '100%' }}>
            <div className="card-image-container small-img">
              <img src={visionFutureImg} alt="Vision Future" className="premium-3d-img" />
            </div>
            <h3 className="card-title text-red-500">OUR VISION</h3>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>To become a global leader in trading excellence and financial empowerment.</p>
          </motion.div>

          <motion.div className="glass-card premium-card-hover card-accent-gold" variants={fadeUp} style={{ height: '100%' }}>
            <div className="card-image-container small-img">
              <img src={valuesDiamondImg} alt="Values Diamond" className="premium-3d-img" />
            </div>
            <h3 className="card-title text-orange">OUR VALUES</h3>
            <div className="text-muted text-center" style={{ fontSize: '0.9rem' }}>
              Integrity • Transparency<br/>Innovation • Commitment<br/>Excellence
            </div>
          </motion.div>

          <motion.div className="glass-card premium-card-hover card-accent-green" variants={fadeUp} style={{ height: '100%' }}>
            <div className="card-image-container small-img">
              <img src={goalMountainImg} alt="Goal Mountain" className="premium-3d-img" />
            </div>
            <h3 className="card-title text-blue-500">OUR GOAL</h3>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>To help clients achieve financial freedom and long-term success.</p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default ParentCompany;
