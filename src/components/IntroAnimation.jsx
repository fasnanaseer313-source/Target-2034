import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  const bullControls = useAnimation();
  const glowControls = useAnimation();
  const textControls = useAnimation();
  const lineControls = useAnimation();
  const containerControls = useAnimation();

  const easePremium = [0.22, 1, 0.36, 1];

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Logo Reveal
      await bullControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, type: "spring", bounce: 0.25 }
      });

      // Step 2: Premium Glow
      glowControls.start({
        opacity: [0, 0.8, 0.5],
        scale: [0.8, 1.2, 1.1],
        transition: { duration: 1, ease: "easeInOut" }
      });
      
      await new Promise(r => setTimeout(r, 200));

      // Step 3 & 4: Bull Movement and Text Reveal
      bullControls.start({
        x: -110,
        scale: 0.95,
        transition: { duration: 0.4, ease: easePremium }
      });

      await textControls.start({
        opacity: 1,
        x: 0,
        filter: "blur(0px) drop-shadow(0px 0px 15px rgba(255,255,255,0.9)) drop-shadow(0px 0px 3px rgba(255,255,255,0.5))",
        transition: { duration: 0.4, ease: easePremium }
      });

      // Step 5: Underline Accent
      await lineControls.start({
        scaleX: 1,
        transition: { duration: 0.3, ease: easePremium }
      });

      // Step 6: Final Hold
      await new Promise(r => setTimeout(r, 400));

      // Step 7: Transition Out
      await containerControls.start({
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.4, ease: easePremium }
      });

      onComplete();
    };

    sequence();
  }, [bullControls, glowControls, textControls, lineControls, containerControls, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={containerControls}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#050505',
        background: 'radial-gradient(circle at center, #111111 0%, #000000 100%)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Particles (Subtle) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.3
        }} 
      />

      {/* Main Lockup Container */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Glow behind bull and text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={glowControls}
          style={{
            position: 'absolute',
            width: 480,
            height: 240,
            borderRadius: '50%',
            background: 'rgba(251, 191, 36, 0.5)',
            filter: 'blur(50px)',
            left: '50%',
            marginLeft: -240,
          }}
        />

        {/* Bull Logo */}
        <motion.img
          src="/target-bull.png"
          alt="Target2K34 Bull"
          initial={{ scale: 0, opacity: 0, x: 0 }}
          animate={bullControls}
          style={{
            width: 220,
            height: 'auto',
            position: 'absolute',
            left: '50%',
            marginLeft: -110,
            filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))',
          }}
        />

        {/* Text Logo */}
        <motion.img
          src="/target-text.png"
          alt="Target2K34 Text"
          initial={{ opacity: 0, x: 40, filter: "blur(10px) drop-shadow(0 0 0px transparent)" }}
          animate={textControls}
          style={{
            height: 140,
            width: 'auto',
            position: 'absolute',
            left: '50%',
            marginLeft: -90,
          }}
        />

        {/* Underline Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={lineControls}
          style={{
            position: 'absolute',
            bottom: -70,
            left: '50%',
            marginLeft: -180,
            width: 360,
            height: 3,
            background: 'linear-gradient(90deg, transparent, #dc2626, transparent)',
            transformOrigin: 'left'
          }}
        />
      </div>
    </motion.div>
  );
};

export default IntroAnimation;
