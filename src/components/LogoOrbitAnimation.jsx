import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ORBIT_RADIUS = 140; // 180px square = 127px corner diagonal, 140px ensures clear outer orbit.

const ICONS_MAP = [
  { icon: '🐝', angleOffset: 0, duration: 10, direction: 1, floatOffset: 6 },
  { icon: '💛', angleOffset: 120, duration: 8, direction: -1, floatOffset: -8 },
  { icon: '🍯', angleOffset: 240, duration: 12, direction: 1, floatOffset: 5 },
  { icon: '✨', angleOffset: 60, duration: 9, direction: -1, floatOffset: -5 },
];

const OrbitingIcon = ({ data, isHovered, delay }) => {
  // Speed up by 15% on hover -> 0.85 multiplier on duration
  const currentDuration = isHovered ? data.duration * 0.85 : data.duration;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + 0.5, duration: 0.8 }}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 0,
        height: 0,
        zIndex: 20,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        animate={{
          rotate: data.direction === 1 ? [0, 360] : [360, 0]
        }}
        transition={{
          duration: currentDuration,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: -20, // center the 40px icon
            left: -20,
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '32px',
            transform: `translate(${Math.cos((data.angleOffset * Math.PI) / 180) * ORBIT_RADIUS}px, ${Math.sin((data.angleOffset * Math.PI) / 180) * ORBIT_RADIUS}px)`,
            filter: `drop-shadow(0px 8px 12px rgba(0,0,0,0.4)) ${isHovered ? 'drop-shadow(0 0 10px rgba(251,191,36,0.8))' : ''}`
          }}
        >
          {/* Inner counter-rotation to keep the icon upright */}
          <motion.div
            animate={{
              rotate: data.direction === 1 ? [360, 0] : [0, 360],
              y: [0, data.floatOffset, 0],
              x: [0, data.floatOffset / 2, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: currentDuration, repeat: Infinity, ease: 'linear' },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              x: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            {data.icon}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const LogoOrbitAnimation = ({ children, icons = ICONS_MAP }) => {
  const [ref, inView] = useInView({ threshold: 0.35, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      ref={ref}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={inView ? { opacity: 1, y: isHovered ? -5 : 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: 'relative',
          zIndex: 10,
          boxShadow: isHovered ? '0 15px 35px rgba(251,191,36,0.25)' : 'none',
          borderRadius: '12px',
        }}
      >
        {children}
      </motion.div>
      
      {/* Orbiting Icons Container */}
      {inView && icons.map((data, index) => (
        <OrbitingIcon 
          key={index} 
          data={data} 
          isHovered={isHovered} 
          delay={index * 0.2} 
        />
      ))}
    </div>
  );
};

export default LogoOrbitAnimation;
