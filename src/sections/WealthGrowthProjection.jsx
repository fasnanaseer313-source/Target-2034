import React from 'react';
import { motion } from 'framer-motion';
import './sections.css';

const WealthGrowthProjection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Data points for the chart (approximate mapping from 2026 to 2034)
  // X: 0 to 100%, Y: 0 to 100% (where 100% is 1.2Cr, 0% is 0L)
  // 1.2Cr = 120L.
  // 2026: 10L (8.3%)
  // 2028: 74L (61.6%)
  // 2031: 108L (90%)
  // 2034: 120L (100%)
  
  // Create an SVG path for a smooth curve
  const svgWidth = 800;
  const svgHeight = 300;
  
  // Transform percentages to SVG coordinates (inverted Y because SVG 0,0 is top-left)
  const getCoords = (xPercent, yPercent) => {
    return {
      x: (xPercent / 100) * svgWidth,
      y: svgHeight - ((yPercent / 100) * svgHeight)
    };
  };

  // Points based on the image's curve (using years 2026 to 2034 as 0% to 100% X)
  const points = [
    { year: 2026, x: 0, y: 8.3, label: "₹10L" },
    { year: 2027, x: 12.5, y: 25, label: "" },
    { year: 2028, x: 25, y: 61.6, label: "₹74L" },
    { year: 2029, x: 37.5, y: 75, label: "" },
    { year: 2030, x: 50, y: 85, label: "" },
    { year: 2031, x: 62.5, y: 90, label: "₹1.08Cr" },
    { year: 2032, x: 75, y: 94, label: "" },
    { year: 2033, x: 87.5, y: 97, label: "" },
    { year: 2034, x: 100, y: 100, label: "₹1.2Cr" }
  ];

  // Generate cubic bezier path data
  let pathD = `M ${getCoords(points[0].x, points[0].y).x} ${getCoords(points[0].x, points[0].y).y}`;
  for (let i = 1; i < points.length; i++) {
    const p0 = getCoords(points[i - 1].x, points[i - 1].y);
    const p1 = getCoords(points[i].x, points[i].y);
    const cpX1 = p0.x + (p1.x - p0.x) / 3;
    const cpY1 = p0.y; // Flat start
    const cpX2 = p1.x - (p1.x - p0.x) / 3;
    const cpY2 = p1.y; // Flat end
    pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p1.x} ${p1.y}`;
  }
  
  const fillPathD = `${pathD} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`;

  return (
    <section className="section wealth-projection-section" id="projection">
      <div className="container">
        <motion.div 
          className="projection-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="projection-header">
            <h2 className="heading-lg dark-heading">
              Wealth Growth <span className="highlight-purple-green">Projection</span>
            </h2>
            <p className="subtitle-gray">₹10 Lakh → ₹1.2 Crore • 2026 to 2034</p>
          </div>

          <div className="projection-pills">
            <div className="proj-pill pill-green">
              <span className="dot"></span> 2026 • ₹10L
            </div>
            <div className="proj-pill pill-purple">
              <span className="dot"></span> 2028 • ₹74L
            </div>
            <div className="proj-pill pill-blue">
              <span className="dot"></span> 2031 • ₹1.08Cr
            </div>
            <div className="proj-pill pill-yellow">
              <span className="dot"></span> 2034 • ₹1.2Cr
            </div>
          </div>

          <div className="chart-wrapper">
            {/* Y Axis Labels */}
            <div className="y-axis">
              <span>₹120L</span>
              <span>₹90L</span>
              <span>₹60L</span>
              <span>₹30L</span>
              <span>₹0L</span>
            </div>

            <div className="chart-main">
              {/* Grid Lines */}
              <div className="grid-lines">
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
              </div>

              {/* SVG Chart */}
              <div className="svg-container">
                <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(34, 197, 94, 0.2)" />
                      <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                    </linearGradient>
                  </defs>
                  <path d={fillPathD} fill="url(#areaGradient)" />
                  <path d={pathD} fill="none" stroke="#22c55e" strokeWidth="3" />
                  
                  {/* Data Points */}
                  {points.map((p, i) => {
                    const coords = getCoords(p.x, p.y);
                    return (
                      <circle 
                        key={i} 
                        cx={coords.x} 
                        cy={coords.y} 
                        r="5" 
                        fill="#ffffff" 
                        stroke="#22c55e" 
                        strokeWidth="2" 
                      />
                    );
                  })}
                </svg>
              </div>

              {/* X Axis Labels */}
              <div className="x-axis">
                {points.map(p => (
                  <span key={p.year}>{p.year}</span>
                ))}
              </div>
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

        </motion.div>
      </div>
    </section>
  );
};

export default WealthGrowthProjection;
