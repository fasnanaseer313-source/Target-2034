import React from 'react';
import { motion, useScroll, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Landmark, Shield, Target, Calendar, ArrowRight, Droplets } from 'lucide-react';
import './sections.css';
import FloatingIconsBackground from '../components/FloatingIconsBackground';
import PremiumHighlightText from '../components/PremiumHighlightText';

const benefitsList = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, text: "No Third party deposits required" },
  { icon: <ArrowRight size={24} />, text: "100% Direct" },
  { icon: <Droplets size={24} />, text: "100% Liquid" },
  { icon: <Calendar size={24} />, text: "Monthly cashouts" }
];
// Duplicate for continuous infinite scroll
const repeatedBenefits = [...benefitsList, ...benefitsList, ...benefitsList, ...benefitsList];

// Data for stacking cards
const incomeCards = [
  { icon: '🗓️', unit: 'WORKING DAYS', numericValue: 15, suffix: ' DAYS', label: 'Per Month', colorTheme: 'dark-blue', borderColor: 'rgba(59, 130, 246, 0.3)', unitColor: '#60a5fa' },
  { icon: '💰', unit: 'MONTHLY APPROX', numericValue: 150000, prefix: '₹', label: '1.3-1.5 Lakh', colorTheme: 'dark-green', borderColor: 'rgba(74, 222, 128, 0.3)', unitColor: '#4ade80' },
  { icon: '📊', unit: 'YEARLY APPROX', numericValue: 1600000, prefix: '₹', label: '≈ 16 Lakh', colorTheme: 'dark-yellow', borderColor: 'rgba(250, 204, 21, 0.3)', unitColor: '#facc15' },
  { icon: '🏙️', unit: 'BY 2034', numericValue: 12000000, prefix: '₹', label: '= 1.2 Crore', colorTheme: 'dark-red', borderColor: 'rgba(248, 113, 113, 0.3)', unitColor: '#f87171' }
];

const AnimatedCounter = ({ from = 0, to, duration = 2.5, prefix = '', suffix = '' }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });
  const count = useMotionValue(from);
  
  React.useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  const display = useTransform(count, (latest) => {
    return prefix + Intl.NumberFormat('en-IN').format(Math.round(latest)) + suffix;
  });

  return <motion.span ref={ref}>{display}</motion.span>;
};

const TradingModel = () => {
  const scrollRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const [isInteracting, setIsInteracting] = React.useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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
    <section className="section trading-model-light-section" id="platform" style={{ position: 'relative' }}>
      <FloatingIconsBackground />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Power of 1% Rule Section */}
        <div className="power-rule-section">
          <div className="pill-badge strategy-badge">Trading Strategy · Risk Management</div>
          
          <div className="power-rule-heading-container">
            <h3 className="power-rule-subtitle">THE POWER OF</h3>
            <h1 className="power-rule-title">
              <PremiumHighlightText>1% RULE</PremiumHighlightText>
            </h1>
            <div className="pill-badge framework-badge-gold" style={{ marginTop: '24px', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: '700' }}>
              CONSISTENT RISK &middot; DISCIPLINED EXECUTION &middot; POWERFUL RESULTS
            </div>
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
          <h2 className="heading-lg text-white" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
            THREE PILLARS OF <PremiumHighlightText>DISCIPLINE</PremiumHighlightText>
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
            <div className="pill-badge income-overview-badge" style={{ backgroundColor: '#021a10', borderColor: '#064e3b', color: '#34d399' }}>
              <span className="dot" style={{ width: '8px', height: '8px', backgroundColor: '#34d399', borderRadius: '50%', display: 'inline-block' }}></span> THE NUMBERS
            </div>
            <h2 className="heading-lg text-white" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
              INCOME <PremiumHighlightText colorTheme="teal">OVERVIEW</PremiumHighlightText>
            </h2>
          </div>
          
          <motion.div 
            className="income-cards-grid"
            variants={incomeContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {incomeCards.map((card, i) => (
              <motion.div 
                key={i}
                className={`income-card card-${card.colorTheme}`}
                variants={incomeCardVariants}
              >
                <div className="income-icon-wrapper" style={{ fontSize: '3rem', marginBottom: '16px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '50%' }}>{card.icon}</div>
                <div className="income-unit" style={{ color: card.unitColor, marginBottom: '16px', fontWeight: '700', letterSpacing: '2px', fontSize: '0.9rem' }}>{card.unit}</div>
                <div className="income-big-value text-white" style={{ fontSize: 'clamp(1.5rem, 2vw + 1rem, 2.2rem)', fontWeight: '800', lineHeight: '1.2', whiteSpace: 'nowrap' }}>
                  <AnimatedCounter
                    to={card.numericValue}
                    prefix={card.prefix}
                    suffix={card.suffix}
                  />
                </div>
                <div className="income-label" style={{ color: '#9ca3af', fontSize: '1rem', marginTop: '12px', fontWeight: '500' }}>{card.label}</div>
              </motion.div>
            ))}
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

