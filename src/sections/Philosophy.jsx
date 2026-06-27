import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PremiumCard from '../components/PremiumCard';
import { Search, ShieldCheck, TrendingUp, Activity } from 'lucide-react';

const Philosophy = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const philosophyData = [
    {
      icon: <Search size={32} color="var(--color-gold)" />,
      title: 'Research First',
      desc: 'Professional mutual fund selection based on rigorous data analysis.'
    },
    {
      icon: <ShieldCheck size={32} color="var(--color-gold)" />,
      title: 'Risk Managed',
      desc: 'Diversified allocation to protect your capital while seeking growth.'
    },
    {
      icon: <TrendingUp size={32} color="var(--color-gold)" />,
      title: 'Long-Term Growth',
      desc: 'Harnessing the power of compounding for exponential wealth creation.'
    },
    {
      icon: <Activity size={32} color="var(--color-gold)" />,
      title: 'Continuous Monitoring',
      desc: 'Regular portfolio reviews to ensure alignment with your 2034 goals.'
    }
  ];

  return (
    <section className="section" id="philosophy">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2>How We Build Wealth</h2>
          <p className="text-grey" style={{ fontSize: '1.2rem' }}>Our core investment philosophy</p>
        </div>

        <motion.div 
          className="philosophy-grid" 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}
        >
          {philosophyData.map((item, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <PremiumCard className="philosophy-card" style={{ height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '24px', padding: '16px', background: 'rgba(203, 161, 83, 0.1)', borderRadius: '50%' }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{item.title}</h4>
                <p className="text-grey">{item.desc}</p>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
