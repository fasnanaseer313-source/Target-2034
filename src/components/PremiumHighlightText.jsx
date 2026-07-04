import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PremiumHighlightText = ({ children, delayIndex = 0, className = '', colorTheme = 'gold' }) => {
  // Use state to track if entrance animation has completed so we can trigger the one-time sweep
  const [hasEntered, setHasEntered] = useState(false);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95,
      letterSpacing: '0.05em'
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      letterSpacing: 'normal',
      transition: { 
        duration: 1.0, 
        ease: [0.19, 1, 0.22, 1], // easeOutExpo
        delay: delayIndex * 0.4 
      }
    }
  };

  return (
    <motion.span
      className={`premium-highlight-wrapper ${className}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ display: 'inline-block', position: 'relative' }}
      onAnimationComplete={(definition) => {
        if (definition === 'visible') {
          setHasEntered(true);
        }
      }}
    >
      <span className={`premium-highlight-content theme-${colorTheme} ${hasEntered ? 'post-entrance' : ''}`}>
        {children}
      </span>
    </motion.span>
  );
};

export default PremiumHighlightText;
