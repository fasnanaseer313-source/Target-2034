import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wallet, FileText, UserCheck, Activity, Trophy } from 'lucide-react';
import PremiumHighlightText from '../components/PremiumHighlightText';
import './sections.css';
import './journey.css';

const steps = [
  {
    icon: Wallet,
    title: 'Add Funds to Your Demat Account',
    description: 'Securely transfer funds to your Demat account to begin your mutual fund investment journey.',
    animationDelay: 0,
    iconClass: 'step-icon-wallet',
    bgImage: '/step_1_bg.png'
  },
  {
    icon: FileText,
    title: 'Share Your Demat Account Details',
    description: 'Provide your Demat account information so our investment team can begin the onboarding process.',
    animationDelay: 0.15,
    iconClass: 'step-icon-doc',
    bgImage: '/step_2_bg.png'
  },
  {
    icon: UserCheck,
    title: 'Account Handled by Our Team',
    description: 'Our experienced investment professionals manage your portfolio using carefully planned mutual fund strategies.',
    animationDelay: 0.30,
    iconClass: 'step-icon-team',
    bgImage: '/step_3_bg.png'
  },
  {
    icon: Activity,
    title: 'Regular Portfolio Updates',
    description: 'Receive consistent updates and complete transparency about your investment performance.',
    animationDelay: 0.45,
    iconClass: 'step-icon-chart',
    bgImage: '/step_4_bg.png'
  },
  {
    icon: Trophy,
    title: 'Monthly Cashouts',
    description: 'Enjoy regular monthly returns while your investments continue to grow with disciplined management.',
    animationDelay: 0.60,
    iconClass: 'step-icon-trophy',
    bgImage: '/step_5_bg.png'
  }
];

const InvestmentJourney = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section bg-dark" id="journey" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
      {/* Background Ambient Effects */}
      <div className="ambient-particles"></div>
      <div className="bg-grid-lines"></div>
      
      <div className="container" ref={containerRef}>
        <div style={{ textAlign: 'center', marginBottom: '100px', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', color: 'white', letterSpacing: '1px', marginBottom: '24px', textTransform: 'uppercase' }}>
            Empowering Your <PremiumHighlightText>Journey</PremiumHighlightText> Forward to <PremiumHighlightText>Success</PremiumHighlightText>
          </h2>
          <p className="text-grey" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: '#9ca3af', lineHeight: '1.6' }}>
            A simple, transparent process that guides your mutual fund investment from start to finish.
          </p>
        </div>

        <div className="journey-process-container">
          {/* Animated Connecting Line */}
          <div className="journey-line-container">
            <div className="journey-line-track"></div>
            <motion.div className="journey-line-progress" style={{ height: lineHeight }}>
              <div className="journey-line-glow"></div>
            </motion.div>
          </div>

          <div className="journey-steps-wrapper">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 !== 0; // 0-indexed: 1st item (idx 0) is odd row (left side), 2nd (idx 1) is even row (right side)
              
              return (
                <motion.div 
                  key={idx}
                  className={`journey-step-row ${isEven ? 'row-right' : 'row-left'}`}
                  initial={{ opacity: 0, y: 50, scale: 0.95, rotate: isEven ? 1 : -1 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: step.animationDelay, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div 
                    className="journey-step-card glass-card"
                    style={{ 
                      backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.6), rgba(17, 24, 39, 0.6)), url(${step.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="journey-step-header">
                      <div className={`journey-step-icon-wrapper ${step.iconClass}`}>
                        <Icon className="journey-step-icon" size={32} />
                        <div className="journey-step-glow"></div>
                        <div className="floating-particles"></div>
                      </div>
                      <div className="journey-step-number">Step {idx + 1}</div>
                    </div>
                    <div className="journey-step-content">
                      <h4 className="journey-step-title">{step.title}</h4>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="journey-step-dot">
                    <div className="dot-inner"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentJourney;
