import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './components.css';

const Button = ({ children, variant = 'primary', icon = false, onClick, className = '' }) => {
  const baseClass = 'premium-btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClass} ${variantClass} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <ChevronRight className="btn-icon" size={18} />}
    </motion.button>
  );
};

export default Button;
