import React from 'react';
import { motion } from 'framer-motion';
import PremiumCard from '../components/PremiumCard';
import { CheckCircle2, Shield, Globe, Award, Headphones, LineChart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <Award />, title: 'Professional Research', desc: 'Expert analysis of market trends.' },
    { icon: <CheckCircle2 />, title: 'Transparent Process', desc: 'No hidden fees or complex jargon.' },
    { icon: <Shield />, title: 'Risk Management', desc: 'Advanced modeling to protect downside.' },
    { icon: <LineChart />, title: 'Long-Term Strategy', desc: 'Focusing on exponential compounding.' },
    { icon: <Globe />, title: 'India + UAE Expertise', desc: 'Global insights with local market knowledge.' },
    { icon: <Headphones />, title: 'Dedicated Support', desc: 'Always available to assist your journey.' }
  ];

  return (
    <section className="section bg-navy">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2>Why Choose Target 2034</h2>
          <p className="text-grey" style={{ fontSize: '1.2rem' }}>Built on trust, expertise, and a commitment to your future.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {reasons.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <PremiumCard style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--color-gold)', padding: '12px', background: 'rgba(203,161,83,0.1)', borderRadius: '12px' }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>{item.title}</h4>
                  <p className="text-grey" style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
