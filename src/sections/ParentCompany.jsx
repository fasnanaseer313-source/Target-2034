import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Handshake, Target, Eye, ShieldCheck, Flag } from 'lucide-react';
import './sections.css';

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
    <section className="section ecosystem-section" id="about">
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
              className="glass-card company-node" 
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
              whileHover={{ y: -5, borderColor: '#f97316' }}
            >
              <div className="node-icon">🐝</div>
              <h3 className="mb-2">Candle Bee Pvt Ltd</h3>
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
              className="glass-card company-node" 
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } } }}
              whileHover={{ y: -5, borderColor: '#10b981' }}
            >
              <div className="node-icon">🇦🇪</div>
              <h3 className="mb-2">Candle Bee Trading FZE</h3>
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
            <div className="target-card-content text-center">
              <h3 className="text-2xl text-muted mb-2">Our New Company</h3>
              <h2 className="text-5xl font-bold mb-6">Target <span className="text-orange">2034</span></h2>
              
              <div className="target-vision-strip mb-6 text-xl">
                One <span className="text-green-500">Vision</span>. One <span className="text-red-500">Mission</span>. One Target.
              </div>
              
              <p className="text-muted text-lg">
                Building a Future of Growth, Innovation & Success.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Cards */}
        <motion.div 
          className="core-values-grid mt-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          <motion.div className="glass-card core-card" variants={fadeUp} whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(16,185,129,0.2)" }}>
            <div className="core-icon text-green-500 mb-6"><Target size={40} /></div>
            <h3 className="text-xl font-bold text-green-500 mb-4">OUR MISSION</h3>
            <p className="text-muted">To empower traders and investors with innovative tools, insights and opportunities for financial growth.</p>
          </motion.div>

          <motion.div className="glass-card core-card" variants={fadeUp} whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(239,68,68,0.2)" }}>
            <div className="core-icon text-red-500 mb-6"><Eye size={40} /></div>
            <h3 className="text-xl font-bold text-red-500 mb-4">OUR VISION</h3>
            <p className="text-muted">To become a global leader in trading excellence and financial empowerment.</p>
          </motion.div>

          <motion.div className="glass-card core-card" variants={fadeUp} whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(249,115,22,0.2)" }}>
            <div className="core-icon text-orange mb-6"><ShieldCheck size={40} /></div>
            <h3 className="text-xl font-bold text-orange mb-4">OUR VALUES</h3>
            <ul className="text-muted text-left list-disc list-inside">
              <li>Integrity</li>
              <li>Transparency</li>
              <li>Innovation</li>
              <li>Commitment</li>
              <li>Excellence</li>
            </ul>
          </motion.div>

          <motion.div className="glass-card core-card" variants={fadeUp} whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(59,130,246,0.2)" }}>
            <div className="core-icon text-blue-500 mb-6"><Flag size={40} /></div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">OUR GOAL</h3>
            <p className="text-muted">To help clients achieve financial freedom and long-term success.</p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default ParentCompany;
