import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: 'What is Target 2034?', a: 'Target 2034 is a specialized mutual fund investment initiative designed to help investors create long-term wealth over a 10-year horizon, backed by CandleBee Pvt Ltd and CandleBee Trading FZE.' },
    { q: 'Are the returns guaranteed?', a: 'No, mutual fund investments are subject to market risks. The figures shown in our calculators are projected estimates based on historical data and expert analysis, not guarantees.' },
    { q: 'How does the "India + UAE Expertise" help?', a: 'By leveraging the deep market insights of CandleBee Pvt Ltd (India) and the global trading perspective of CandleBee Trading FZE (UAE), we offer a uniquely diversified and robust investment strategy.' },
    { q: 'Can I withdraw my money before 2034?', a: 'Yes, your investments remain liquid. However, the Target 2034 strategy is optimized for a 10-year holding period to maximize the benefits of compounding.' }
  ];

  return (
    <section className="section" id="faq" style={{ background: 'var(--color-soft-grey)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: '600', fontSize: '1.1rem', color: 'var(--color-dark-navy)' }}
              >
                {faq.q}
                <motion.div animate={{ rotate: activeIndex === idx ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown color="var(--color-gold)" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 24px 24px', color: 'var(--color-grey-text)', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
