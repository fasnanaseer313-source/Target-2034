import React from 'react';
import Hero from '../sections/Hero';
import ParentCompany from '../sections/ParentCompany';
// Import other sections as we build them

import Philosophy from '../sections/Philosophy';
import GrowthCalculator from '../sections/GrowthCalculator';
import TargetTimeline from '../sections/TargetTimeline';
import InvestmentJourney from '../sections/InvestmentJourney';
import WhyChooseUs from '../sections/WhyChooseUs';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ParentCompany />
      <Philosophy />
      <TargetTimeline />
      <InvestmentJourney />
      <GrowthCalculator />
      <WhyChooseUs />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
