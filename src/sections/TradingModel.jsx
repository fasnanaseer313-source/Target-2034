import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ArrowDown, Droplets, Calendar, Wallet } from 'lucide-react';
import './sections.css';

// Import generated 3D images
import cashStackImg from '../assets/cash_stack_3d.png';
import redShieldImg from '../assets/red_shield_3d.png';
import targetArrowImg from '../assets/target_arrow_3d.png';
import calendarDaysImg from '../assets/calendar_15_days_3d.png';
import moneyBagGraphImg from '../assets/money_bag_graph_3d.png';
import yearlyCalendarWealthImg from '../assets/yearly_calendar_wealth_3d.png';
import futuristicCityGoldImg from '../assets/futuristic_city_gold_3d.png';

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
      transition: { staggerChildren: 0.2 }
    }
  };

  const incomeCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      scale: 0.95, 
      filter: 'blur(10px)' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        ease: [0.25, 1, 0.5, 1] 
      } 
    }
  };

  return (
    <section className="section trading-model-section" id="platform">
      <div className="container">
        
        {/* Top Section: Power of 1% Rule - The 3 Main Cards */}
        <div className="model-header" style={{ marginBottom: '40px' }}>
          <h2 className="heading-lg" style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>THE POWER OF <br />
            <span style={{ fontSize: '1.5em', fontWeight: 'bold', background: 'linear-gradient(to right, #ffffff, #f0d58b, #cca33c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 0 20px rgba(204, 163, 60, 0.5)' }}>1% RULE</span>
            <span style={{ color: '#f0d58b', fontSize: '1.5em', verticalAlign: 'super', marginLeft: '10px', textShadow: '0 0 15px rgba(240, 213, 139, 0.8)' }}>↗</span>
          </h2>
        </div>

        <motion.div 
          className="dashboard-grid top-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Capital */}
          <motion.div className="pedestal-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} variants={itemVariants} whileHover={{ y: -8 }}>
            <div className="card-image-container">
              <img src={cashStackImg} alt="Capital Cash Stack" className="premium-3d-img" />
            </div>
            <h3 className="card-title text-green-accent">CAPITAL</h3>
            <div className="card-value">₹10,00,000</div>
          </motion.div>
          
          {/* Card 2: Risk Per Trade */}
          <motion.div className="pedestal-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} variants={itemVariants} whileHover={{ y: -8 }}>
            <div className="card-image-container">
              <img src={redShieldImg} alt="Risk Shield" className="premium-3d-img" />
            </div>
            <h3 className="card-title text-red-accent">RISK PER TRADE</h3>
            <div className="card-value">0.5% = ₹5,000</div>
            <p className="card-subtitle">Maximum loss per trade</p>
          </motion.div>

          {/* Card 3: Reward Per Trade */}
          <motion.div className="pedestal-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} variants={itemVariants} whileHover={{ y: -8 }}>
            <div className="card-image-container">
              <img src={targetArrowImg} alt="Target Reward" className="premium-3d-img" />
            </div>
            <h3 className="card-title text-green-accent">REWARD PER TRADE</h3>
            <div className="card-value">1% = ₹10,000</div>
            <p className="card-subtitle">Target profit per trade</p>
          </motion.div>
        </motion.div>

        {/* Income Overview Section */}
        <div className="income-overview-section" style={{ marginTop: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 className="income-heading">INCOME OVERVIEW</h3>
          </div>
          
          <motion.div 
            className="dashboard-grid bottom-grid"
            variants={incomeContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Working Days */}
            <motion.div className="glass-card solid-dark-card premium-card-hover" style={{ border: '1px solid var(--color-gold)' }} variants={incomeCardVariants} whileHover={{ y: -8, scale: 1.02 }}>
              <div className="card-image-container small-img">
                <img src={calendarDaysImg} alt="Working Days Calendar" className="premium-3d-img" />
              </div>
              <div className="card-label">WORKING DAYS</div>
              <div className="card-big-value text-orange">15 DAYS</div>
            </motion.div>
            
            {/* Monthly Approximate */}
            <motion.div className="glass-card solid-dark-card premium-card-hover" style={{ border: '1px solid var(--color-gold)' }} variants={incomeCardVariants} whileHover={{ y: -8, scale: 1.02 }}>
              <div className="card-image-container small-img">
                <img src={moneyBagGraphImg} alt="Monthly Income Graph" className="premium-3d-img" />
              </div>
              <div className="card-label">MONTHLY APPROXIMATE</div>
              <div className="card-big-value text-orange">1.3 - 1.5 LAKH</div>
            </motion.div>

            {/* Yearly Approximate */}
            <motion.div className="glass-card solid-dark-card premium-card-hover" style={{ border: '1px solid var(--color-gold)' }} variants={incomeCardVariants} whileHover={{ y: -8, scale: 1.02 }}>
              <div className="card-image-container small-img">
                <img src={yearlyCalendarWealthImg} alt="Yearly Growth" className="premium-3d-img" />
              </div>
              <div className="card-label">YEARLY APPROXIMATE</div>
              <div className="card-big-value text-orange">= 16 LAKH</div>
            </motion.div>

            {/* By 2034 */}
            <motion.div className="glass-card solid-dark-card premium-card-hover" style={{ border: '1px solid var(--color-gold)' }} variants={incomeCardVariants} whileHover={{ y: -8, scale: 1.02 }}>
              <div className="card-image-container small-img">
                <img src={futuristicCityGoldImg} alt="Future Wealth City" className="premium-3d-img" />
              </div>
              <div className="card-label">BY 2034</div>
              <div className="card-big-value text-orange">= 1.2 CR</div>
            </motion.div>
          </motion.div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ color: 'var(--color-gold)', letterSpacing: '2px', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem' }}>CONSISTENT RISK. DISCIPLINED EXECUTION. POWERFUL RESULTS.</p>
          </div>
        </div>

        {/* Section 2: Key Benefits Strip */}
        <div className="benefits-strip-container" style={{ marginTop: '80px' }}>
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
              <motion.div key={idx} className="benefit-item glass-card solid-dark-card" variants={itemVariants}>
                <div className="benefit-icon text-orange">{benefit.icon}</div>
                <div className="benefit-text">{benefit.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section 3: Explanation Points */}
        <div className="explanation-section">
          <div className="explanation-grid">
            
            <motion.div 
              className="explanation-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card solid-dark-card content-card">
                <h3 className="mb-4">How It Works</h3>
                <p className="text-muted mb-4">Our trading models are built with strict risk management principles, designed to preserve capital while maximizing upside potential.</p>
                <div className="animated-arrow desktop-only">
                  <ArrowRight size={32} className="text-orange" />
                </div>
                <div className="animated-arrow mobile-only">
                  <ArrowDown size={32} className="text-orange" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="explanation-points"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul className="premium-list">
                <li>
                  <CheckCircle className="text-orange list-icon" size={20} />
                  <span><strong>Total Control:</strong> You maintain 100% control of your funds in your own brokerage account.</span>
                </li>
                <li>
                  <CheckCircle className="text-orange list-icon" size={20} />
                  <span><strong>Transparency:</strong> Real-time visibility of every trade and position.</span>
                </li>
                <li>
                  <CheckCircle className="text-orange list-icon" size={20} />
                  <span><strong>Risk Managed:</strong> 0.5% max risk per trade means a losing streak won't blow up your account.</span>
                </li>
                <li>
                  <CheckCircle className="text-orange list-icon" size={20} />
                  <span><strong>Consistent Yields:</strong> Targeted strategies for steady, compounding growth over time.</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TradingModel;
