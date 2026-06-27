import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
        
        <div className="wealth-chart-container" ref={ref}>
          
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
    </section>
  );
};

export default WealthGrowthChart;
