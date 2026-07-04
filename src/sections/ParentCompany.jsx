import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Handshake, Target, Eye, ShieldCheck, Flag, Star, BarChart, Check, Trophy } from 'lucide-react';
import './sections.css';
import LogoOrbitAnimation from '../components/LogoOrbitAnimation';
import PremiumHighlightText from '../components/PremiumHighlightText';

import missionTargetImg from '../assets/mission_target_3d.png';
import visionFutureImg from '../assets/vision_future_3d.png';
import valuesDiamondImg from '../assets/values_diamond_3d.png';
import goalMountainImg from '../assets/goal_mountain_3d.png';
import stockMarketVisual from '../assets/stock_market_visual.png';


const PremiumMissionCard = ({ title, desc, img, delayIndex, titleColor, activePulse }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.65, triggerOnce: true });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await controls.start('visible');
        controls.start('floating');
      };
      sequence();
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.7, rotateY: 100, filter: 'blur(12px)' },
    visible: { 
      y: 0, opacity: 1, scale: 1, rotateY: 0, filter: 'blur(0px)',
      transition: { 
        duration: 1.2, 
        delay: delayIndex * 0.3, 
        type: "spring",
        stiffness: 70,
        damping: 14
      } 
    },
    floating: {
      y: [0, -6, 0, 6, 0],
      transition: { duration: 5 + delayIndex * 0.5, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, rotate: 0 },
    visible: { 
      scale: 1, rotate: [0, 8, 0],
      transition: { duration: 0.7, delay: delayIndex * 0.15 + 0.1 } 
    },
    floating: {
      y: [0, -3, 0, 3, 0],
      transition: { duration: 4 + delayIndex * 0.5, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20, letterSpacing: '4px' },
    visible: { opacity: 1, y: 0, letterSpacing: 'normal', transition: { duration: 0.6, delay: delayIndex * 0.15 + 0.3 } }
  };

  const pVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delayIndex * 0.15 + 0.45 } }
  };

  return (
    <motion.div 
      ref={ref}
      className={`glass-card premium-card-hover premium-mission-card ${activePulse ? 'active-pulse' : ''}`} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, height: '100%', perspective: 1000, transformStyle: 'preserve-3d' }}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="premium-card-border-glow" />

      <motion.div className="card-image-container small-img" variants={iconVariants} initial="hidden" animate={controls} style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}>
        <img src={img} alt={title} className="premium-3d-img" />
      </motion.div>
      <motion.h3 className={`card-title ${titleColor}`} variants={headingVariants} initial="hidden" animate={controls} style={{ transform: 'translateZ(20px)' }}>
        {title}
      </motion.h3>
      {typeof desc === 'string' ? (
        <motion.p className="text-muted" style={{ fontSize: '0.9rem', transform: 'translateZ(10px)' }} variants={pVariants} initial="hidden" animate={controls}>
          {desc}
        </motion.p>
      ) : (
        <motion.div className="text-muted text-center" style={{ fontSize: '0.9rem', transform: 'translateZ(10px)' }} variants={pVariants} initial="hidden" animate={controls}>
          {desc}
        </motion.div>
      )}
    </motion.div>
  );
};

