import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight, ArrowDown } from 'lucide-react';
import './sections.css';

const WealthGrowthChart = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const barVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: (custom) => ({
      opacity: 1,
      height: custom.height,
      transition: {
        duration: 1.2,
        delay: custom.delay,
        ease: [0.25, 0.1, 0.25, 1],
      }
    })
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: custom.delay + 0.8,
        ease: "easeOut"
      }
    })
  };

  const labelVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: custom.delay + 0.4
      }
    })
  };

  return (
    <section className="section wealth-chart-section bg-navy" id="wealth-chart">
      <div className="container">
        
        <div className="explanation-grid" style={{ alignItems: 'flex-end' }}>
          
          {/* Left Side: Writings */}
          <div className="writings-container" style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingBottom: '40px' }}>
            <motion.div 
              className="explanation-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card solid-dark-card content-card" style={{ background: '#0a0d14', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <h3 className="mb-4" style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>How It Works</h3>
                <p className="text-muted mb-4" style={{ color: '#9ca3af', lineHeight: '1.6' }}>Our trading models are built with strict risk management principles, designed to preserve capital while maximizing upside potential.</p>
                <div className="animated-arrow desktop-only">
                  <ArrowRight size={32} className="text-orange" />
                </div>
                <div className="animated-arrow mobile-only">
                  <ArrowDown size={32} className="text-orange" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="explanation-points"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul className="premium-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px', listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#d1d5db' }}>
                  <CheckCircle className="text-orange list-icon" size={24} style={{ color: '#f97316', flexShrink: 0 }} />
                  <span><strong style={{ color: '#f97316' }}>Total Control:</strong> You maintain 100% control of your funds in your own brokerage account.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#d1d5db' }}>
                  <CheckCircle className="text-orange list-icon" size={24} style={{ color: '#f97316', flexShrink: 0 }} />
                  <span><strong style={{ color: '#f97316' }}>Transparency:</strong> Real-time visibility of every trade and position.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#d1d5db' }}>
                  <CheckCircle className="text-orange list-icon" size={24} style={{ color: '#f97316', flexShrink: 0 }} />
                  <span><strong style={{ color: '#f97316' }}>Risk Managed:</strong> 0.5% max risk per trade means a losing streak won't blow up your account.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#d1d5db' }}>
                  <CheckCircle className="text-orange list-icon" size={24} style={{ color: '#f97316', flexShrink: 0 }} />
                  <span><strong style={{ color: '#f97316' }}>Consistent Yields:</strong> Targeted strategies for steady, compounding growth over time.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Side: Graph */}
          <div className="wealth-chart-container" ref={ref} style={{ margin: 0, width: '100%' }}>
            
            {/* 2010 Bar */}
            <div className="chart-column">
              <motion.div 
                className="chart-tooltip"
                custom={{ delay: 0 }}
                variants={tooltipVariants}
                initial="hidden"
                animate={controls}
              >
                ₹1 Lakh
                <div className="tooltip-tail"></div>
              </motion.div>
              
              <div className="bar-wrapper" style={{ height: '180px' }}>
                <motion.div 
                  className="chart-bar"
                  custom={{ height: '100%', delay: 0 }}
                  variants={barVariants}
                  initial="hidden"
                  animate={controls}
                />
              </div>
              
              <motion.div 
                className="chart-label"
                custom={{ delay: 0 }}
                variants={labelVariants}
                initial="hidden"
                animate={controls}
              >
                2010
              </motion.div>
            </div>

            {/* 2026 Bar */}
            <div className="chart-column">
              <motion.div 
                className="chart-tooltip"
                custom={{ delay: 0.4 }}
                variants={tooltipVariants}
                initial="hidden"
                animate={controls}
              >
                ₹10 Lakh
                <div className="tooltip-tail"></div>
              </motion.div>
              
              <div className="bar-wrapper" style={{ height: '320px' }}>
                <motion.div 
                  className="chart-bar"
                  custom={{ height: '100%', delay: 0.4 }}
                  variants={barVariants}
                  initial="hidden"
                  animate={controls}
                />
              </div>
              
              <motion.div 
                className="chart-label"
                custom={{ delay: 0.4 }}
                variants={labelVariants}
                initial="hidden"
                animate={controls}
              >
                2026
              </motion.div>
            </div>

            {/* 2034 Bar */}
            <div className="chart-column">
              <motion.div 
                className="chart-tooltip"
                custom={{ delay: 0.8 }}
                variants={tooltipVariants}
                initial="hidden"
                animate={controls}
              >
                ₹1.2 Cr
                <div className="tooltip-tail"></div>
              </motion.div>
              
              <div className="bar-wrapper" style={{ height: '480px' }}>
                <motion.div 
                  className="chart-bar"
                  custom={{ height: '100%', delay: 0.8 }}
                  variants={barVariants}
                  initial="hidden"
                  animate={controls}
                />
              </div>
              
              <motion.div 
                className="chart-label"
                custom={{ delay: 0.8 }}
                variants={labelVariants}
                initial="hidden"
                animate={controls}
              >
                2034
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WealthGrowthChart;
