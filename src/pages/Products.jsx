import React from 'react';
import { motion } from 'framer-motion';
import PremiumCard from '../components/PremiumCard';
import PremiumHighlightText from '../components/PremiumHighlightText';
import Button from '../components/Button';
import { ShieldAlert, TrendingUp, Briefcase } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Target 2034 Equity Growth',
      category: 'Equity - Multi Cap',
      risk: 'High',
      duration: '7-10 Years',
      goal: 'Aggressive Capital Appreciation',
      icon: <TrendingUp size={24} color="#ef4444" />
    },
    {
      name: 'Target 2034 Balanced Advantage',
      category: 'Hybrid - Dynamic Asset Allocation',
      risk: 'Moderate',
      duration: '5-7 Years',
      goal: 'Stable Growth with Downside Protection',
      icon: <Briefcase size={24} color="var(--color-gold)" />
    },
    {
      name: 'Target 2034 Secure Yield',
      category: 'Debt - Long Duration',
      risk: 'Low to Moderate',
      duration: '3-5 Years',
      goal: 'Consistent Income Generation',
      icon: <ShieldAlert size={24} color="#10b981" />
    }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container" style={{ paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1>Our Investment <PremiumHighlightText>Products</PremiumHighlightText></h1>
          <p className="text-grey" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '16px auto 0' }}>
            Expertly curated mutual fund portfolios designed to align with your risk appetite and the Target 2034 horizon.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <PremiumCard style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ padding: '12px', background: 'rgba(0,0,0,0.03)', borderRadius: '12px' }}>
                    {product.icon}
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '600', padding: '4px 12px', background: 'var(--color-orange)', color: 'white', borderRadius: '16px' }}>
                    {product.category}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{product.name}</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="text-grey">Risk Level</span>
                    <span style={{ fontWeight: '600' }}>{product.risk}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="text-grey">Recommended Duration</span>
                    <span style={{ fontWeight: '600' }}>{product.duration}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="text-grey">Expected Goal</span>
                    <span style={{ fontWeight: '600', textAlign: 'right', maxWidth: '150px' }}>{product.goal}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}>
                  <Button variant="secondary" style={{ flex: 1 }}>Learn More</Button>
                  <Button variant="primary" style={{ flex: 1 }}>Apply Now</Button>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
