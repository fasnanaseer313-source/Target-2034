import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Shield, Target, Calendar, Wallet, BarChart3, Building2, ArrowRight, Droplets } from 'lucide-react';
import './sections.css';

const benefitsList = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, text: "No Third party deposits required" },
  { icon: <ArrowRight size={24} />, text: "100% Direct" },
  { icon: <Droplets size={24} />, text: "100% Liquid" },
  { icon: <Calendar size={24} />, text: "Monthly cashouts" }
];
// Duplicate for continuous infinite scroll
const repeatedBenefits = [...benefitsList, ...benefitsList, ...benefitsList, ...benefitsList];

const TradingModel = () => {
  const scrollRef = React.useRef(null);
  const [isInteracting, setIsInteracting] = React.useState(false);

  React.useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    const scrollSpeed = 1; 

    const scrollLoop = () => {
      if (!isInteracting) {
        container.scrollLeft += scrollSpeed;
        
        // Reset scroll when we reach the middle to create an infinite loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInteracting]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const incomeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const incomeCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section trading-model-light-section" id="platform">
      <div className="container">

        {/* Power of 1% Rule Section */}
        <div className="power-rule-section">
          <div className="pill-badge strategy-badge">Trading Strategy · Risk Management</div>
          
          <div className="power-rule-heading-container">
            <h3 className="power-rule-subtitle">THE POWER OF</h3>
            <h1 className="power-rule-title">
              1% RULE
            </h1>
            <p className="power-rule-desc">Consistent Risk. Disciplined Execution. Powerful Results.</p>
          </div>

          <div className="capital-base-card">
            <div className="capital-base-label">
              <Landmark size={14} className="capital-base-icon" /> CAPITAL
            </div>
            <div className="capital-base-value">₹10,00,000</div>
            <div className="capital-base-desc">Your Trading Capital Base</div>
          </div>
        </div>
        
        {/* Top Section: Three Pillars */}
        <div className="model-header">
          <div className="pill-badge framework-badge-gold">
            <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: '#eab308', borderRadius: '50%', display: 'inline-block' }}></span> THE 1% FRAMEWORK
          </div>
          <h2 className="heading-lg dark-heading" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
            THREE PILLARS OF <span className="highlight-gold-gradient">DISCIPLINE</span>
          </h2>
        </div>

        <motion.div 
          className="pillars-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Capital */}
          <motion.div className="pillar-card pillar-capital" variants={itemVariants}>
            <div className="pillar-icon-wrapper green-bg">
              <Landmark size={32} className="pillar-icon" color="#22c55e" />
            </div>
            <div className="pillar-content">
              <h4 className="pillar-label green-text">FOUNDATION</h4>
              <h3 className="pillar-title">CAPITAL</h3>
              <div className="pillar-value">₹10,00,000</div>
              <p className="pillar-subtitle">Starting capital</p>
            </div>
            <div className="pillar-bottom-line bg-green"></div>
          </motion.div>
          
          {/* Card 2: Risk Per Trade */}
          <motion.div className="pillar-card pillar-risk" variants={itemVariants}>
            <div className="pillar-icon-wrapper red-bg">
              <Shield size={32} className="pillar-icon" color="#ef4444" />
            </div>
            <div className="pillar-content">
              <h4 className="pillar-label red-text">PROTECTION</h4>
              <h3 className="pillar-title">RISK PER TRADE</h3>
              <div className="pillar-value">0.5% = ₹5,000</div>
              <p className="pillar-subtitle">Max loss per trade</p>
            </div>
            <div className="pillar-bottom-line bg-red"></div>
          </motion.div>

          {/* Card 3: Reward Per Trade */}
          <motion.div className="pillar-card pillar-reward" variants={itemVariants}>
            <div className="pillar-icon-wrapper yellow-bg">
              <Target size={32} className="pillar-icon" color="#eab308" />
            </div>
            <div className="pillar-content">
              <h4 className="pillar-label yellow-text">TARGET</h4>
              <h3 className="pillar-title">REWARD PER TRADE</h3>
              <div className="pillar-value">1% = ₹10,000</div>
              <p className="pillar-subtitle">Target profit per trade</p>
            </div>
            <div className="pillar-bottom-line bg-yellow"></div>
          </motion.div>
        </motion.div>

        {/* Income Overview Section */}
        <div className="income-overview-light">
          <div className="model-header" style={{ marginTop: '80px', marginBottom: '40px' }}>
            <div className="pill-badge income-overview-badge">
              <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span> INCOME OVERVIEW
            </div>
            <h2 className="heading-lg dark-heading" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
              WHAT YOU CAN <span className="highlight-green-gradient">EARN</span>
            </h2>
          </div>
          
          <motion.div 
            className="income-cards-grid"
            variants={incomeContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Working Days */}
            <motion.div className="income-card card-blue" variants={incomeCardVariants}>
              <div className="income-icon-wrapper">
                <Calendar size={28} color="#3b82f6" />
              </div>
              <div className="income-big-value text-blue">15</div>
              <div className="income-unit">DAYS/MONTH</div>
              <div className="income-label">Working Days</div>
            </motion.div>
            
            {/* Monthly Approximate */}
            <motion.div className="income-card card-green" variants={incomeCardVariants}>
              <div className="income-icon-wrapper">
                <Wallet size={28} color="#22c55e" />
              </div>
              <div className="income-big-value text-green">1.5</div>
              <div className="income-unit">LAKH ≈</div>
              <div className="income-label">Monthly Income</div>
            </motion.div>

            {/* Yearly Approximate */}
            <motion.div className="income-card card-purple" variants={incomeCardVariants}>
              <div className="income-icon-wrapper">
                <BarChart3 size={28} color="#a855f7" />
              </div>
              <div className="income-big-value text-purple">16</div>
              <div className="income-unit">LAKH ≈</div>
              <div className="income-label">Yearly Income</div>
            </motion.div>

            {/* By 2034 */}
            <motion.div className="income-card card-yellow" variants={incomeCardVariants}>
              <div className="income-icon-wrapper">
                <Building2 size={28} color="#eab308" />
              </div>
              <div className="income-big-value text-yellow">1.2</div>
              <div className="income-unit">CRORE</div>
              <div className="income-label">By 2034</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Section 2: Key Benefits Strip */}
        <div className="benefits-strip-container" style={{ marginTop: '80px', paddingBottom: '40px' }}>
          <motion.div 
            className="benefits-strip"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            ref={scrollRef}
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setIsInteracting(false)}
          >
            {repeatedBenefits.map((benefit, idx) => (
              <motion.div key={idx} className="benefit-item glass-card solid-dark-card" style={{ background: '#0a0f1a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }} variants={itemVariants}>
                <div className="benefit-icon text-orange">{benefit.icon}</div>
                <div className="benefit-text" style={{ color: 'white' }}>{benefit.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TradingModel;

