import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import PremiumHighlightText from '../components/PremiumHighlightText';
import './sections.css';

const WealthGrowthProjection = () => {
  const sectionRef = useRef(null);
  // Trigger when 35% of the element is visible
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });
  const controls = useAnimation();
  const [hoveredPoint, setHoveredPoint] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.25, transition: { duration: 0.6, delay: 0.3 } }
  };

  const axisVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, delay: 0.5, ease: "easeInOut" }
    }
  };

  const areaVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: { duration: 2, delay: 0.5, ease: "easeInOut" }
    }
  };

  const areaOpacityVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.7, ease: "easeOut" }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.95 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: 1.1 + custom * 0.12, ease: "easeOut" }
    })
  };

  const svgWidth = 800;
  const svgHeight = 300;

  const getCoords = (xPercent, yPercent) => {
    return {
      x: (xPercent / 100) * svgWidth,
      y: svgHeight - ((yPercent / 100) * svgHeight)
    };
  };

  const points = [
    { year: 2026, x: 0, y: 8.3, label: "₹10,00,000" },
    { year: 2027, x: 12.5, y: 25, label: "₹18,00,000" },
    { year: 2028, x: 25, y: 61.6, label: "₹36,00,000" },
    { year: 2029, x: 37.5, y: 75, label: "₹54,00,000" },
    { year: 2030, x: 50, y: 85, label: "₹72,00,000" },
    { year: 2031, x: 62.5, y: 90, label: "₹90,00,000" },
    { year: 2032, x: 75, y: 94, label: "₹1,08,00,000" },
    { year: 2033, x: 87.5, y: 97, label: "₹1,26,00,000" },
    { year: 2034, x: 100, y: 100, label: "₹1,26,00,000" }
  ];

  let pathD = `M ${getCoords(points[0].x, points[0].y).x} ${getCoords(points[0].x, points[0].y).y}`;
  for (let i = 1; i < points.length; i++) {
    const p0 = getCoords(points[i - 1].x, points[i - 1].y);
    const p1 = getCoords(points[i].x, points[i].y);
    const cpX1 = p0.x + (p1.x - p0.x) / 3;
    const cpY1 = p0.y;
    const cpX2 = p1.x - (p1.x - p0.x) / 3;
    const cpY2 = p1.y;
    pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p1.x} ${p1.y}`;
  }

  const fillPathD = `${pathD} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`;

  return (
    <motion.section
      ref={sectionRef}
      className="section wealth-projection-section"
      id="projection"
      style={{ paddingTop: '20px' }}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container">
        <div className="projection-container">
          <div className="projection-header">
            <h2 className="heading-lg text-white">
              Wealth Growth <PremiumHighlightText colorTheme="purple-green">Projection</PremiumHighlightText>
            </h2>
            <p className="subtitle-gray">₹10 Lakh → ₹1.2 Crore • 2026 to 2034</p>
          </div>

          <div className="projection-pills">
            <motion.div custom={0} variants={pillVariants} className="proj-pill pill-green">
              <span className="dot"></span> 2026 • ₹10L
            </motion.div>
            <motion.div custom={1} variants={pillVariants} className="proj-pill pill-purple">
              <span className="dot"></span> 2028 • ₹36L
            </motion.div>
            <motion.div custom={2} variants={pillVariants} className="proj-pill pill-blue">
              <span className="dot"></span> 2031 • ₹90L
            </motion.div>
            <motion.div custom={3} variants={pillVariants} className="proj-pill pill-yellow">
              <span className="dot"></span> 2034 • ₹1.2Cr
            </motion.div>
          </div>

          <div className="chart-wrapper" style={{ position: 'relative' }}>
            {/* Tooltip */}
            <AnimatePresence>
              {hoveredPoint && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`chart-tooltip ${hoveredPoint.x >= 60 ? 'tooltip-right-edge' : hoveredPoint.x <= 30 ? 'tooltip-left-edge' : ''}`}
                  style={{
                    position: 'absolute',
                    left: `${hoveredPoint.x}%`,
                    top: `calc(${100 - hoveredPoint.y}% - 50px)`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  <div className="tooltip-year">{hoveredPoint.year}</div>
                  <div className="tooltip-value">{hoveredPoint.label}</div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Y Axis Labels */}
            <motion.div className="y-axis" variants={axisVariants}>
              <span>₹120L</span>
              <span>₹90L</span>
              <span>₹60L</span>
              <span>₹30L</span>
              <span>₹0L</span>
            </motion.div>

            <div className="chart-main">
              {/* Grid Lines */}
              <motion.div className="grid-lines" variants={gridVariants}>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
              </motion.div>

              {/* SVG Chart */}
              <div className="svg-container">
                <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
                      <stop offset="40%" stopColor="rgba(34, 197, 94, 0.2)" />
                      <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                    </linearGradient>
                    <clipPath id="revealClip">
                      <motion.rect x="0" y="0" height={svgHeight} variants={areaVariants} />
                    </clipPath>
                  </defs>

                  <motion.g clipPath="url(#revealClip)" variants={areaOpacityVariants}>
                    <path d={fillPathD} fill="url(#areaGradient)" />
                  </motion.g>

                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3"
                    style={{ filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.4))' }}
                    variants={lineVariants}
                  />

                  {/* Data Points */}
                  {points.map((p, i) => {
                    const coords = getCoords(p.x, p.y);
                    const pointVariants = {
                      hidden: { scale: 0, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          bounce: 0.4,
                          duration: 0.5,
                          delay: 0.8 + (i * 0.15)
                        }
                      }
                    };
                    return (
                      <g key={i}
                        onMouseEnter={() => setHoveredPoint(p)}
                        onMouseLeave={() => setHoveredPoint(null)}
                        style={{ cursor: 'pointer', outline: 'none' }}
                      >
                        {/* Invisible larger hit area for easier hovering */}
                        <circle cx={coords.x} cy={coords.y} r="20" fill="transparent" />

                        <motion.circle
                          cx={coords.x}
                          cy={coords.y}
                          r="5"
                          fill="#ffffff"
                          stroke="#22c55e"
                          strokeWidth="2.5"
                          variants={pointVariants}
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* X Axis Labels */}
              <motion.div className="x-axis" variants={axisVariants}>
                {points.map(p => (
                  <span key={p.year}>
                    <span className="desktop-year">{p.year}</span>
                    <span className="mobile-year">{p.year.toString().slice(-2)}</span>
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="projection-bottom-cards">
            <div className="proj-bottom-card card-green-light">
              <div className="proj-card-label">START</div>
              <div className="proj-card-value text-green">₹10,00,000</div>
            </div>
            <div className="proj-bottom-card card-purple-light">
              <div className="proj-card-label">MONTHLY</div>
              <div className="proj-card-value text-purple">₹1.3-1.5 Lakh</div>
            </div>
            <div className="proj-bottom-card card-yellow-light">
              <div className="proj-card-label">8-YEAR GOAL</div>
              <div className="proj-card-value text-yellow">₹1.2 Crore</div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default WealthGrowthProjection;