const ParentCompany = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activePulseIndex, setActivePulseIndex] = useState(-1);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePulseIndex(Math.floor(Math.random() * 4));
      setTimeout(() => setActivePulseIndex(-1), 1500);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 1.5 } }
  };

  return (
    <section className="section ecosystem-section bg-dark" id="about" style={{ paddingTop: '20px' }}>
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
          
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
            <motion.h2 className="announcement-title" style={{ textAlign: 'left', margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
              <div className="text-white">TOGETHER,</div>
              <div className="text-gold">
                <PremiumHighlightText>BUILDING</PremiumHighlightText>
              </div>
              <div className="text-white">TOMORROW</div>
            </motion.h2>

            <motion.div 
              initial={{opacity:0, scale: 0.5, rotateY: -180}} 
              whileInView={{opacity:1, scale: 1, rotateY: 0}} 
              viewport={{once:true}} 
              transition={{delay: 0.2, duration: 1.2, type: "spring", bounce: 0.4}}
              className="stock-market-visual-wrapper"
              style={{ 
                flex: '1 1 400px',
                maxWidth: '600px',
                minWidth: '260px',
                height: '320px',
                marginRight: '60px',
                borderRadius: '16px', 
                overflow: 'hidden', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(251,191,36,0.15)',
                border: '1px solid rgba(255,255,255,0.05)',
                zIndex: 10
              }}
            >
              <img src={stockMarketVisual} alt="Stock Market Visualization" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </motion.div>
          </div>
          
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
              style={{ borderColor: 'rgba(251,191,36,0.7)', boxShadow: '0 0 30px rgba(251,191,36,0.2), inset 0 0 20px rgba(251,191,36,0.1)', transition: 'all 0.4s ease' }}
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
              whileHover={{ y: -10, scale: 1.02, borderColor: 'rgba(251,191,36,1)', boxShadow: '0 0 60px rgba(251,191,36,0.5), inset 0 0 30px rgba(251,191,36,0.3)' }}
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
              initial={{ scale: 0, x: "-50%", y: "-50%" }}
              animate={controls}
              variants={{ visible: { scale: 1, x: "-50%", y: "-50%", transition: { delay: 0.6, type: 'spring' } } }}
            >
              <div className="pulse-ring pulse-ring-1"></div>
              <div className="pulse-ring pulse-ring-2"></div>
              <div className="pulse-ring pulse-ring-3"></div>
              <motion.span 
                className="handshake-emoji"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                🤝
              </motion.span>
            </motion.div>

            <motion.div 
              className="company-node card-dark" 
              style={{ borderColor: 'rgba(16,185,129,0.7)', boxShadow: '0 0 30px rgba(16,185,129,0.2), inset 0 0 20px rgba(16,185,129,0.1)', transition: 'all 0.4s ease' }}
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } } }}
              whileHover={{ y: -10, scale: 1.02, borderColor: 'rgba(16,185,129,1)', boxShadow: '0 0 60px rgba(16,185,129,0.5), inset 0 0 30px rgba(16,185,129,0.3)' }}
            >
              <div className="country-pill pill-green-dark">UAE</div>
              <LogoOrbitAnimation
                icons={[
                  { icon: '🐝', angleOffset: 45, duration: 9, direction: -1, floatOffset: 7 },
                  { icon: '📈', angleOffset: 225, duration: 11, direction: 1, floatOffset: -6 },
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
            style={{ borderColor: 'rgba(255,122,0,0.5)', boxShadow: '0 0 30px rgba(255,122,0,0.15), inset 0 0 20px rgba(255,122,0,0.05)', transition: 'all 0.4s ease' }}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.8 } } }}
            whileHover={{ y: -10, scale: 1.02, borderColor: 'rgba(255,122,0,1)', boxShadow: '0 0 60px rgba(255,122,0,0.4), inset 0 0 30px rgba(255,122,0,0.2)' }}
          >
            <div className="target-card-content" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
              <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                <img src="/target2034-logo.jpeg" alt="Target 2034 Logo" style={{ width: '100%', maxWidth: '350px', height: 'auto', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
              <div style={{ flex: '1', textAlign: 'left' }}>
                <h3 className="text-2xl text-muted mb-2">Our New Product</h3>
                <h2 className="text-5xl font-bold mb-6 text-white uppercase tracking-wider">TARGET <motion.span style={{ color: '#ea580c', display: 'inline-block' }} animate={{ textShadow: ["0px 0px 5px #ea580c, 0px 0px 10px #ea580c", "0px 0px 20px #ea580c, 0px 0px 30px #ea580c", "0px 0px 5px #ea580c, 0px 0px 10px #ea580c"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>2034</motion.span></h2>
                
                <div className="target-vision-strip mb-6 text-xl font-bold" style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', background: 'none', padding: 0 }}>
                  <span style={{ color: '#22c55e' }}>One Vision</span> 
                  <span style={{ color: '#6b7280' }}>·</span> 
                  <span style={{ color: '#ef4444' }}>One Mission</span> 
                  <span style={{ color: '#6b7280' }}>·</span> 
                  <span style={{ color: '#eab308' }}>One Target</span>
                </div>
                
                <p className="text-muted text-lg">
                  Building a Future of <span style={{ color: '#22c55e', fontWeight: 'bold' }}>Growth</span>, <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>Innovation</span> & <span style={{ color: '#eab308', fontWeight: 'bold' }}>Success</span>.
                </p>
                

              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Cards */}
        <div 
          className="dashboard-grid bottom-grid"
          style={{ marginTop: '120px', gap: '24px', perspective: '1000px', position: 'relative' }}
        >
          <div className="premium-bg-enhancement"></div>
          
          <PremiumMissionCard 
            title="OUR MISSION" 
            desc="To empower traders and investors with innovative tools, insights and opportunities for financial growth." 
            img={missionTargetImg} 
            delayIndex={0} 
            titleColor="text-green-500" 
            activePulse={activePulseIndex === 0} 
          />
          <PremiumMissionCard 
            title="OUR VISION" 
            desc="To become a global leader in trading excellence and financial empowerment." 
            img={visionFutureImg} 
            delayIndex={1} 
            titleColor="text-red-500" 
            activePulse={activePulseIndex === 1} 
          />
          <PremiumMissionCard 
            title="OUR VALUES" 
            desc={<>Integrity • Transparency<br/>Innovation • Commitment<br/>Excellence</>} 
            img={valuesDiamondImg} 
            delayIndex={2} 
            titleColor="text-orange" 
            activePulse={activePulseIndex === 2} 
          />
          <PremiumMissionCard 
            title="OUR GOAL" 
            desc="To help clients achieve financial freedom and long-term success." 
            img={goalMountainImg} 
            delayIndex={3} 
            titleColor="text-blue-500" 
            activePulse={activePulseIndex === 3} 
          />
        </div>

      </div>
    </section>
  );
};

export default ParentCompany;
