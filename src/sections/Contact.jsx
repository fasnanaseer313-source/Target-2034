import React from 'react';
import Button from '../components/Button';

const Contact = () => {
  const handleSchedule = () => {
    alert('Thank you for your interest! The scheduling system will be integrated shortly.');
  };

  const handleContact = () => {
    window.location.href = 'mailto:contact@target2034.com';
  };

  return (
    <section className="section bg-dark">
      <div className="container">
        <div style={{ background: 'var(--gradient-primary)', borderRadius: '24px', padding: '64px', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
          {/* Background Elements */}
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(203,161,83,0.1)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
          <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '24px' }}>Let's Build Your Future Together</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 48px' }}>
              Take the first step towards achieving your 2034 financial goals. Our advisors are ready to craft your personalized investment plan.
            </p>
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" onClick={handleSchedule}>Schedule Consultation</Button>
              <Button variant="secondary" onClick={handleContact} style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>Contact Advisor</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
