import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Mocking 3D icons using high-quality emojis with CSS filters to look glossy/3D, 
// or acting as image placeholders if replaced later.
const ICONS = [
  { id: 1, icon: '💰', top: '15%', left: '10%', depth: 'near', delay: 0.1 },
  { id: 2, icon: '🚀', top: '25%', left: '85%', depth: 'mid', delay: 0.4 },
  { id: 3, icon: '🎯', top: '65%', left: '15%', depth: 'far', delay: 0.7 },
  { id: 4, icon: '💎', top: '75%', left: '80%', depth: 'near', delay: 0.2 },
  { id: 5, icon: '📈', top: '45%', left: '5%', depth: 'far', delay: 0.8 },
  { id: 6, icon: '🛡️', top: '35%', left: '75%', depth: 'mid', delay: 0.5 },
  { id: 7, icon: '🥇', top: '85%', left: '40%', depth: 'far', delay: 0.9 },
  { id: 8, icon: '🔥', top: '55%', left: '90%', depth: 'near', delay: 0.3 }
];

const FloatingIcon = ({ data, mousePosition }) => {
  const { scrollY } = useScroll();
  
  // Depth settings
  const scaleBase = data.depth === 'near' ? 1 : data.depth === 'mid' ? 0.85 : 0.7;
  const parallaxFactor = data.depth === 'near' ? -0.15 : data.depth === 'mid' ? -0.1 : -0.05;
  const blur = data.depth === 'near' ? '0px' : data.depth === 'mid' ? '1px' : '2px';
  const opacityBase = data.depth === 'near' ? 1 : data.depth === 'mid' ? 0.8 : 0.6;
  
  // Parallax based on scroll
  const rawY = useTransform(scrollY, [0, 2000], [0, 2000 * parallaxFactor]);
  const y = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Continuous floating animations (randomized duration between 6-10s)
  const duration = 6 + (data.id % 5);
  
  // Mouse interaction logic (move max 8px towards mouse)
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const iconRef = useRef(null);

  useEffect(() => {
    if (!iconRef.current) return;
    const rect = iconRef.current.getBoundingClientRect();
    const iconCenter = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    
    const dx = mousePosition.x - iconCenter.x;
    const dy = mousePosition.y - iconCenter.y;
    
    // Normalize and cap at 8px
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 500) { // Only react if mouse is somewhat close
      const factor = (500 - dist) / 500;
      setOffset({
        x: (dx / dist) * 8 * factor * (data.depth === 'near' ? 1 : 0.5),
        y: (dy / dist) * 8 * factor * (data.depth === 'near' ? 1 : 0.5)
      });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  }, [mousePosition, data.depth]);

  return (
    <motion.div
      ref={iconRef}
      style={{
        position: 'absolute',
        top: data.top,
        left: data.left,
        y,
        x: offset.x,
        filter: `blur(${blur}) drop-shadow(0px 10px 15px rgba(0,0,0,0.4))`,
        fontSize: '48px', // Acts as size for emoji
        zIndex: data.depth === 'near' ? 10 : data.depth === 'mid' ? 5 : 1,
        pointerEvents: 'none'
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: opacityBase, scale: scaleBase }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: data.delay }}
    >
      <motion.div
        animate={{
          y: ['0%', '-15%', '0%'],
          x: ['0%', '5%', '-5%', '0%'],
          rotate: [-4, 4, -4],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          display: 'inline-block',
          transformOrigin: 'center center'
        }}
      >
        {data.icon}
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="floating-icons-container" 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      {ICONS.map((data) => (
        <FloatingIcon key={data.id} data={data} mousePosition={mousePosition} />
      ))}
    </div>
  );
};

export default FloatingIconsBackground;
