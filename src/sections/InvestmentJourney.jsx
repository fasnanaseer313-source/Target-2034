import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserPlus, ClipboardList, Target, TrendingUp, BarChart3, Trophy } from 'lucide-react';
import PremiumCard from '../components/PremiumCard';

const InvestmentJourney = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const steps = [
    { icon: <UserPlus size={24} />, title: 'Register' },
    { icon: <ClipboardList size={24} />, title: 'Financial Assessment' },
    { icon: <Target size={24} />, title: 'Investment Planning' },
    { icon: <TrendingUp size={24} />, title: 'Fund Allocation' },
    { icon: <BarChart3 size={24} />, title: 'Portfolio Growth' },
    { icon: <Trophy size={24} />, title: 'Target 2034 Achievement' },
  ];

  return (
    <section className="section" id="journey">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2>Your Investment Journey</h2>
          <p className="text-grey" style={{ fontSize: '1.2rem' }}>A simple, transparent process to secure your future.</p>
        </div>

        <div className="journey-track" ref={ref} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', position: 'relative' }}>
          
          {/* Horizontal Line for Desktop */}
          <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '2px', background: 'rgba(203,161,83,0.3)', zIndex: 0, transform: 'translateY(-50%)' }} className="hidden-mobile"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              style={{ position: 'relative', zIndex: 1, flex: '1 1 150px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.2 } } }}
            >
              <div style={{ 
                width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-white)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                boxShadow: 'var(--shadow-md)', marginBottom: '16px', color: 'var(--color-gold)',
                border: '2px solid var(--color-gold)'
              }}>
                {step.icon}
              </div>
              <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>Step {idx + 1}</p>
              <h4 style={{ fontSize: '1rem' }}>{step.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentJourney;
