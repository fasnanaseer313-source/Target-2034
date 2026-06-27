import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './sections.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Sneha Agarwal',
    role: 'New Trader Turned Confident Executor',
    text: "Mera safar zero se shuruaat ki thi - sirf capital tha. InvestEQ ke onboarding se lekar program tak, sab kuch structured tha. Ab main scanner-based entries karti hoon, aur loss ka darr nahi rehta.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Aditya Kulkarni',
    role: 'Algo Enthusiast & Data-Driven Trader',
    text: "InvestEQ is not just another research form-it's an ecosystem. From real-time market signals to structured strategy modules, everything is backed by logic and live proof. The Discord server itself is like a war room for serious traders.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Menon',
    role: 'Working Professional & Swing Trader',
    text: "With just 2 hours every evening, I follow the InvestEQ watchlist and scanner setups. The SEBI-verified research and clear risk-reward planning have helped me generate steady monthly returns - without stress or guesswork.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Rahul Sharma',
    role: 'Full-Time Day Trader',
    text: "The precision of their levels is unmatched. I used to struggle with risk management, but their real-time alerts and clear stop-loss guidelines changed my entire trading psychology. Highly recommended for serious traders.",
    rating: 5,
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const extendedData = [...testimonialsData, ...testimonialsData]; // Duplicate for infinite scroll

  useEffect(() => {
    let animationId;
    const scroll = () => {
      if (scrollRef.current && !isHovered) {
        scrollRef.current.scrollLeft += 1.5; // Adjust speed here
        
        // When we scroll past half the width (which is exactly the end of the first array), snap back to 0
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="section testimonials-section bg-dark" id="testimonials">
      <div className="container">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Customer <span className="text-orange">Testimonials</span>
          </motion.h2>
        </div>

        <div 
          className="testimonials-carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="carousel-nav-btn left-btn" onClick={scrollLeft}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="testimonials-scroll-area continuous-scroll" ref={scrollRef}>
            {extendedData.map((testimonial, index) => (
              <motion.div 
                key={`${testimonial.id}-${index}`} 
                className="testimonial-card glass-card premium-card-hover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="quote-icon-top">
                  <Quote size={20} className="text-orange" fill="currentColor" />
                </div>
                
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <span role="img" aria-label="user">👱‍♂️</span>
                  </div>
                  <div>
                    <h4 className="text-orange font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-muted text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="testimonial-text text-muted mb-6">
                  {testimonial.text}
                </p>
                
                <div className="testimonial-footer">
                  <div className="stars-container text-orange flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className="quote-icon-bottom">
                    <Quote size={20} className="text-orange" fill="currentColor" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="carousel-nav-btn right-btn" onClick={scrollRight}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots mt-8 flex justify-center gap-2">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
