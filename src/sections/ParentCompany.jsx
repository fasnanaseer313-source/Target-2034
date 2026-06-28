import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Handshake, Target, Eye, ShieldCheck, Flag } from 'lucide-react';
import './sections.css';

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
        <div className="ecosystem-header text-center">
          <motion.h2 className="heading-lg mb-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            TOGETHER, BUILDING TOMORROW
          </motion.h2>
          <motion.p className="text-muted text-lg mb-16" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2}}>
            Two Strong Foundations. One Shared Vision.
          </motion.p>
        </div>

        {/* Diagram */}
        <div className="diagram-container" ref={ref}>
          <div className="diagram-top">
            
            <motion.div 
              className="company-node" 
              style={{ background: '#ffffff', borderRadius: '16px', border: '2px solid #fbbf24', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
              whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(251,191,36,0.3)' }}
            >
              <img src="/logo1.jpeg" alt="Candle Bee Pvt Ltd Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>

            <motion.div 
              className="handshake-center"
              initial={{ scale: 0, rotate: -45 }}
              animate={controls}
              variants={{ visible: { scale: 1, rotate: 0, transition: { delay: 0.6, type: 'spring' } } }}
            >
              <Handshake size={32} className="text-orange" />
            </motion.div>

            <motion.div 
              className="company-node" 
              style={{ background: '#ffffff', borderRadius: '16px', border: '2px solid #10b981', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } } }}
              whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(16,185,129,0.3)' }}
            >
              <img src="/logo2.jpeg" alt="Candle Bee Trading FZE Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                <h3 className="text-2xl text-muted mb-2">Our New Company</h3>
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
          className="dashboard-grid bottom-grid mt-24"
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
