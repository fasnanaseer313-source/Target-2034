import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import philosophyTransparencyImg from '../assets/philosophy_transparency_3d.png';
import philosophyShieldImg from '../assets/philosophy_shield_3d.png';
import philosophyGrowthImg from '../assets/philosophy_growth_3d.png';
import targetArrowImg from '../assets/target_arrow_3d.png';

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
      img: philosophyTransparencyImg,
      title: 'Research First',
      desc: 'Professional mutual fund selection based on rigorous data analysis.'
    },
    {
      img: philosophyShieldImg,
      title: 'Risk Managed',
      desc: 'Diversified allocation to protect your capital while seeking growth.'
    },
    {
      img: philosophyGrowthImg,
      title: 'Long-Term Growth',
      desc: 'Harnessing the power of compounding for exponential wealth creation.'
    },
    {
      img: targetArrowImg,
      title: 'Continuous Monitoring',
      desc: 'Regular portfolio reviews to ensure alignment with your 2034 goals.'
    }
  ];

  return (
    <section className="section bg-dark" id="philosophy">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="heading-lg">HOW WE <span className="text-orange highlight-underline">BUILD WEALTH</span></h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', marginTop: '16px' }}>Our core investment philosophy</p>
        </div>

        <motion.div 
          className="dashboard-grid bottom-grid" 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {philosophyData.map((item, idx) => (
            <motion.div key={idx} variants={cardVariants} style={{ height: '100%' }}>
              <div className="premium-card" style={{ height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="card-image-container small-img">
                  <img src={item.img} alt={item.title} className="premium-3d-img" />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-white)', fontWeight: '700', textTransform: 'uppercase' }}>{item.title}</h4>
                <p className="text-muted">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
