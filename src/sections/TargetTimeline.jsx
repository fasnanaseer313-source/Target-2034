import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TargetTimeline = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const timelineData = [
    { year: '2026', milestone: 'Foundation & Strategy', desc: 'Establishing core investment principles and initial portfolio construction.', growth: 'Initial Setup' },
    { year: '2027', milestone: 'Expansion Phase', desc: 'Diversifying across key emerging sectors and global markets.', growth: '+15% Projected' },
    { year: '2028', milestone: 'Compounding Acceleration', desc: 'Reinvesting returns to harness the power of exponential compounding.', growth: '+35% Projected' },
    { year: '2030', milestone: 'Mid-Term Review', desc: 'Strategic rebalancing to lock in gains and mitigate mid-cycle risks.', growth: '+75% Projected' },
    { year: '2034', milestone: 'Target Achievement', desc: 'Reaching the ultimate wealth creation goal through disciplined investing.', growth: 'Target Met' }
  ];

  return (
    <section className="section bg-navy" id="timeline">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2>The Path to 2034</h2>
          <p className="text-grey" style={{ fontSize: '1.2rem' }}>A disciplined, long-term approach to wealth creation.</p>
        </div>

        <div className="timeline-container" ref={ref} style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <motion.div 
            style={{ position: 'absolute', left: '50px', top: 0, bottom: 0, width: '4px', background: 'var(--color-soft-grey)', borderRadius: '4px' }}
            initial={{ height: 0 }}
            animate={controls}
            variants={{ visible: { height: '100%', transition: { duration: 2, ease: "easeInOut" } } }}
          />

          {timelineData.map((item, idx) => (
            <motion.div 
              key={item.year}
              style={{ display: 'flex', gap: '32px', marginBottom: '48px', position: 'relative' }}
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: idx * 0.3 } } }}
            >
              {/* Timeline Dot */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', background: 'var(--color-gold)', borderRadius: '50%', border: '4px solid var(--color-bg-dark)', marginLeft: '40px', marginTop: '6px' }}>
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '2rem', margin: 0 }}>{item.year}</h3>
                  <span style={{ padding: '4px 12px', background: 'rgba(203,161,83,0.1)', color: 'var(--color-gold)', borderRadius: '16px', fontSize: '0.85rem', fontWeight: '600' }}>
                    {item.growth}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{item.milestone}</h4>
                <p className="text-grey">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetTimeline;
