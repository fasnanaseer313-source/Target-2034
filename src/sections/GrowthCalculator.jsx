import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PremiumCard from '../components/PremiumCard';
import Button from '../components/Button';

const GrowthCalculator = () => {
  const [sip, setSip] = useState(10000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  // Calculate future value (simplistic compound interest formula for SIP)
  const monthlyRate = returnRate / 100 / 12;
  const months = years * 12;
  const futureValue = sip * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const totalInvested = sip * months;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className="section bg-navy" id="calculator">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2>Plan Your 2034 Target</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>Interactive Growth Calculator</p>
        </div>

        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'stretch' }}>
          
          {/* Controls */}
          <div className="glass-panel-dark" style={{ flex: '1', minWidth: '300px', padding: '40px' }}>
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: '600' }}>Monthly SIP</label>
                <span className="text-gold" style={{ fontWeight: '700' }}>{formatCurrency(sip)}</span>
              </div>
              <input 
                type="range" min="1000" max="100000" step="1000" 
                value={sip} onChange={(e) => setSip(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-gold)' }}
              />
            </div>
            
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: '600' }}>Investment Duration (Years)</label>
                <span className="text-gold" style={{ fontWeight: '700' }}>{years}</span>
              </div>
              <input 
                type="range" min="1" max="20" step="1" 
                value={years} onChange={(e) => setYears(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-gold)' }}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: '600' }}>Expected Return (%)</label>
                <span className="text-gold" style={{ fontWeight: '700' }}>{returnRate}%</span>
              </div>
              <input 
                type="range" min="5" max="20" step="1" 
                value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-gold)' }}
              />
            </div>

            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>* Returns are projected and not guaranteed.</p>
          </div>

          {/* Results */}
          <div className="glass-panel-dark" style={{ flex: '1', minWidth: '300px', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '16px', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>Estimated Wealth</h3>
            <motion.div 
              key={futureValue}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring' }}
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: '700', color: 'var(--color-gold)', marginBottom: '32px' }}
            >
              {formatCurrency(futureValue)}
            </motion.div>
            
            <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>Total Invested</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>{formatCurrency(totalInvested)}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>Est. Returns</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#10b981' }}>{formatCurrency(futureValue - totalInvested)}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Button variant="primary">Start Your Plan Now</Button>
        </div>
      </div>
    </section>
  );
};

export default GrowthCalculator;
