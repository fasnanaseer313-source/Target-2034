import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PremiumCard from '../components/PremiumCard';
import { Handshake } from 'lucide-react';
import './sections.css';

const ParentCompany = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="section parent-company-section" id="about">
      <div className="container">
        <div className="parent-company-header">
          <h2>Together, Building Tomorrow</h2>
          <p>Two Strong Foundations. One Shared Vision.</p>
        </div>

        <div className="diagram-container" ref={ref}>
          <div className="diagram-top">
            <PremiumCard className="company-card">
              <motion.div variants={cardVariants} initial="hidden" animate={controls}>
                {/* Placeholder for CandleBee Pvt Ltd Logo */}
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🐝</div>
                <h3>CandleBee Pvt Ltd</h3>
                <p className="text-grey">India</p>
              </motion.div>
            </PremiumCard>

            <motion.div 
              className="handshake-icon"
              initial={{ scale: 0 }}
              animate={controls}
              variants={{ visible: { scale: 1, transition: { delay: 0.5, type: 'spring' } } }}
            >
              <Handshake size={40} color="var(--color-dark-navy)" />
            </motion.div>

            <PremiumCard className="company-card" style={{ border: '1px solid #10b981' }}>
              <motion.div variants={cardVariants} initial="hidden" animate={controls} transition={{ delay: 0.2 }}>
                {/* Placeholder for CandleBee Trading FZE Logo */}
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🇦🇪</div>
                <h3>CandleBee Trading FZE</h3>
                <p className="text-grey">UAE</p>
              </motion.div>
            </PremiumCard>
          </div>

          {/* Connection Line */}
          <motion.div 
            className="connection-line"
            initial={{ height: 0 }}
            animate={controls}
            variants={{ visible: { height: 100, transition: { delay: 1, duration: 1 } } }}
          >
            <div className="connection-arrow"></div>
          </motion.div>

          <PremiumCard className="target-card">
            <motion.div variants={cardVariants} initial="hidden" animate={controls} transition={{ delay: 1.5 }}>
              <p className="text-grey" style={{ marginBottom: '8px' }}>Our New Company</p>
              <h3>Target <span className="text-gold">2034</span></h3>
              <p style={{ fontWeight: 600, marginBottom: '16px' }}>
                One <span style={{ color: '#10b981' }}>Vision</span>. One <span style={{ color: '#ef4444' }}>Mission</span>. One Target.
              </p>
              <p className="text-grey">Building a Future of Growth, Innovation & Success.</p>
            </motion.div>
          </PremiumCard>

        </div>
      </div>
    </section>
  );
};

export default ParentCompany;
