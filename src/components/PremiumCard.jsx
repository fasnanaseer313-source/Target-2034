import React from 'react';
import { motion } from 'framer-motion';
import './components.css';

const PremiumCard = ({ children, className = '', hoverLift = true }) => {
  return (
    <motion.div 
      whileHover={hoverLift ? { y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`premium-card ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PremiumCard;
