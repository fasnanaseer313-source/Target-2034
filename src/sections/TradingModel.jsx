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

const TradingModel = () => {
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

  return (
    <section className="section trading-model-section" id="platform">
      <div className="container">
        
        {/* Top Section: Power of 1% Rule - The 3 Main Cards */}
        <div className="model-header" style={{ marginBottom: '40px' }}>
          <h2 className="heading-lg">The Power of <span className="text-orange highlight-underline">"1% Rule"</span></h2>
        </div>

        <motion.div 
          className="dashboard-grid top-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Capital */}
          <motion.div className="glass-card premium-card-hover card-accent-green" variants={itemVariants} whileHover={{ y: -8 }}>
            <div className="card-top-icon"><Wallet className="text-white" size={20} /></div>
            <div className="card-image-container">
              <img src={cashStackImg} alt="Capital Cash Stack" className="premium-3d-img" />
            </div>
            <h3 className="card-title">CAPITAL</h3>
            <div className="card-value">₹10,00,000</div>
          </motion.div>
          
          {/* Card 2: Risk Per Trade */}
          <motion.div className="glass-card premium-card-hover card-accent-red" variants={itemVariants} whileHover={{ y: -8 }}>
            <div className="card-top-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <div className="card-image-container">
              <img src={redShieldImg} alt="Risk Shield" className="premium-3d-img" />
            </div>
            <h3 className="card-title">RISK PER TRADE</h3>
            <div className="card-value">0.5% = ₹5,000</div>
            <p className="card-subtitle">Maximum loss per trade</p>
          </motion.div>

          {/* Card 3: Reward Per Trade */}
          <motion.div className="glass-card premium-card-hover card-accent-green" variants={itemVariants} whileHover={{ y: -8 }}>
            <div className="card-top-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <div className="card-image-container">
              <img src={targetArrowImg} alt="Target Reward" className="premium-3d-img" />
            </div>
            <h3 className="card-title">REWARD PER TRADE</h3>
            <div className="card-value">1% = ₹10,000</div>
            <p className="card-subtitle">Target profit per trade</p>
          </motion.div>
        </motion.div>

        {/* Income Overview Section */}
        <div className="income-overview-section" style={{ marginTop: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 className="income-heading glow-text">INCOME OVERVIEW</h3>
          </div>
          
          <motion.div 
            className="dashboard-grid bottom-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Working Days */}
            <motion.div className="glass-card premium-card-hover card-accent-green" variants={itemVariants} whileHover={{ y: -8 }}>
              <div className="card-image-container small-img">
                <img src={calendarDaysImg} alt="Working Days Calendar" className="premium-3d-img" />
              </div>
              <div className="card-label">WORKING DAYS</div>
              <div className="card-big-value text-orange">15 DAYS</div>
            </motion.div>
            
            {/* Monthly Approximate */}
            <motion.div className="glass-card premium-card-hover card-accent-green" variants={itemVariants} whileHover={{ y: -8 }}>
              <div className="card-image-container small-img">
                <img src={moneyBagGraphImg} alt="Monthly Income Graph" className="premium-3d-img" />
              </div>
              <div className="card-label">MONTHLY APPROXIMATE</div>
              <div className="card-big-value text-orange">1.3 - 1.5 LAKH</div>
            </motion.div>

            {/* Yearly Approximate */}
            <motion.div className="glass-card premium-card-hover card-accent-green" variants={itemVariants} whileHover={{ y: -8 }}>
              <div className="card-image-container small-img">
                <img src={yearlyCalendarWealthImg} alt="Yearly Growth" className="premium-3d-img" />
              </div>
              <div className="card-label">YEARLY APPROXIMATE</div>
              <div className="card-big-value text-orange">= 16 LAKH</div>
            </motion.div>

            {/* By 2034 */}
            <motion.div className="glass-card premium-card-hover card-accent-gold" variants={itemVariants} whileHover={{ y: -8 }}>
              <div className="card-image-container small-img">
                <img src={futuristicCityGoldImg} alt="Future Wealth City" className="premium-3d-img" />
              </div>
              <div className="card-label">BY 2034</div>
              <div className="card-big-value text-white">= 1.2 CR</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Section 2: Key Benefits Strip */}
        <div className="benefits-strip-container" style={{ marginTop: '80px' }}>
          <motion.div 
            className="benefits-strip"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, text: "No Third party deposits required" },
              { icon: <ArrowRight size={24} />, text: "100% Direct" },
              { icon: <Droplets size={24} />, text: "100% Liquid" },
              { icon: <Calendar size={24} />, text: "Monthly cashouts" }
            ].map((benefit, idx) => (
              <motion.div key={idx} className="benefit-item glass-card" variants={itemVariants}>
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
              <div className="glass-card content-card">
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
